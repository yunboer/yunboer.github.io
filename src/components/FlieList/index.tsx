import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./index.scss"; // 我们将在这里添加样式
import { SetMdContext } from "../../pages/Blog";
import axios from "axios";

// 0 模拟后台数据
// let rootTree = {
//   test: {
//     tst: "a",
//   },
//   src: {
//     components: {
//       "Header.js": "a",
//       "Footer.js": "b",
//     },
//     pages: {
//       "Home.js": "c",
//       "About.js": "a",
//     },
//     "App.js": "b",
//   },
//   public: {
//     "index.html": "c",
//   },
//   "package.json": "a",
// };

const FileItem = memo(({ url, content, layer }) => {
  const setMd = useContext(SetMdContext);
  const handleClick = () => {
    setMd(url);
  };
  return (
    <div
      onClick={handleClick}
      className="list-item"
      style={{ "--layer": layer }}
    >
      <span>{(content[content.indexOf(".") + 1] || "N").toUpperCase()}</span>
      &nbsp;
      <span title={content}>{content}</span>
    </div>
  );
});

const FolderItem = memo(({ onClick, content, isOpen, layer }) => {
  return (
    <div onClick={onClick} className="list-item" style={{ "--layer": layer }}>
      <span className={`arrow ${isOpen ? "down" : "right"}`}>{">"}</span>
      &nbsp;
      <span title={content}>{content}</span>
    </div>
  );
});

const FileList = memo(({ fileTree, layer = 1 }) => {
  // 1 开关状态
  const [openState, setOpenState] = useState({}); // 通过调用toggle(key)实现展开key的子元素
  const toggle = useCallback(
    (key) => {
      setOpenState((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    [setOpenState]
  );
  // 2 渲染列表
  const list = useMemo(
    () => (fileTree instanceof Object ? Object.keys(fileTree) : []),
    [fileTree]
  );
  return (
    <div className="file-list">
      {list.map((key) => (
        <>
          <div>
            {typeof fileTree[key] === "object" ? (
              <FolderItem
                onClick={() => toggle(key)}
                isOpen={openState[key]}
                content={key}
                layer={layer}
              />
            ) : (
              <FileItem content={key} url={fileTree[key]} layer={layer} />
            )}
          </div>
          {openState[key] && (
            <FileList fileTree={fileTree[key]} layer={layer + 1} />
          )}
        </>
      ))}
    </div>
  );
});

const FetchFileList = () => {
  const [rootTree, setRootTree] = useState({});

  useEffect(() => {
    const fetchDirectoryTree = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/directory-tree"
      );
      setRootTree(response.data);
      console.log(response.data)
    };

    fetchDirectoryTree();
  }, []);

  return <FileList fileTree={rootTree} />;
};

export default FetchFileList;
