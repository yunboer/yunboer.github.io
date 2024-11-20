import Image from "next/image";
import React from "react";
import Card from "./Card";
import TechIcon from "./TechIcon";
import TypeBlock from "./TypeBlock";
import { Metadata } from "next";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";

export const metadata: Metadata = {
  title: "yunboer | 爱生活胜过爱生活的意义。",
  description: "hahaha",
};

export default function Main() {
  return (
    <div>
      <div className="w-full md:w-[600px] min-h-screen h-auto bg-white dark:bg-slate-800 box-border p-5">
        <div className="flex flex-col items-center">
          <TypeBlock text={"Love life more than the meaning of it."} />
          <Card>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <Image
                src="/images/profile.jpg"
                alt="profile"
                className="rounded-lg mx-4 mb-4"
                width={150}
                height={150}
              />
              <div>
                <h1 className="text-2xl font-bold">yunboer | Yuxiang Sun</h1>
                <p>BS:ECUST MS:SJTU</p>
                <div>
                  <Tag>1998</Tag>
                  <Tag>INFJ</Tag>
                  <Tag>Shanghai</Tag>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <h1 className="font-bold text-2xl pb-2">Tech Stack</h1>
          <div>
            <TechIcon tech="html" />
            <TechIcon tech="css" />
            <TechIcon tech="javascript" />
            <TechIcon tech="typescript" />
            <TechIcon tech="nextjs" />
            <TechIcon tech="python" />
            <TechIcon tech="pytorch" />
            <TechIcon tech="tailwindcss" />
            <TechIcon tech="sass" />
            <TechIcon tech="c" />
            <TechIcon tech="react" />
            <TechIcon tech="vite" />
            <TechIcon tech="webpack" />
            <TechIcon tech="md" />
            <TechIcon tech="latex" />
          </div>
        </Card>
        <Card>
          <h1 className="font-bold text-2xl pb-2">Projects</h1>
          <div className="grid grid-cols-1 gap-4">
            <ProjectCard
              title="test"
              color="blue"
              description="test"
              techs={["a", "b"]}
              link={"www.baidu.com"}
            />
            <ProjectCard
              title="test"
              color="red"
              description="test"
              techs={["a", "b"]}
              link={"www.baidu.com"}
            />
            <ProjectCard
              title="test"
              color="green"
              description="test"
              techs={["a", "b"]}
              link={"www.baidu.com"}
            />
            <ProjectCard
              title="test"
              color="purple"
              description="test"
              techs={["a", "b"]}
              link={"www.baidu.com"}
            />
          </div>
        </Card>
        <Card>
          <h1 className="font-bold text-2xl pb-2">Blogs</h1>
          <ProjectCard
            title="test"
            color="blue"
            description="test"
            techs={["a", "b"]}
            link={"https://www.baidu.com"}
          />
        </Card>
      </div>
    </div>
  );
}
