import type { CoverDto } from "@site/domain";
import { ImageVariantEnum } from "@site/domain";

// TODO all that logic must be on repository
export class ImageSourceGetter {
  static componentVariants(image: CoverDto) {
    const imageWidth190pxSource = ImageSourceGetter.width190pxSource(image);
    const imageWidth190px2xSource = ImageSourceGetter.width190px2xSource(image);
    const imageOriginalSource = ImageSourceGetter.originalSource(image);

    const image2xSrcset = ImageSourceGetter.srcset2x(
      imageWidth190pxSource,
      imageWidth190px2xSource,
    );

    return {
      imageWidth190px2xSource,
      image2xSrcset,
      imageOriginalSource,
    };
  }

  static width190pxSource(image: CoverDto) {
    const imageWidth190pxSource = image[ImageVariantEnum.Width_190px];
    return imageWidth190pxSource;
  }

  static width190px2xSource(image: CoverDto) {
    const imageWidth190px2xSource = image[ImageVariantEnum.Width_190px_2x];
    return imageWidth190px2xSource;
  }

  static originalSource(image: CoverDto) {
    const imageOriginalSource = image[ImageVariantEnum.Original];
    return imageOriginalSource;
  }

  static srcset2x(
    imageWidth190pxSource: string,
    imageWidth190px2xSource: string,
  ) {
    const image2xSrcset = `${imageWidth190pxSource}, ${imageWidth190px2xSource} 2x`;
    return image2xSrcset;
  }
}
