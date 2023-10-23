import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        <h1>Page not found 404 . . .</h1>
        <p><Link to="/home">Go to Homepage</Link></p>
    </div>
  )
}

export default NotFoundPage