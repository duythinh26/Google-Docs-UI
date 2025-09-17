/* eslint-disable react-refresh/only-export-components */
import { nanoid } from 'nanoid'
import React, { createContext, useState } from 'react'
import { initialTabs } from '../assets/assets'

export const TabsContext = createContext()

export const TabsProvider = ({ children }) => {

    const [tabs, setTabs] = useState(initialTabs)
    const [activeTabId, setActiveTabId] = useState(1)

    const addTab = () => {
        const newTabId = nanoid()
        const newTab = {
            id: newTabId,
            title: `Tài liệu mới ${tabs.length + 1}`,
            sections: [
                {
                    id: nanoid(5),
                    title: 'Mục mới'
                }
            ]
        }
        setTabs([...tabs, newTab])
        setActiveTabId(newTab.id)
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
                // Prioritize the right tab (same old index), if not, take the left tab
                nextActiveId = newTabs[tabIndex]?.id || newTabs[tabIndex - 1]?.id;
            }
            setActiveTabId(nextActiveId);
        }

        setTabs(newTabs);

        setTabs(newTabs)
    }

    const value = {
        tabs,
        activeTabId,
        setActiveTabId,
        addTab,
        removeTab,
    }

    return (
        <TabsContext.Provider value={value}>
            {children}
        </TabsContext.Provider>
    )
}