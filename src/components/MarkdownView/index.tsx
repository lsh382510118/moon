import React, { useEffect, useState } from 'react';
import './index.less';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface prodsType {
  filePath: string;
}

const MarkdownView = (prods: prodsType) => {
  const {filePath} = prods;
  console.log("🚀 ~ file: index.tsx:15 ~ MarkdownView ~ filePath:", filePath)
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if(filePath){
      fetch(filePath)
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }
  }, [filePath]);


  const CodeBlock = ({ node, inline, className, children }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} style={solarizedlight}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className}>{children}</code>
    );
  };

  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ children }) => (
          <table cellSpacing={0} border={1} style={{ width: '100%', tableLayout: 'fixed',border: '1px solid #e3e3e3' }}>{children}</table>
        ),
        code: CodeBlock,
      }}
    />
  );
};

export default MarkdownView;
