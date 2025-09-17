import clsx from 'clsx';
import React, { useState } from 'react'
import { useTabs } from '../hooks/useTabs';
import { ChevronRight, Plus } from 'lucide-react';

const SectionItem = ({ section, level = 0 }) => {
    const { activeSectionId, setActiveSectionId, addSection, activeTabId } = useTabs()
    const [isExpanded, setIsExpanded] = useState(true)

    const hasChildren = section.children && section.children.length > 0;
    const canAddChildren = true; // Allow adding children to all sections for now

    const handleToggle = () => {
        if (hasChildren) {
            setIsExpanded(!isExpanded)
        }
    }

    return (
        <div>
            <div
                className={clsx(
                    'group flex items-center justify-between px-3 py-2 text-sm cursor-pointer rounded-r-md',
                    {
                        'bg-blue-50 text-blue-700 font-semibold': section.id === activeSectionId,
                        'hover:bg-gray-100': section.id !== activeSectionId,
                    }
                )}
                style={{ paddingLeft: `${0.75 + level * 1.5}rem` }} // Indent for child levels
                onClick={() => setActiveSectionId(section.id)}
            >
                <div className="flex items-center">
                    {hasChildren && (
                        <ChevronRight
                            className={clsx('mr-1 h-4 w-4 transition-transform', { 'rotate-90': isExpanded })}
                            onClick={(e) => { e.stopPropagation(); handleToggle(); }}
                        />
                    )}
                    <span className={clsx({ 'ml-5': !hasChildren })}>{section.title}</span>
                </div>
                {canAddChildren && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addSection(activeTabId, section.id);
                        }}
                        className="p-1 opacity-0 rounded-full group-hover:opacity-100 hover:bg-gray-300/50 transition-opacity cursor-pointer"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                )}
            </div>

            {isExpanded && hasChildren && (
                <div className="flex flex-col">
                    {section.children.map((childSection) => (
                        <SectionItem key={childSection.id} section={childSection} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SectionItem