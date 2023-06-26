import React from "react";
import { Link } from "react-router-dom";

export default function Icon({ alias, img, link }) {
  //  TODO 1: update store to fetch icons based on given alias
  return (
    <Link to={link} className="icon">
      <img src={img} className={`${alias}-icon`} alt={`${alias} icon`} />
    </Link>
  );
}
