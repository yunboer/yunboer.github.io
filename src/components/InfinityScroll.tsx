import React from "react";
import "./InfinityScroll.scss";

export default function InfinityScroll() {
  const count = 3;
  return (
    <div className="warpper">
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className={`item item-${idx + 1}`}
          ></div>
        ))}
    </div>
  );
}
