import React from "react";
import Image from "next/image";
import { ChevronLeft } from "@mui/icons-material";

interface Blog {
  imageSrc: string;
  title: string;
  readTime: string;
  content: string;
}

interface BlogDetailProps {
  blog: Blog;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  if (!blog) return null;

  const renderContent = (content: string) => {
    // Split content by <br/> and map through to render each part
    const sections = content.split("<br/>").map((section, index) => {
      const renderBoldText = (text: string) => {
        const parts = text.split("**");
        return parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        );
      };

      return (
        <div key={`section-${index}`} className="mb-6">
          <p className="text-gray-600 mb-2">
            {renderBoldText(section.trim())}
          </p>
        </div>
      );
    });

    return sections;
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 mb-6"
        >
          <ChevronLeft />
          <span>Back to Blogs</span>
        </button>

        <div className="relative mb-6 h-96">
          <Image
            src={blog.imageSrc}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
          <p className="text-lg text-gray-500">{blog.readTime}</p>
        </div>

        <article>{renderContent(blog.content)}</article>
      </div>
    </div>
  );
};

export default BlogDetail;
