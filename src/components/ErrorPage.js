import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
      <h1 className='error-colour'>Error 404. Page not found.</h1>
      <h2 className='url-color'>This URL is not correct</h2>

      <Link to='/'>Go back to home page</Link>
    </div>
  )
}

export default ErrorPage
