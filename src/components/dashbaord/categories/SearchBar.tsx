import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div className="relative">
            <input
            type="text"
            placeholder="Search challenges..."
            className="w-full px-4 py-1.5 border-1 border-neutral-400 bg-neutral-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all duration-200"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-100 hover:text-white transition-colors duration-200 placeholder:text-neutral-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2.5-5.5A7.5 7.5 0 1110 3a7.5 7.5 0 017.5 7.5z"
                />
            </svg>
            </button>
        </div>
    </div>
  )
}

export default SearchBar