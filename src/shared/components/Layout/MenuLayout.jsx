import { Outlet } from 'react-router-dom'

const MenuLayout = () => {
  return (
    <div>
        <div>This is CarLayout</div><br />
        <Outlet /><br />
        <div>This footer Carlayout</div>
    </div>
  )
}

export default MenuLayout