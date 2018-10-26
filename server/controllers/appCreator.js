const cloudinary = require('cloudinary');

const DEFAULT_SECONDARY_COLOR = 'black';

function uploadImage(req, res) {
  try {
    const {
      body: { image }
    } = req;

    if (!image) {
      throw new Error('Image is missing');
    }

    cloudinary.v2.uploader.upload(image, { colors: true }, (error, result) => {
      if (error) {
        throw new Error('Failed to upload image');
      }
      const [firstColor, secondColor] = result.predominant.google;
      if (!firstColor) {
        throw new Error('Colors are missing');
      }
      res.json({
        colors: {
          first: firstColor[0],
          second: secondColor ? secondColor[0] : DEFAULT_SECONDARY_COLOR
        }
      });
    });
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
}

module.exports = {
  uploadImage
};
