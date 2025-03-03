import React from 'react';
import { BLOG_CATEGORIES, CATEGORY_LABELS } from '../../types/blog';

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          !selectedCategory
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Tous
      </button>
      {Object.entries(BLOG_CATEGORIES).map(([key, value]) => (
        <button
          key={key}
          onClick={() => onCategoryChange(value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {CATEGORY_LABELS[value]}
        </button>
      ))}
    </div>
  );
}