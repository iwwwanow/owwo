// TODO needs refactoring
// - разнести на parts
import { CssModule } from "@ui/css-module";
import { DateComponent } from "@ui/date";
import { Hr } from "@ui/hr";
import { Image } from "@ui/image";
import { NodeLink } from "@ui/node-link";
import { NodeLinkContainer } from "@ui/node-link-container";
import { NodeTitle } from "@ui/node-title";

import type { NodeInfoType } from "./node-info.interface";
import Style from "./node-info.module.css";

const NodeInfo: NodeInfoType = (props) => {
  const { node } = props;
  const { isTitleNeeded = true, isDescriptionNeeded = true } = props;

  // let { node, id, image, title, author, authors, parents, description, date } =
  //   props;

  // if (node) {
  //   id = node.meta.id;
  //   image = node.image;
  //   if (title === undefined) title = node.title;
  //   if (description === undefined) description = node.description;
  //   author = node.meta.author;
  //   authors = node.meta.authors;
  //   parents = node.meta.parents;
  //   date = node.date;
  // }

  const id = node.meta.id;
  const image = node.image;
  const title = node.title;
  const description = node.description;
  const author = node.meta.author;
  const authors = node.meta.authors;
  const parents = node.meta.parents;
  const date = node.date;

  const isTextDataExist = !!title || !!authors || !!description || !!date;
  const isDataExist = !!image || isTextDataExist;

  // TODO на странице http://localhost:3000/testnodeusername
  // 	между заголовком и описанием есть ";" - убрать её

  if (isDataExist) {
    return (
      <>
        <span class="node-info node-info__data-wrapper">
          {image && <Image image={image} id={id} variant="w190" />}
          {isTextDataExist && (
            <div class="node-info__data-container">
              {isTitleNeeded && <NodeTitle title={title} />}

              {author && (
                <>
                  <Hr text="author:" />
                  <NodeLinkContainer>
                    <NodeLink node={author} />
                  </NodeLinkContainer>
                </>
              )}

              {authors && (
                <>
                  <Hr text="authors" />
                  <NodeLinkContainer>
                    {authors.map((author) => (
                      <NodeLink node={author} />
                    ))}
                  </NodeLinkContainer>
                </>
              )}

              {parents && (
                <>
                  <Hr text="pages" />
                  <NodeLinkContainer>
                    {parents.map((parent) => (
                      <NodeLink node={parent} />
                    ))}
                  </NodeLinkContainer>
                </>
              )}

              {isDescriptionNeeded && description?.html && (
                <>
                  <Hr text="description" />
                  {description.html}
                </>
              )}

              {date && (
                <>
                  <Hr text="last-modification/creation date" />
                  <DateComponent date={date} />
                </>
              )}
            </div>
          )}
        </span>
        <CssModule filepath={Style} />
      </>
    );
  }

  return null;
};

export { NodeInfo };
