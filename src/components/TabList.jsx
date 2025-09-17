import React from 'react'
import { useTabs } from '../hooks/useTabs.js';
import Tab from './Tab';
import { Plus } from 'lucide-react';

const TabList = () => {
    const { tabs, addTab } = useTabs()

    return (
        <div className="flex items-center border-b border-gray-200">
            <div className="flex items-center">
                {tabs.map((tab) => (
                    <Tab key={tab.id} tab={tab} />
                ))}
            </div>
            <button
                onClick={addTab}
                className="p-2 ml-2 rounded-full hover:bg-gray-200 transition-colors"
            >
                <Plus size={20} />
            </button>
        </div>
    )
}

export default TabList