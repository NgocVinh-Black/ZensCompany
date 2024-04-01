import React from "react";
import Header from "./Header";
import Title_Doctor from "../components/Title_Doctor";
import Jokes_Content from "../components/Jokes_Content";
import Footer from "./Footer";

const HomePageTemplate = () => {
  return (
    <div>
      <Header />
      <Title_Doctor />
      <Jokes_Content />
      <Footer />
    </div>
  );
};

export default HomePageTemplate;
