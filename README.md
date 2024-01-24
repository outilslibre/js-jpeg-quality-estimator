# JPEG Quality Estimator

![npm](https://img.shields.io/npm/v/jpeg-quality-estimator)
![GitHub](https://github.com/outilslibre/js-jpeg-quality-estimator)

## Overview

The JPEG Quality Estimator is a lightweight JavaScript library that allows you to estimate the quality percentage of a JPEG image provided as a data URI. This can be useful in scenarios where you need to analyze or optimize JPEG images dynamically in the browser.

## Origin

Taken from [a gist](https://gist.github.com/FranckFreiburger/d8e7445245221c5cf38e69a88f22eeeb) by [Franck Freiburger](https://gist.github.com/FranckFreiburger)

## Features

- **Estimate Quality Percentage:** Quickly determine the estimated quality percentage of a JPEG image.
- **Browser Compatibility:** Works seamlessly in modern web browsers.

## Installation

You can install the package using npm:

```bash
npm install jpeg-quality-estimator
```

## Usage

### Using npm Package

```javascript
const getJpegQuality = require('jpeg-quality-estimator');

const dataUri = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAuRXhpZgAATU0AKgAAAAgAAkAAAAMAAAABAAEAAEABAAEAAAABAAAA...";

const quality = getJpegQuality(dataUri);
console.log(`Estimated JPEG Quality: ${quality}%`);
```

## API

### `getJpegQuality(data: string | UInt8Array): number`

- `data`: The data URI of the JPEG image or direct UInt8Array

Returns the estimated quality percentage of the provided JPEG image.

## License

This project is licensed under the [MIT License](LICENSE).

## Issues

If you encounter any issues or have suggestions, please feel free to open an issue on [GitHub](https://github.com/outilslibre/jpeg-quality-estimator/issues).

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.