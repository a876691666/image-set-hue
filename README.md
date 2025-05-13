# Vite Library Project

This project is a Vite-based library written in TypeScript. It provides a curried function to process images by converting their RGB colors to HUE and adjusting all hues to match a given target hue.

## Features
- Accepts an image as a Blob or BlobUrl.
- Converts RGB colors to HUE.
- Adjusts all hues to a specified target hue.
- Returns the processed image as a Blob.

## Getting Started

### Installation

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

### Build

To build the library:

```bash
npm run build
```

### Usage

Import the library and use the provided function to process images.

```typescript
import { processImage } from 'your-library';

const processWithHue = processImage(blobOrBlobUrl);
const resultBlob = processWithHue(targetHue);
```
