import { createContext, useContex, useState } from "react";
import { saveContex } from "./App";
import { Link } from "react-router-dom";
import React from "react";
import { useSaveContext } from "./Context/appContext";
import "./SaveFavorite.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function SaveFavorit() {
  const { save } = useSaveContext();

  return (
    <div className="saveFavorite">
      <div className="goBackIcon">
        <Link style={{ color: "white" }} to="/">
          <BsFillArrowLeftCircleFill size={25} />
        </Link>
      </div>
      {save.length > 0 ? (
        save.map((result) => (
          <div className="saveforLater">
            <h3>{result.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            <a href="#">Read more</a>
          </div>
        ))
      ) : (
        <p className="notSave">There are no save articles </p>
      )}
    </div>
  );
}

export default SaveFavorit;
