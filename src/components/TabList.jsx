import React from 'react'
import { useTabs } from '../hooks/useTabs.js';
import Tab from './Tab';
import { Plus } from 'lucide-react';

const TabList = () => {
    const { tabs, addTab } = useTabs()

    return (
        <div className="flex items-center border-b border-gray-200 w-full">
            <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {tabs.map((tab) => (
                    <Tab key={tab.id} tab={tab} />
                ))}
            </div>
            <button
                onClick={addTab}
                className="p-2 ml-2 rounded-full hover:bg-gray-200 transition-colors flex-shrink-0 cursor-pointer"
            >
                <Plus size={20} />
            </button>
        </div>
    )
}

export default TabList