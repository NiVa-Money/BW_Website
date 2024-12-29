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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
      >
        <ChevronLeft fontSize="large" />
        Back to blogs
      </button>

      <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
        <div className="w-full lg:w-1/2 relative aspect-video">
          <Image
            src={blog.imageSrc}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-semibold">{blog.title}</h1>
          <p className="text-sm text-gray-500 mt-2">{blog.readTime}</p>
        </div>
      </div>

      <div
        className="prose max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
