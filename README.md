# Image Set Hue

This project is a Vite-based library written in TypeScript. It provides a curried function to process images by converting their RGB colors to HUE and adjusting all hues to match a given target hue.


[中文文档](README_zh.md)

## Features

- **Input Flexibility**: Accepts an image as a Blob or BlobUrl.
- **Color Conversion**: Converts RGB colors to HUE.
- **Hue Adjustment**: Adjusts all hues to a specified target hue.
- **Output**: Returns the processed image as a Blob.

## How It Works

1. **Image Loading**:
   - The input image (Blob or BlobUrl) is loaded into an HTMLImageElement.
   - A WebGL context is initialized to process the image.

2. **Shader Preparation**:
   - Vertex and fragment shaders are created to handle the image processing.
   - The fragment shader converts RGB colors to HSL, adjusts the hue, and converts back to RGB.

3. **Hue Calculation**:
   - The target hue is calculated from the provided target color using the `d3-color` library.

4. **Image Processing**:
   - The image is drawn onto a WebGL canvas.
   - The shaders process the image to adjust its hues.

5. **Output Generation**:
   - The processed image is converted back to a Blob using the canvas API.

## Installation

Install the dependencies using npm:

```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

## Build

To build the library:

```bash
npm run build
```

## Usage

Import the library and use the provided function to process images:

```typescript
import { processImage } from 'your-library';

const processWithHue = processImage(blobOrBlobUrl);
const resultBlob = await processWithHue(targetHue);
```

## Workflow Diagram

Below is a simplified flowchart of the image processing workflow:

```mermaid
graph TD
    A[Input Image (Blob or BlobUrl)] --> B[Load Image into HTMLImageElement]
    B --> C[Initialize WebGL Context]
    C --> D[Prepare Shaders]
    D --> E[Calculate Target Hue]
    E --> F[Draw Image on WebGL Canvas]
    F --> G[Process Image with Shaders]
    G --> H[Convert Canvas to Blob]
    H --> I[Output Processed Image Blob]
```
