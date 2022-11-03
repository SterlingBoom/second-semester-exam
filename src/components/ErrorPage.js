import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Error 404  page</title>
        <meta name='description' content=' Test for ERROR 404' />
        <link rel='canonical' href='/ErrorPage' />
      </Helmet>

      <div>
        <h1 className='error-colour'>Error 404. Page not found.</h1>
        <h2 className='url-color'>This URL is not correct</h2>
        <Link to='/'>Go back to home page</Link>
      </div>
    </>
  )
}

export default ErrorPage
