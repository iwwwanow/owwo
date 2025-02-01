interface Props {
  limit: number;
  style: string;
}

export const getComponentStyle = ({ limit, style }: Props): string => {
  const styles = [style];
  if (limit) {
    styles.push(`max-height: ${limit}px; overflow: hidden`);
  }
  return styles.join(";");
};
