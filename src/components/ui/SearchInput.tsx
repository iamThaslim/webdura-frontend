'use client'

import React from 'react'
import { Search } from 'lucide-react'

interface SearchInputProps {
    placeholder?: string
    onSearch?: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Search...',
    onSearch,
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearch(e.target.value)
        }
    }

    return (
        <div className="relative w-full max-w-xs">
            <input
                type="search"
                placeholder={placeholder}
                onChange={handleInputChange}
                className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                aria-label="Search"
            />
            <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                aria-hidden="true"
            />
        </div>
    )
}

export default SearchInput
