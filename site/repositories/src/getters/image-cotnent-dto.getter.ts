import { ContentDto } from "@site/domain";

export const getImageContentDto = (imageRelativePath: string): ContentDto => {
  // TODO to templates; вообще, по хорошему. логику с шаллонамы вынести нв слой выше. репозиторий возвращает только данные, шаблоны подготоваливаются выше
  return {
    html: `<img src="${imageRelativePath}""/>`,
    markdown: "image-content-markdown",
    // FEATURE zomm on mouse move
    preview: `<img src="${imageRelativePath}""/>`,
  };
};
