import { Routes, Route } from 'react-router-dom'

//import components
import RootLayout from './shared/components/Layout/RootLayout'
import MenuLayout from './shared/components/Layout/MenuLayout'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import NotFoundPage from './pages/NotFoundPage'
import Menus from './pages/Menus'
import AddMenu from './pages/AddMenu'

const App = () => {

  return (
      <Routes>
        {/* Rootlayout using outlet to get components*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>

          {/* Menulayout using outlet to get components*/}
          <Route element={<MenuLayout />}>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/menu/:id' element={<Menus />}/>
            <Route path='/menu/add' element={<AddMenu />}/>
          </Route>
        </Route>
        {/* Page not found */}
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
  )
}

export default App
