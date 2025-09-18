import React from 'react'
import EmptyState from './EmptyState'
import { useTabs } from '../hooks/useTabs'

const MainTabContent = () => {
    const { tabs, activeTabId, activeSectionId } = useTabs()

    const activeTab = tabs.find(tab => tab.id === activeTabId)
    if (!activeTab) {
        return <EmptyState />
    }

    // Recursive function to find item by ID in item tree
    const findSectionById = (sections, id) => {
        for (const section of sections) {
            // If found at current level, return immediately
            if (section.id === id) return section

            // If not, and if there are children, continue searching in the children
            if (section.children) {
                const foundInSection = findSectionById(section.children, id)
                if (foundInSection) return foundInSection
            }
        }
        // If not found in the entire tree, return null
        return null
    }

    const activeSection = findSectionById(activeTab.sections, activeSectionId)
    if (!activeSection) {
        return (
            <div className="flex-1 p-8 bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-400">Vui lòng chọn một mục</h1>
            </div>
        )
    }

    return (
        <div className="p-4 md:p-8 bg-gray-50 h-full">
            {
                activeSection ? (
                    <>
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 border-b pb-2">{activeSection.title}</h1>
                        <div className="prose max-w-none">
                            {/* Use whitespace-pre-line to keep line breaks in the content */}
                            <p style={{ whiteSpace: 'pre-line' }}>{activeSection.content}</p>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-400">Vui lòng chọn một mục</h1>
                    </div>
                )
            }

        </div>
    )
}

export default MainTabContent