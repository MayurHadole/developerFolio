import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} el="noopener" or rel="noreferrer">
        {text}
      </a>
    </div>
  );
}
