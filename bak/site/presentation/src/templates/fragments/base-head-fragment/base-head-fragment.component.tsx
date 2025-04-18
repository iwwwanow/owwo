export const BaseHeadFragment = () => {
	process.env.NODE_ENV = 'production'

  return (
    <>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="theme-color" content="#e0e0e0" />
      <title>owwo</title>

      <link rel="stylesheet" href="/public/styles/index.css" />
	  {/* TODO fix it */}
	  {process.env.NODE_ENV === 'production' && <link rel="stylesheet" href="/public/styles/bundle.css" />}
    </>
  );
};
