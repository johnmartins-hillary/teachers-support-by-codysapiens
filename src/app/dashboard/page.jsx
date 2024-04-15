import React, { useState } from "react";

// Sample data for blog posts
const initialPosts = [
  {
    id: 1,
    title: "Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Author A",
    date: "April 10, 2022",
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author B",
    date: "April 15, 2022",
  },
  {
    id: 3,
    title: "Post 3",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Author C",
    date: "April 20, 2022",
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-8 px-8 overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {/* Blog posts */}
      <div>
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg p-4 mb-4"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">
              By {post.author} - {post.date}
            </p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(posts.length / postsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`mx-1 px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
