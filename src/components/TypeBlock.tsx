"use client";
import React, { useEffect, useState } from "react";

const CURSOR = "_";

export default function TypeBlock({ text }: { text: string }) {
  const [showingText, setShowingText] = useState(CURSOR);
  useEffect(() => {
    let cnt = 0;
    const textInterval = setInterval(() => {
      if (cnt >= text.length) {
        setTimeout(() => {
          setShowingText((showingText) => {
            return showingText.slice(0, showingText.length - 1);
          });
        }, 50);
        clearInterval(textInterval);
        return;
      }
      setShowingText(
        (showingText) => text.slice(0, showingText.length) + CURSOR
      );
      cnt++;
    }, 100);
    return () => {
      if (textInterval) clearInterval(textInterval);
    };
  }, [text]);
  return (
    <div className="border rounded-lg mb-2 inline-block px-2 py-1 font-medium">
      {showingText}
    </div>
  );
}
