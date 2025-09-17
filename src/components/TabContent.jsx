import React from 'react'
import { useTabs } from '../hooks/useTabs.js';
import EmptyState from './EmptyState';
import SectionItem from './SectionItem.jsx';

const TabContent = () => {
    const { tabs, activeTabId } = useTabs()
    const activeTab = tabs.find((tab) => tab.id === activeTabId)

    if (!activeTab) {
        return null;
    }

    return (
        <div className="p-4 w-full max-w-xs">
            <h2 className="font-bold text-lg mb-4 truncate">{activeTab.title}</h2>
            <div className="flex flex-col">
                {activeTab.sections.map((section) => (
                    <SectionItem key={section.id} section={section} />
                ))}
            </div>
        </div>
    )
}

export default TabContent