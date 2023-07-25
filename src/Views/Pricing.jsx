import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="w-full mx-auto bg-white px-5 py-10 text-gray-900 mb-10">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">NUESTROS PLANES</h1>
        <h3 className="text-xl font-medium mb-10">
          Elige el plan que se adapte mejor a tus necesidades y obtén el máximo
          rendimiento para tu negocio.
        </h3>
      </div>
      <div className="max-w-4xl mx-auto md:flex">
        <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4">
              ATENCIÓN AL CLIENTE
            </h2>
            <h3 className="text-center font-bold text-4xl md:text-2xl lg:text-4xl mb-5">
              € 200/mo
            </h3>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Servicio de
                atención al cliente
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Paga por las
                horas trabajadas
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Link
              to="/contact"
              className="font-bold bg-at-blue hover:bg-at-dark-blue text-white rounded-md px-10 py-2 transition-colors w-full"
            >
              SABER MÁS
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4">
              SERVICIOS IT{' '}
            </h2>
            <h3 className="text-center font-bold text-4xl md:text-3xl lg:text-5xl mb-5">
              € 200/mo
            </h3>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Respaldo de
                información
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Instalación de
                software
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Cyberseguridad
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Resolución de
                incidencias
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Infraestruscturas
                informáticas
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Link
              to="/contact"
              className="font-bold bg-at-blue hover:bg-at-dark-blue text-white rounded-md px-10 py-2 transition-colors w-full"
            >
              SABER MÁS
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
          <div className="w-full flex-grow">
            <h2 className="text-center font-bold uppercase mb-4">
              ADIMISTRACIÓN
            </h2>
            <h3 className="text-center font-bold text-4xl md:text-3xl lg:text-4xl mb-5">
              € 299/mo
            </h3>
            <ul className="text-sm px-5 mb-8">
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Trabajo
                administrativo
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Carga de datos
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Manejo de agendas
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Actualización de
                bases de datos
              </li>
              <li className="leading-tight">
                <i className="mdi mdi-check-bold text-lg"></i> Otros servicios
                personalizados
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Link
              to="/contact"
              className="font-bold bg-at-blue hover:bg-at-dark-blue text-white rounded-md px-10 py-2 transition-colors w-full"
            >
              SABER MÁS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
