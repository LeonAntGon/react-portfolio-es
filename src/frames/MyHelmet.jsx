import { Helmet } from "react-helmet";


const MyHelmet = () => {
  return (
    <div>
      {/* Resto de tu componente */}
      <Helmet>
        <title>Portfolio - Leonardo</title>
        <meta property="og:title" content="Portfolio - Leonardo" />
        <meta property="og:description" content="Sitio web personal" />

        <meta property="og:url" content="https://leonardoweb.online/" />
      </Helmet>
    </div>
  );
};

export default MyHelmet;