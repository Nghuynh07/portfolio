import React from "react";

const Title = ({ title, name }) => {
  return (
    <div className={`title ${name}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
