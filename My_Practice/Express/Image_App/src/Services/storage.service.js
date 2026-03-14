const ImageKit = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  privateKey: process.env.ImageKit_PRIVATE_KEY,
  //privateKey: "private_A9hEXQj0OyFbEAOVTV8K1Wg8tW4=",
});

async function uploadFile(buffer) {
    console.log(buffer)
    const result = await imageKit.files.upload({
        file: buffer.toString("base64"),
        fileName:"image.jpg"
    })
    return result;
}

module.exports = uploadFile;
