import type { CoverDto } from "@site/domain";
import { ImageVariantEnum } from "@site/domain";

export const getDirectoryCover = async ({
  getCoverFullPath,
  getCoverRelativePath,
  uploadsPath,
  fullPath,
}): Promise<CoverDto> => {
  const coverFullPath = await getCoverFullPath({ fullPath });

  if (!coverFullPath) return null;

  const coverRelativePath = getCoverRelativePath({
    coverFullPath,
    uploadsPath,
  });

  // TODO cache logic
  return {
    [ImageVariantEnum.Blob]: coverRelativePath,
    [ImageVariantEnum.Original]: coverRelativePath,
    [ImageVariantEnum.Height_16px]: coverRelativePath,
    [ImageVariantEnum.Height_16px_2x]: coverRelativePath,
    [ImageVariantEnum.Height_32px]: coverRelativePath,
    [ImageVariantEnum.Height_32px_2x]: coverRelativePath,
    [ImageVariantEnum.Width_1080px]: coverRelativePath,
    [ImageVariantEnum.Width_190px]: coverRelativePath,
    [ImageVariantEnum.Width_190px_2x]: coverRelativePath,
  };
};
