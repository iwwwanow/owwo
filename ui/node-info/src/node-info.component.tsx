// TODO needs refactoring
// - разнести на parts
import Date from "./date.component.svelte";
import Hr from "./hr.component.svelte";
import Image from "./image.component.svelte";
import type { NodeInfoType } from "./node-info.interface";
import NodeLink from "./node-link.component.svelte";
import NodeLinkContainer from "./node-link__container.component.svelte";
import NodeTitle from "./node-title.component.svelte";

const NodeInfo: NodeInfoType = (props) => {
  let { node, id, image, title, author, authors, parents, description, date } =
    props;

  if (node) {
    id = node.meta.id;
    image = node.image;
    if (title === undefined) title = node.title;
    if (description === undefined) description = node.description;
    author = node.meta.author;
    authors = node.meta.authors;
    parents = node.meta.parents;
    date = node.date;
  }

  const isTextDataExist = !!title || !!authors || !!description || !!date;
  const isDataExist = !!image || isTextDataExist;

  if (isDataExist) {
    <span class="node-info node-info__data-wrapper">
      {image && <Image image={image} id={id} variant="w190" />}
      {isTextDataExist && (
        <div class="node-info__data-container">
          {title && <NodeTitle title={title} />}

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

          {description?.html && (
            <>
              <Hr text="description" />
              {description.html}
            </>
          )}

          {date && (
            <>
              <Hr text="last-modification/creation date" />
              <Date date={date} />
            </>
          )}
        </div>
      )}
    </span>;
  }
};
