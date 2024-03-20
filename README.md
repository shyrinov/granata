const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const ImageProcessor = require('image-processing-library');

// Load an image
const img = await loadImage('input.jpg');

// Create a canvas
const canvas = createCanvas(img.width, img.height);
const ctx = canvas.getContext('2d');

// Draw the image onto the canvas
ctx.drawImage(img, 0, 0);

// Get the image data from the canvas
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// Initialize the ImageProcessor with the image data
const processor = new ImageProcessor(imageData);

// Apply grayscale filter
processor.applyGrayscale();

// Get the processed image data
const processedImageData = processor.getImageData();

// Put the processed image data back onto the canvas
ctx.putImageData(processedImageData, 0, 0);

// Convert the canvas to a data URL
const dataUrl = canvas.toDataURL();

// Save the processed image to a file
const out = fs.createWriteStream('output.jpg');
const stream = canvas.createJPEGStream();
stream.pipe(out);

