import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          AATW © 2023 . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/services" className="mr-4 hover:underline md:mr-6">
              Services
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/company/aatwagency/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline block py-2 pl-3 pr-4 text-md text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
