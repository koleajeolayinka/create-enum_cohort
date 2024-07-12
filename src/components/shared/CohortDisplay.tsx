'use client';

import React, { useState } from 'react';
import SearchBar from '@/components/shared/SearchBar';
import { FiMoreVertical } from 'react-icons/fi';
import Card from '@/components/Card';
import CohortCreationModal from '@/components/shared/CohortCreationModal'; // Import your modal
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { addCohort, openForm } from '@/app/store/cohortsSlice';
import { ScrollArea } from '@/components/ui/scroll-area'; // Import actions

interface DataItem {
    id: number;
    name: string;
    description: string;
    image: string;
    programs: string;
    date: string;
}

interface DataDisplayProps {
    cohorts: DataItem[];
}

const CohortDisplay: React.FC<DataDisplayProps> = ({ cohorts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showCohortForm, setShowCohortForm] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleOpenForm = () => {
        dispatch(openForm());
        setShowCohortForm(true);
    };

    const filteredCohorts = cohorts.filter(
        (cohort) => cohort.name.toLowerCase().includes(searchTerm.toLowerCase())
        // ||
        // cohort.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // cohort.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (cohortData: DataItem) => {
        dispatch(addCohort(cohortData));
        setShowCohortForm(false);
    };
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div className="mt-8">
            <div className="flex justify-between mb-4">
                {/*<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />*/}
                <SearchBar onSearch={handleSearch} />

                <div className={'flex gap-[11px]'}>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
                        onClick={handleOpenForm}
                    >
                        Create a cohort
                    </button>
                    <button className="bg-gray-200 flex items-center text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-offset-2">
                        More Actions
                        <span>
                            <FiMoreVertical />
                        </span>
                    </button>
                    {/* ... (More Actions button) */}
                </div>
            </div>

            {showCohortForm && (
                <CohortCreationModal setShowCohortForm={setShowCohortForm} handleSubmit={handleSubmit} />
            )}
            <div className="h-[360px] overflow-y-auto rounded-lg">
                <div className="mx-auto grid gap-[24px]">
                    {filteredCohorts.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CohortDisplay;
