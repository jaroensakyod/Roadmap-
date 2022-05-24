import React from "react";
import "./Subtitle.css";

function Subtitle(props) {
  const { className } = props;

  return (
    <div className={`subtitle ${className || ""}`}>
      <div className="copywright-2022-rnx-1 roboto-bold-concrete-14px">Copywright 2022. Rnx</div>
    </div>
  );
}

export default Subtitle;
