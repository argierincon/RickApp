import React from "react";
import PropTypes from "prop-types";

const SectionGifsCategory = ({ category }) => {
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
