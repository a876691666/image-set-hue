import { color } from 'd3-color';

/**
 * Processes an image by converting its RGB colors to HUE and adjusting all hues to match given target color's hue.
 * @param {Blob | string} image - The image as a Blob or BlobUrl.
 * @returns {(targetColor: string) => Promise<Blob>} - A curried function that accepts a target color and returns a Promise resolving to the processed image as a Blob.
 */
export function processImage(image: Blob | string): (targetColor: string) => Promise<Blob> {
	const img = new Image();
	let cachedImage: HTMLImageElement | null = null;

	const loadImage = new Promise<HTMLImageElement>((resolve, reject) => {
		if (cachedImage) {
			resolve(cachedImage);
			return;
		}

		img.onload = () => {
			cachedImage = img;
			resolve(img);
		};
		img.onerror = (error) => {
			reject(error);
		};
		img.src = typeof image === 'string' ? image : URL.createObjectURL(image);
	});

	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl');

	if (!gl) {
		throw new Error('Failed to get WebGL context');
	}

	const prepareShadersAndProgram = () => {
		const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
        v_texCoord = a_texCoord;
      }
    `;

		const fragmentShaderSource = `
      precision mediump float;
      uniform sampler2D u_image;
      uniform float u_targetHue;
      varying vec2 v_texCoord;

      float hue2rgb(float p, float q, float t) {
        if (t < 0.0) t += 1.0;
        if (t > 1.0) t -= 1.0;
        if (t < 1.0 / 6.0) return p + (q - p) * 6.0 * t;
        if (t < 1.0 / 2.0) return q;
        if (t < 2.0 / 3.0) return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
        return p;
      }

      vec3 rgbToHsl(vec3 color) {
        float r = color.r, g = color.g, b = color.b;
        float maxVal = max(r, max(g, b));
        float minVal = min(r, min(g, b));
        float h = 0.0, s = 0.0, l = (maxVal + minVal) / 2.0;

        if (maxVal != minVal) {
          float d = maxVal - minVal;
          s = l > 0.5 ? d / (2.0 - maxVal - minVal) : d / (maxVal + minVal);
          if (maxVal == r) {
            h = (g - b) / d + (g < b ? 6.0 : 0.0);
          } else if (maxVal == g) {
            h = (b - r) / d + 2.0;
          } else {
            h = (r - g) / d + 4.0;
          }
          h /= 6.0;
        }
        return vec3(h, s, l);
      }

      vec3 hslToRgb(vec3 hsl) {
        float h = hsl.x, s = hsl.y, l = hsl.z;
        float r, g, b;

        if (s == 0.0) {
          r = g = b = l; // achromatic
        } else {
          float q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
          float p = 2.0 * l - q;
          r = hue2rgb(p, q, h + 1.0 / 3.0);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1.0 / 3.0);
        }
        return vec3(r, g, b);
      }

      void main() {
        vec4 color = texture2D(u_image, v_texCoord);
        vec3 hsl = rgbToHsl(color.rgb);
        hsl.x = u_targetHue / 360.0; // Adjust hue
        gl_FragColor = vec4(hslToRgb(hsl), color.a);
      }
    `;

		const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
		const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
		const program = createProgram(gl, vertexShader, fragmentShader);

		return program;
	};

	const program = prepareShadersAndProgram();

	return async (targetColor: string) => {
		const loadedImg = await loadImage;

		canvas.width = loadedImg.width;
		canvas.height = loadedImg.height;

		const d3Color = color(targetColor);
		if (!d3Color) {
			throw new Error('Invalid target color');
		}

		let targetHue: number;
		const rgb = d3Color.rgb();
		const r = rgb.r / 255;
		const g = rgb.g / 255;
		const b = rgb.b / 255;
		const minVal = Math.min(r, g, b);
		const maxVal = Math.max(r, g, b);

		if (maxVal === minVal) {
			targetHue = 0;
		} else if (maxVal === r) {
			targetHue = ((g - b) / (maxVal - minVal) + (g < b ? 6 : 0)) * 60;
		} else if (maxVal === g) {
			targetHue = ((b - r) / (maxVal - minVal) + 2) * 60;
		} else {
			targetHue = ((r - g) / (maxVal - minVal) + 4) * 60;
		}

		gl.useProgram(program);

		const targetHueLocation = gl.getUniformLocation(program, 'u_targetHue');
		if (targetHueLocation === null) {
			throw new Error('Failed to get uniform location for u_targetHue');
		}
		gl.uniform1f(targetHueLocation, targetHue);

		const texture = gl.createTexture();
		if (!texture) {
			throw new Error('Failed to create texture');
		}
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

		gl.texImage2D(
			gl.TEXTURE_2D,
			0,
			gl.RGBA,
			gl.RGBA,
			gl.UNSIGNED_BYTE,
			loadedImg
		);

		const positionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([
				-1, -1,
				1, -1,
				-1, 1,
				-1, 1,
				1, -1,
				1, 1,
			]),
			gl.STATIC_DRAW
		);

		const positionLocation = gl.getAttribLocation(program, 'a_position');
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

		const texCoordBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([
				0, 0,
				1, 0,
				0, 1,
				0, 1,
				1, 0,
				1, 1,
			]),
			gl.STATIC_DRAW
		);

		const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
		gl.enableVertexAttribArray(texCoordLocation);
		gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.viewport(0, 0, canvas.width, canvas.height);
		gl.drawArrays(gl.TRIANGLES, 0, 6);

		const startTime = performance.now();
		return new Promise<Blob>((resolve, reject) => {
			canvas.toBlob((blob) => {
				if (blob) {
					const endTime = performance.now();
					console.log(`Image loaded in ${endTime - startTime} ms`);
					resolve(blob);
				} else {
					reject(new Error('Failed to create Blob from canvas'));
				}
			});
		});
	};
}

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
	const shader = gl.createShader(type);
	if (!shader) {
		throw new Error('Failed to create shader');
	}
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		throw new Error(gl.getShaderInfoLog(shader) || 'Shader compile error');
	}
	return shader;
}

function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
	const program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw new Error(gl.getProgramInfoLog(program) || 'Program link error');
	}
	return program;
}
