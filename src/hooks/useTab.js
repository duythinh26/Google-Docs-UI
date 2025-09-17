import { useContext } from "react"
import { TabsContext } from "../contexts/TabContext"

export const useTabs = () => {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error("useTabs must be used within a TabsProvider")
    }
}