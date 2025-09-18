import MainTabContent from "./components/MainTabContent"
import TabContent from "./components/TabContent"
import TabList from "./components/TabList"
import { TabsProvider } from "./contexts/TabsContextProvider"

const App = () => {
  return (
    <TabsProvider>
      <div className="w-full min-h-screen h-screen font-sans flex flex-col">
        {/* Main content and Sidebar section */}
        <main className="flex flex-row flex-grow overflow-hidden">
          {/* Sidebar contains sections */}
          <aside className="flex-shrink-0 border-r border-gray-200 overflow-y-auto">
            <TabContent />
          </aside>

          {/* Main content area of the document */}
          <section className="flex-1 overflow-y-auto">
            <MainTabContent />
          </section>
        </main>
        {/* Tabs Bar */}
        <footer className="w-full bg-white shadow-sm z-10">
          <TabList />
        </footer>
      </div>
    </TabsProvider>
  )
}

export default App
