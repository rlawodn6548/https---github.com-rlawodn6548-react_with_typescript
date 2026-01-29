import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToDoListContextProvider} from 'context/ToDoList'
import {Header} from 'components/organisms/Header'
import { ToDoListPage } from 'components/pages/ToDoListPage'
import { ToDoInputPage } from 'components/pages/ToDoInputPage'
import { NotFoundPage } from 'components/pages/NotFound'


function App() {
  return (
    <ToDoListContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoListPage />} />
          <Route path="/add" element={<ToDoInputPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ToDoListContextProvider>
  );
}

export default App;
