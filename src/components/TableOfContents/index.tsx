import React from "react";
import "./index.scss"

const TOCItem = ({ heading, children }) => (
  <li>
    <a href={`#${heading.id}`}>{heading.text}</a>
    {children && children.length > 0 && (
      <ul>
        {children.map((child) => (
          <TOCItem key={child.id} heading={child} children={child.children} />
        ))}
      </ul>
    )}
  </li>
);

const TableOfContents = ({ headings }) => {
  const buildTree = (headings) => {
    const tree = [];
    const stack = [];

    headings.forEach((heading) => {
      const node = { ...heading, children: [] };

      while (
        stack.length > 0 &&
        stack[stack.length - 1].level >= heading.level
      ) {
        stack.pop();
      }

      if (stack.length === 0) {
        tree.push(node);
      } else {
        stack[stack.length - 1].children.push(node);
      }

      stack.push(node);
    });

    return tree;
  };

  const tree = buildTree(headings);

  return (
    <nav className="table-of-contents">
      <ul>
        {tree.map((heading) => (
          <TOCItem
            key={heading.id}
            heading={heading}
            children={heading.children}
          />
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
