import React from 'react';
import { BLOG_TAGS } from '../../types/blog';

export default function TagFilter({ selectedTags, onTagToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {BLOG_TAGS.map(tag => (
        <button
          key={tag}
          onClick={() => onTagToggle(tag)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            selectedTags.includes(tag)
              ? 'bg-blue-100 text-blue-800 border-2 border-blue-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}