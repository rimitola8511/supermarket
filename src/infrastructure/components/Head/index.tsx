import { Helmet } from 'react-helmet-async';

type HeadProps = {
  name: string;
};

const Head = ({ name }: HeadProps) => {
  return (
    <Helmet>
      <title>{name}</title>
      <link rel="icon" href="logo.png" type="image/x-icon" />
      <meta name="description" content={name} />
      <meta
        name="keywords"
        content="Merqeuo, React, Mercado virtual, JavaScript"
      />
      <meta name="author" content="Ricardo Imitola" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffe600" />
    </Helmet>
  );
};

export default Head;
