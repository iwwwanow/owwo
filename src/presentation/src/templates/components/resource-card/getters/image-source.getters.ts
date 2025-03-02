import type { NodeImageType } from "@site/models";
import { ImageVariantName } from "@site/models";

export class ImageSourceGetter {
  static componentVariants(image: NodeImageType) {
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

  static width190pxSource(image: NodeImageType) {
    const imageWidth190pxSource = image[ImageVariantName.Width_190px];
    return imageWidth190pxSource;
  }

  static width190px2xSource(image: NodeImageType) {
    const imageWidth190px2xSource = image[ImageVariantName.Width_190px_2x];
    return imageWidth190px2xSource;
  }

  static originalSource(image: NodeImageType) {
    const imageOriginalSource = image[ImageVariantName.Original];
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
