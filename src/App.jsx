import TabContent from "./components/TabContent"
import TabList from "./components/TabList"
import { TabsProvider } from "./contexts/TabContext"

const App = () => {
  return (
    <TabsProvider>
      <div className="w-full h-screen font-sans flex flex-col">
        {/* Main content and Sidebar section */}
        <main className="flex flex-grow">
          {/* Sidebar contains sections */}
          <aside className="w-64 border-r border-gray-200">
            <TabContent />
          </aside>

          {/* Main content area of the document (temporarily blank) */}
          <div className="flex-1 p-8 bg-gray-50">
            <h1 className="text-2xl font-bold">Nội dung tài liệu...</h1>
            <p>Phần này sẽ hiển thị chi tiết nội dung của section được chọn.</p>
          </div>
        </main>
        {/* Tabs Bar */}
        <footer className="w-full bg-white shadow-sm">
          <TabList />
        </footer>
      </div>
    </TabsProvider>
  )
}

export default App
