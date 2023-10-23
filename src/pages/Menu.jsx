import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <p><Link to='/menu/add'>Add</Link></p>
        <p><Link to='/menu/1'>Menu1</Link></p>
        <p><Link to='/menu/2'>Menu2</Link></p>
        <p><Link to='/menu/3'>Menu3</Link></p>
        <p><Link to='/menu/4'>Menu4</Link></p>
        <p><Link to='/menu/5'>Menu5</Link></p>
    </div>
  )
}

export default Menu