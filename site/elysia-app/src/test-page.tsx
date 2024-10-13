import "./Test.css";
import styles from "./styles.module.css";

const TestPage = () => {
  return (
    <html lang="en">
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1 className={styles.heading}>Hello World</h1>
      </body>
    </html>
  );
};

export { TestPage };
