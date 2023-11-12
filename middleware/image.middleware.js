import sharp from "sharp";

export default class Image {
  constructor(buffer, format = "original") {
    this.buffer = buffer;
  }

  async convert(format) {
    switch (format) {
      case "webp_64":
        await this.webp_64();
        break;
      case "webp_card":
        await this.webp_card();
        break;
      default:
        throw new Error("need know format to convert");
    }
  }

  async webp_64() {
    this.buffer = await sharp(this.buffer, { animated: true })
      .webp({ quality: 100, smartSubsample: true })
      .resize(64, 64, { fit: "cover", withoutEnlargement: true })
      .toBuffer();
  }

  async webp_card() {
    const metadata = await sharp(this.buffer).metadata();
    let { width, height } = metadata;
    if (width > height) {
      width = undefined;
      height = 288;
    } else if (width < height) {
      width = 190;
      height = undefined;
    } else {
      width = 288;
      height = undefined;
    }

    this.buffer = await sharp(this.buffer, { animated: true })
      .webp({ quality: 100, smartSubsample: true })
      .resize(width, height, {
        withoutEnlargement: true,
        fastShrinkOnLoad: true,
      })
      .toBuffer();
  }
}
