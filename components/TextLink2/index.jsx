import React from "react";
import "./TextLink2.css";

function TextLink2(props) {
  const { className } = props;

  return (
    <div className={`text-link-8 ${className || ""}`}>
      <div className="roadmap-1 montserrat-semi-bold-lavender-16px">Roadmap</div>
    </div>
  );
}

export default TextLink2;
