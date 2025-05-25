import React from "react";

export function TagList() {
  const handleClick = (tagName) => {
    console.log(`Knapp ${tagName} Clicked`);
  };

  const tags = ["Click TAG BTN 1", "Click TAG BTN 2", "Click TAG BTN 3"];

  return (
    <div className="taglist-container">
      {tags.map((tag, index) => (
        <button
          key={index}
          className="sidebar-button"
          onClick={() => handleClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
