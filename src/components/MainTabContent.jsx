import React from 'react'
import EmptyState from './EmptyState'
import { useTabs } from '../hooks/useTabs'

const MainTabContent = () => {
    const { tabs, activeTabId, activeSectionId } = useTabs()
    const activeTab = tabs.find(tab => tab.id === activeTabId)
    if (!activeTab) {
        return <EmptyState />
    }

    const activeSection = activeTab.sections.find(sec => sec.id === activeSectionId)
    if (!activeSection) {
        return (
            <div className="flex-1 p-8 bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-400">Vui lòng chọn một mục</h1>
            </div>
        )
    }

    return (
        <div className="flex-1 p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-4 border-b pb-2">{activeSection.title}</h1>
            <div className="prose">
                <p>{activeSection.content}</p>
            </div>
        </div>
    )
}

export default MainTabContent