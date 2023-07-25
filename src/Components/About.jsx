import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-2xl tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Bienvenido/a a AATW Agency
        </h1>
        <p className="my-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Nuestro objetivo es proporcionar una experiencia única que <br />
          capture la visión que USTED tiene. Planificamos y organizamos <br />
          cuidadosamente cada aspecto de su solicitud, asegurando resultados{' '}
          <br />
          excepcionales.{' '}
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Somos globales, pero locales. Una agencia boutique <b /> con grandes
          ideas y grandes recursos!!
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Bienvenido a AATW.
        </p>
        <Link to={'/contact'}>
          <span className="text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Contáctanos
            <i className="ml-3 fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
    </section>
  )
}

export default About
