import React from "react";

const Item = props => {
  const { image_url, name, cash_back } = props.details;
  return (
    <tr>
      <td>
        <img src={image_url} className="img-thumbnail" alt="" />
      </td>
      <td>{name}</td>
      <td>${cash_back}</td>
    </tr>
  );
};

export default Item;
