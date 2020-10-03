import React from "react";
import PropTypes from "prop-types";

const SectionGifsCategory = ({ category }) => {

  // const fetchGifs = async (category) => {
  //   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
  //     category
  //   )}&limit=10&api_key=CgPiOlDWJgWEGDo70vyz4ACQAac30Raj`;
  //   const resp = await fetch(url);
  //   const { data } = await resp.json();

  //   const gifs = data.map((gif) => {
  //     return {
  //       id: gif.id,
  //       title: gif.title,
  //       url: gif.images?.downsized_medium.url,
  //     };
  //   });
  //   setImages(gifs);
  // };

  return (
    <section>
      <h3>{category}</h3>
      <div></div>
    </section>
  );
};

SectionGifsCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default SectionGifsCategory;
