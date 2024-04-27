const Jimp = require('jimp');

// lambda function that read red.png with the Jimp library and resizes it to 256 x 256 and return the modified image
exports.handler = async (event) => {
    const image = await Jimp.read('./red.png');
    image.resize(256, 256);
    image.greyscale();
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/png',
        },
        body: buffer.toString('base64'),
        isBase64Encoded: true,
    };
};