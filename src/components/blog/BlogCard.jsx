import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CATEGORY_LABELS } from '../../types/blog';

export default function BlogCard({ article }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Link to={`/blog/${article.id}`}>
        <div className="w-full h-48 bg-gray-200">
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
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {CATEGORY_LABELS[article.category]}
          </span>
          <span className="text-sm text-gray-600">
            {new Date(article.date).toLocaleDateString()}
          </span>
        </div>
        <Link to={`/blog/${article.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">
          {article.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
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
              {article.author.name}
            </span>
          </div>
          <Link
            to={`/blog/${article.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Lire la suite →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}