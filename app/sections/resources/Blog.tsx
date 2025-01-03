"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tag } from "../../components";
import { blogs, blogDetails } from "../../data/resource";
import BlogDetail from "../../components/BlogDetails";

interface Blog {
  id: number;
  imageSrc: string;
  readTime: string;
  title: string;
  description: string;
  content?: string;
}

const Blog = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const handleBlogClick = (blogId: number) => {
    setSelectedBlogId(blogId);
  };

  if (selectedBlogId) {
    const blogDetail = blogDetails.find((blog) => blog.id === selectedBlogId);
    return blogDetail ? (
      <BlogDetail blog={blogDetail} onBack={() => setSelectedBlogId(null)} />
    ) : null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-24 pt-20 pb-12">
        <Tag>Latest Blogs</Tag>
        <h1 className="text-6xl mt-4 font-bold">Explore Latest Blog Posts</h1>
        <p className="mt-4">
          Specialising in crafting visually stunning and highly functional user
          interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24 pb-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="cursor-pointer group bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            onClick={() => handleBlogClick(blog.id)}
          >
            <div className="relative aspect-video">
              <Image
                src={blog.imageSrc}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="text-gray-600">{blog.readTime}</div>
              <h2 className="text-2xl font-bold group-hover:text-[#387D8C] transition-colors">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
