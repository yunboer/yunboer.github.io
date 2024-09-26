import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import "./index.scss"

export default function MDoc({children}:{children: string}) {
  return (
    <div  className="markdown-body">
      <ReactMarkdown
        rehypePlugins={[rehypeSlug, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
