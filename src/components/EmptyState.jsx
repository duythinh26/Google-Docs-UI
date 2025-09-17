import React from 'react'
import { FilePlus2 } from 'lucide-react';
import { useTabs } from '../hooks/useTabs';

const EmptyState = () => {

    const { addTab } = useTabs()

    return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 mt-20">
            <FilePlus2 size={64} strokeWidth={1} />
            <p className="mt-4 text-lg">Không có tài liệu nào đang mở</p>
            <button
                onClick={addTab} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
            >
                Tạo tài liệu mới
            </button>
        </div>
    )
}

export default EmptyState