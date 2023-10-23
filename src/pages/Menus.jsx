import { useParams } from 'react-router-dom'

const Menus = () => {
    const { id } = useParams()
  return (
    <div>
        <h3>Menu for today</h3>
        <p>Menu {id}</p>
    </div>
  )
}

export default Menus