"use client"

import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import {toast} from "react-toastify"
import {newsData} from "./util"


const NewsPage = () => {
 const [news, setNews] = useState(newsData);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(1);
 const articlesPerPage = 6; // Adjust the number of articles per page as needed

//  useEffect(() => {
//    const fetchNews = async () => {
//      try {
//        const response = await fetch(
//          `https://newsapi.org/v2/everything?q=education&sortBy=publishedAt&apiKey=2a8c15b34b784497ab23efca9b4ddcd6`
//        );
//        if (!response.ok) {
//          toast.error("Failed to fetch news data");
//        }
//        const data = await response.json();
//        setNews(data.articles);
//        setLoading(false);
//      } catch (error) {
//        setError(error.message);
//        setLoading(false);
//      }
//    };

//    window.navigator.onLine && fetchNews();
//  }, []);

 // Pagination Logic
 const indexOfLastArticle = currentPage * articlesPerPage;
 const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
 const currentArticles = news?.length > 0 ? news?.slice(indexOfFirstArticle, indexOfLastArticle) : [];

 const paginate = (pageNumber) => setCurrentPage(pageNumber);

//  if (loading) {
//    return <div>Loading...</div>;
//  }

//  if (error) {
//    return <div>Error: {error}</div>;
//  }


  return (
    <PageWrapper>
    <div className="text-gray-500 p-8">
      <h2 className="text-2xl font-bold mb-4">Latest News and Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles?.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            description={article.description}
            author={article.author}
            link={article.url}
            imageUrl={article.urlToImage} // Add imageUrl prop
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(news.length / articlesPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mx-1 rounded-md ${currentPage === i + 1 ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-purple-500 hover:text-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
};

export default NewsPage;
