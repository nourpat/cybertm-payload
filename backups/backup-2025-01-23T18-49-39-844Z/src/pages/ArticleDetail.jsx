import React from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articles } from '../data/articles';
import { CATEGORY_LABELS } from '../types/blog';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.id === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Article non trouvé</h2>
            <p className="mt-4 text-xl text-gray-600">
              L'article que vous recherchez n'existe pas.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-block text-blue-600 hover:text-blue-700"
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/blog"
            className="inline-block mb-8 text-blue-600 hover:text-blue-700"
          >
            ← Retour au blog
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-64 bg-gray-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/blog/default.jpg';
                }}
              />
            </div>
            <div className="p-8">
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {CATEGORY_LABELS[article.category]}
                  </span>
                  <span className="text-sm text-gray-600">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/authors/default.jpg';
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600">
                    Par {article.author.name}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  {article.description}
                </p>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {article.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}