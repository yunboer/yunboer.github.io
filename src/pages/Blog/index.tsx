import React, { createContext, useCallback, useEffect, useState } from "react";
import "./index.scss";
import TableOfContents from "../../components/TableOfContents";
import axios from "axios";
import MDoc from "../../components/MDoc";
import FileList from "../../components/FlieList";

const SetMdContext = createContext(()=>{});

export default function Blog() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true); // 左边栏展开状态
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true); // 右边栏展开状态
  const [mdContent, setMdContent] = useState(""); // markdown 内容
  const [headings, setHeadings] = useState([]); // markdown 标题

  const toggleLeftSidebar = useCallback(() => {
    setLeftSidebarOpen((_) => !_);
  }, [setLeftSidebarOpen]);
  const toggleRightSidebar = useCallback(
    () => setRightSidebarOpen((_) => !_),
    [setRightSidebarOpen]
  );

  const handleMdContent = (str) => {
    const fetchMarkdown = async () => {
      const response = await axios.get("http://localhost:3000/" + str);
      setMdContent(response.data);
      console.log("http://localhost:3000/" + str)
      console.log(response.data)
    };
    fetchMarkdown();
  };

  useEffect(() => {
    handleMdContent("markdown")
  }, []);

  return (
    <div className="blog">
      <div
        className={`left-sidebar sidebar ${
          leftSidebarOpen ? "open" : "closed"
        }`}
      >
        <button onClick={toggleLeftSidebar} className="button-right-radius">
          {leftSidebarOpen ? "<" : ">"}
        </button>
        <div className="siderbar-content">
          <SetMdContext.Provider value={handleMdContent}>
            <FileList />
          </SetMdContext.Provider>
        </div>
      </div>
      <div className="content">
        <MDoc>{mdContent}</MDoc>
      </div>
      <div
        className={`right-sidebar sidebar ${
          rightSidebarOpen ? "open" : "closed"
        }`}
      >
        <button onClick={toggleRightSidebar} className="button-left-radius">
          {rightSidebarOpen ? ">" : "<"}
        </button>
        <div className="siderbar-content">
          <TableOfContents headings={headings}></TableOfContents>
        </div>
      </div>
    </div>
  );
}

export {SetMdContext}