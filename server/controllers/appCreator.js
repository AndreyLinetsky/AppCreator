const cloudinary = require("cloudinary");

const DEFAULT_SECONDARY_COLOR = "black";

async function uploadCompanyLogo(req, res) {
  try {
    const {
      body: { imagePath }
    } = req;

    if (!imagePath) {
      throw new Error("Image path is missing");
    }

    cloudinary.v2.uploader.upload(
      imagePath,
      { colors: true },
      (error, result) => {
        if (error) {
          throw new Error("Failed to upload image");
        }
        const [firstColor, secondColor] = result.predominant.google;
        if (!firstColor) {
          throw new Error("Colors are missing");
        }
        res.json({
          colors: {
            first: firstColor[0],
            second: secondColor ? secondColor[0] : DEFAULT_SECONDARY_COLOR
          }
        });
      }
    );
  } catch (err) {
    res.json({ errorMessage: err.message });
  }
}

module.exports = {
  uploadCompanyLogo
};
