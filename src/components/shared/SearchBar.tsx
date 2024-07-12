// import { FiSearch } from 'react-icons/fi'; // Using a dedicated icon library
//
// const SearchBar = () => {
//     return (
//         <div className="flex items-center p-2 gap-2 rounded-lg border border-gray-300 w-[438px]  focus-within:border-enumBlue">
//             <FiSearch className="h-6 w-6 text-gray-400" />
//             <input
//                 type="text"
//                 className="w-full bg-transparent focus:outline-none text-gray-700  border-none"
//                 placeholder="Search..."
//             />
//         </div>
//     );
// };
//
// export default SearchBar;

// src/components/shared/SearchBar.tsx
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm); // Call the onSearch function from the parent to filter
    };

    return (
        <div className="flex items-center p-2 gap-2 rounded-lg border border-gray-300 w-[438px] focus-within:border-enumBlue">
            <FiSearch className="h-6 w-6 text-gray-400" />
            <input
                type="text"
                className="w-full bg-transparent focus:outline-none text-gray-700 border-none"
                placeholder="Search..."
                value={searchTerm} // Bind the input value to the searchTerm state
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
