// import Image from "next/image";
// import React from "react";
// import { Tag } from "../../components";
// import { blogs } from "../../data/resource";



// const Blog: React.FC = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col justify-center items-center px-24 pt-20 pb-12 w-full max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-col justify-center items-center max-w-full w-[1008px]">
//           <div className="flex flex-col justify-center items-center max-w-full w-[800px]">
//             <Tag>Latest Blogs</Tag>
//             <div className="flex flex-col mt-5 w-full text-center">
//               <h1 className="text-6xl font-bold leading-none text-black max-md:max-w-full max-md:text-4xl">
//                 Explore Latest Blog Posts
//               </h1>
//               <p className="mt-4 text-base leading-loose text-black/50 max-md:max-w-full">
//                 Specialising in crafting visually stunning and highly functional
//                 user interfaces.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center mt-14 w-full max-w-[1008px] text-neutral-600 max-md:mt-10 max-md:max-w-full">
//           <div className="flex flex-wrap gap-4 justify-center items-start w-full">
//             {blogs.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="flex flex-col grow shrink px-4 pt-4 pb-6 rounded-2xl border border-solid border-black border-opacity-20 min-w-[240px] w-[260px]"
//               >
//                 <Image
//                   loading="lazy"
//                   src={blog.imageSrc}
//                   alt={blog.title}
//                   className="object-contain w-full rounded-2xl aspect-[1.38]"
//                 />
//                 <div className="flex flex-col mt-6 w-full text-black">
//                   <div className="text-sm font-medium leading-none">
//                     {blog.readTime}
//                   </div>
//                   <h2 className="mt-2 text-2xl font-bold leading-8">
//                     {blog.title}
//                   </h2>
//                   <p className="mt-2 text-base leading-7">{blog.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

'use client'
import React, {  useState } from 'react';
import Image from 'next/image';
import { Tag } from '../../components';
import { blogs, blogDetails } from '../../data/resource';
import BlogDetail from '../../components/BlogDetails';

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
    return blogDetail ? <BlogDetail blog={blogDetail} onBack={() => setSelectedBlogId(null)} /> : null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-24 pt-20 pb-12">
        <Tag>Latest Blogs</Tag>
        <h1 className="text-6xl font-bold">Explore Latest Blog Posts</h1>
        <p className="mt-4">
          Specialising in crafting visually stunning and highly functional user interfaces.
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
              <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
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


