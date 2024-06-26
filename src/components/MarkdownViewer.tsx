"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function MarkdownViewer({ content }: { content: string }) {
    return (
        <ReactMarkdown
            className="prose lg:prose-xl center "
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const { ref, children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                        <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            {...rest}
                            style={vscDarkPlus}>
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
                img: (image) => (
                    <Image
                        className="w-full max-h-60 object-cover"
                        src={image.src || ""}
                        alt={image.alt || ""}
                        width={500}
                        height={300}
                    />
                ),
            }}>
            {content}
        </ReactMarkdown>
    );
}
