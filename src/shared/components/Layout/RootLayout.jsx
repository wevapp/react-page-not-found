import { Link, Outlet } from 'react-router-dom'
 
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'

const RootLayout = () => {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Header />
            <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout


// Note:
// <RootLayout>
//     {children}
// </RootLayout>

// <Routes>
//     <Route element={<RootLayout />}>
//          components = <Outlet />
//     </Route>
// </Routes>
