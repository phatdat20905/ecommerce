import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className='overflow-hidden sidebarWrapper w-[20%] transition-all'>
                <SideBar />
              </div>
            </div>

          </section>
        </>
      )
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
