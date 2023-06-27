import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

export default function Icon({ alias, link, specialClass }) {
  const { icons } = useContext(Context);

  return (
    <Link to={link} className="icon">
      <img
        src={icons[alias]}
        className={specialClass && specialClass}
        alt={`${alias} icon`}
      />
    </Link>
  );
}
