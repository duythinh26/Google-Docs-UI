# Google Docs Clone

This is a React project built to mimic the look and feel of Google Docs. Users can open multiple tabs, switch between them, and view their sub-items in a visual hierarchy.

The project was created using Vite, using React (with Hooks) for the logic and Tailwind CSS for the responsive design.
 
## Main functions: 
- Tab Management:
    - Add new Tab: Click the + button to create a new document.
    - Close Tab: Click the x button on each tab to close it.
    - Switch Tab: Click on any tab to view its content. The currently selected tab will be highlighted.
    - Smart behavior: When closing a tab, the application will automatically switch to the nearest tab. When closing the last tab, a welcome screen will appear.
- Section Management:
    - Hierarchical display: Items can be nested (parent item - child item).
    - Hide/Show child items: Click on the arrow icon next to the parent items to hide or show the child items inside.
    - Add child item: Hover over the predefined items (I, II, III) and click the + button to quickly create a new child item.
    - Show Contents: Click on any item (parent or child) to see its detailed content in the right pane.

## Technology used: 
- Framework: React
- Build Tool: Vite
- Styling: Tailwind CSS
- State Management: React Context API & Hooks
- Icons: Lucide React

## Install and run the project:
To run this project on your machine, follow these steps:

- Clone repository:
    ```bash
    git clone https://github.com/duythinh26/Google-Docs-UI.git

- Install dependencies: Use npm (or yarn) to install the required packages.
    ```bash
    npm install
- Run development server:
    ```bash
    npm run dev