import { Helmet } from "react-helmet-async";

const Robots = () => {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <Helmet>
      <meta name="robots" content={isProd ? "index, follow" : "noindex, nofollow"} />
    </Helmet>
  );
};

export default Robots;
