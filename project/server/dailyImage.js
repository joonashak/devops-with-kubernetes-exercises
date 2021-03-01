const { default: axios } = require("axios");
const fs = require("fs");

let updatedAt = null;

const isToday = (date) => {
  if (!date) {
    return false;
  }

  const now = new Date();
  const y = now.getFullYear() === date.getFullYear();
  const m = now.getMonth() === date.getMonth();
  const d = now.getDate() === date.getDate();
  return y && m && d;
};

const updateImage = async (date) => {
  if (!isToday(updatedAt)) {
    const imageReponse = await axios.get("https://picsum.photos/1200", {
      responseType: "stream",
    });
    await imageReponse.data.pipe(fs.createWriteStream("/app/assets/daily.jpg"));
    updatedAt = new Date();
  }
};
updateImage(updatedAt);

module.exports = async (req, res, next) => {
  await updateImage(updatedAt);
  next();
};
