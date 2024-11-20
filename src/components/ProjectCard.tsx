import React from "react";
import Tag from "./Tag";

export default function ProjectCard({
  color,
  title,
  description,
  techs,
  link,
}: {
  color: "blue" | "red" | "green" | "purple";
  title: string;
  description: string;
  techs: string[];
  link: string;
}) {
  const colorsMap = {
    blue: { from: "from-sky-500", to: "to-blue-500" },
    red: { from: "from-red-500", to: "to-orange-500" },
    green: { from: "from-green-500", to: "to-yellow-500" },
    purple: { from: "from-pink-500", to: "to-purple-500" },
  };
  const { from, to } = colorsMap[color] || {
    from: "from-gray-500",
    to: "to-gray-200",
  };
  return (
    <div className="flex flex-row group border-custom rounded-lg overflow-hidden">
      <div
        className={`shrink-0 w-2 group-hover:w-3 bg-gradient-to-b ${from} ${to} transition-all`}
      ></div>
      <a href={link} className="block flex-grow">
        <div className="flex flex-col px-6 pt-2 pb-4 items-start">
          <h1 className="font-bold text-2xl">{title}</h1>
          <div className="mt-1">{description}</div>
          <div className="mt-4 flex flex-row">
            {techs.map((tech, idx) => (
              <Tag key={idx}>{tech}</Tag>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
