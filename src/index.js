// imageProcessing.js

class ImageProcessor {
    constructor(imageData) {
        this.imageData = imageData;
        this.width = imageData.width;
        this.height = imageData.height;
        this.data = imageData.data;
    }

    // Method to apply grayscale filter
    applyGrayscale() {
        for (let i = 0; i < this.data.length; i += 4) {
            const avg = (this.data[i] + this.data[i + 1] + this.data[i + 2]) / 3;
            this.data[i] = avg;
            this.data[i + 1] = avg;
            this.data[i + 2] = avg;
        }
    }

    // Method to invert colors
    invertColors() {
        for (let i = 0; i < this.data.length; i += 4) {
            this.data[i] = 255 - this.data[i];
            this.data[i + 1] = 255 - this.data[i + 1];
            this.data[i + 2] = 255 - this.data[i + 2];
        }
    }

    // Method to apply sepia filter
    applySepia() {
        for (let i = 0; i < this.data.length; i += 4) {
            const r = this.data[i];
            const g = this.data[i + 1];
            const b = this.data[i + 2];
            this.data[i] = Math.min(255, (0.393 * r + 0.769 * g + 0.189 * b));
            this.data[i + 1] = Math.min(255, (0.349 * r + 0.686 * g + 0.168 * b));
            this.data[i + 2] = Math.min(255, (0.272 * r + 0.534 * g + 0.131 * b));
        }
    }

    // Method to get processed image data
    getImageData() {
        return this.imageData;
    }
}

// Exporting the ImageProcessor class
module.exports = ImageProcessor;
