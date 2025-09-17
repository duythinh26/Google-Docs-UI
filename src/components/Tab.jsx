import { X } from 'lucide-react';
import clsx from 'clsx';
import { useTabs } from '../hooks/useTabs.js';

const Tab = ({ tab }) => {
    const { activeTabId, setActiveTabId, removeTab } = useTabs()
    const isActive = tab.id === activeTabId

    const handleRemoveTab = (e) => {
        e.stopPropagation() // Prevent click event on parent tab
        removeTab(tab.id)
    }

    return (
        <div
            onClick={() => setActiveTabId(tab.id)}
            className={clsx(
                'flex items-center gap-2 px-4 py-2 cursor-pointer border-b-2 transition-colors duration-200 ease-in-out relative',
                {
                    'bg-sky-100/50 border-sky-500 text-sky-600': isActive,
                    'border-transparent hover:bg-gray-100': !isActive,
                }
            )}
        >
            <span className="font-medium text-sm truncate max-w-[200px]">{tab.title}</span>
            <button
                onClick={handleRemoveTab}
                className="p-1 rounded-full hover:bg-gray-300/50 flex-shrink-0 cursor-pointer"
            >
                <X size={16}/>
            </button>
        </div>
    )
}

export default Tab