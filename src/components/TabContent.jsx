import React from 'react'
import { useTabs } from '../hooks/useTabs.js';
import EmptyState from './EmptyState';
import clsx from 'clsx';

const TabContent = () => {
    const { tabs, activeTabId } = useTabs()
    const activeTab = tabs.find((tab) => tab.id === activeTabId);

    if (!activeTab) {
        return <EmptyState />;
    }

    return (
        <div className="p-4 w-full max-w-xs">
            <h2 className="font-bold text-lg mb-4">{activeTab.title}</h2>
            <div className="flex flex-col">
                {activeTab.sections.map((section, index) => (
                    <div
                        key={section.id}
                        className={clsx(
                            'px-3 py-2 text-sm cursor-pointer border-l-4',
                            {
                                'border-blue-500 bg-blue-50 text-blue-700 font-semibold': index === 0, // Highlight section đầu tiên
                                'border-transparent hover:bg-gray-100': index !== 0,
                            }
                        )}
                    >
                        {section.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabContent