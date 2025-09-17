import { nanoid } from 'nanoid'
import React, { useMemo, useState } from 'react'
import { initialTabs } from '../assets/assets'
import { TabsContext } from './TabsContext'

export const TabsProvider = ({ children }) => {

    const [tabs, setTabs] = useState(initialTabs)
    const [activeTabId, setActiveTabId] = useState("1")
    const [activeSectionId, setActiveSectionId] = useState(initialTabs[0]?.sections[0]?.id)

    const addTab = () => {
        const newTabId = nanoid()
        const firstSectionId = nanoid(5)
        const newTab = {
            id: newTabId,
            title: `Tài liệu mới ${tabs.length + 1}`,
            sections: [
                {
                    id: firstSectionId,
                    title: 'Mục mới',
                    content: 'Nội dung mặc định.'
                }
            ]
        }
        setTabs([...tabs, newTab])
        setActiveTabId(newTab.id)
        setActiveSectionId(firstSectionId)
    }

    const switchTab = (tabId) => {
        const newActiveTab = tabs.find((tab) => tab.id === tabId)
        setActiveTabId(tabId)
        // When switching tabs, always active the first section of the new tab
        setActiveSectionId(newActiveTab?.sections[0]?.id)
    }

    const removeTab = (tabIdRemove) => {
        // Find the index of the tab about to close
        const tabIndex = tabs.findIndex((tab) => tab.id === tabIdRemove)
        if (tabIndex === -1) return; // Tab not found, exit early

        // Create a new tabs array that does not contain closed tabs
        const newTabs = tabs.filter((tab) => tab.id !== tabIdRemove)

        // Handle logic to switch active tab
        if (activeTabId === tabIdRemove) {
            let nextActiveId = null;
            if (newTabs.length > 0) {
                const nextActiveTab = newTabs[tabIndex] || newTabs[tabIndex - 1];
                nextActiveId = nextActiveTab.id;

                // Update the active section when the tab is deleted
                setActiveSectionId(nextActiveTab.sections[0]?.id)
            } else {
                setActiveSectionId(null)
            }
            setActiveTabId(nextActiveId)
        }
        setTabs(newTabs)
    }

    const addSection = (tabId, parentSectionId) => {
        const findAndAdd = (sections, parentId) => {
            for (const section of sections) {
                if (section.id === parentId) {
                    const newSection = {
                        id: nanoid(5),
                        title: `Mục con mới`,
                        content: 'Nội dung cho mục con mới.'
                    };
                    // Make sure the children property exists
                    if (!section.children) {
                        section.children = []
                    }
                    section.children.push(newSection);
                    return true;
                }
                if (section.children && findAndAdd(section.children, parentId)) {
                    return true;
                }
            }
            return false;
        }

        setTabs(prevTabs => {
            const newTabs = JSON.parse(JSON.stringify(prevTabs)) // Deep copy to avoid direct state mutation
            const tabToUpdate = newTabs.find(tab => tab.id === tabId)
            if (tabToUpdate) {
                findAndAdd(tabToUpdate.sections, parentSectionId)
            }
            return newTabs
        })
    }

    const value = useMemo(() => ({
        tabs,
        activeTabId,
        activeSectionId,
        setActiveTabId: switchTab,
        setActiveSectionId,
        addTab,
        removeTab,
        addSection,
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [tabs, activeTabId, activeSectionId])

    return (
        <TabsContext.Provider value={value}>
            {children}
        </TabsContext.Provider>
    )
}