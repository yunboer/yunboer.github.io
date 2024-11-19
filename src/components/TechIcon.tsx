import React from "react";

export default function TechIcon({ tech }: { tech: string }) {
  return <img src={"https://skillicons.dev/icons?i=" + tech} alt={tech} className="inline-block mr-1 mb-1" />;
}
