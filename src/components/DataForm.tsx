// src/app/components/DataForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { DataItem } from '@/app/page'; // Import DataItem from page.tsx

interface DataFormProps {
    initialData?: DataItem;
    onSubmit: (data: DataItem) => void;
    onClose: () => void;
}

// Zod Schema for DataItem validation
const dataSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters' }).max(50),
    email: z.string().email({ message: 'Invalid email address' }),
});

type FormData = z.infer<typeof dataSchema>;

const DataForm: React.FC<DataFormProps> = ({ initialData, onSubmit, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(dataSchema),
        defaultValues: initialData || {},
    });

    const onSubmitForm = (data: FormData) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white p-4 rounded shadow-md">
            {/* Name Field */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                    {initialData ? 'Update' : 'Submit'}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default DataForm;
