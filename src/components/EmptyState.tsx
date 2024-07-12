// src/app/components/EmptyState.tsx
import React from 'react';

interface EmptyStateProps {
    onAddData: () => void; // Function to trigger opening the form
}

const EmptyState: React.FC<EmptyStateProps> = ({ onAddData }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">No data yet</h2>
            <button
                onClick={onAddData}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Data
            </button>
        </div>
    );
};

export default EmptyState;
