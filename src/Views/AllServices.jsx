import { Link, useLocation } from 'react-router-dom'
import Merchandising from '../assets/merchandising.png'
import Marketing from '../assets/marketing.png'
import Events from '../assets/events.png'
import Outsourcing from '../assets/outsourcing.png'
import { useEffect } from 'react'

const AllServices = () => {
  const location = useLocation()

  useEffect(() => {
    const selectedService = location.pathname.replace('/services/', '')
    const validServices = [
      'outsourcing',
      'marketing',
      'merchandising',
      'events',
    ]

    // Verificar si el servicio seleccionado es válido y si tiene un elemento con el ID correspondiente
    if (validServices.includes(selectedService)) {
      const serviceElement = document.getElementById(selectedService)
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-full lg:w-full lg:grid-cols-1">
          <div
            className="bg-white rounded-2xl shadow-2xl px-8 py-12 sm:px-12 lg:px-8"
            id="outsourcing"
          >
            <div className="mb-10 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Outsourcing
              </h3>
              <p className="mb-6">
                <strong>Libera tu carga, enfoca tu pasión.</strong>
                <br />
              </p>
              <p className="mb-6">
                Con nuestro servicio de Outsourcing, dejamos que te enfoques en
                lo que amas mientras nosotros nos encargamos de todo lo demás.
              </p>
              <p className="mb-6">
                Desde recursos humanos hasta logística, permitimos que tu
                negocio alcance nuevas alturas y crezca sin límites. Confía en
                nosotros para convertir tus sueños en realidad.
              </p>
            </div>
            <img
              src={Outsourcing}
              className="w-2/6 ml-auto -mb-12"
              alt="illustration"
              loading="lazy"
              width="800"
              height="500"
            />
            <Link to={'/contact'}>
              <span className=" text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Contáctanos
                <i className="ml-3 fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl shadow-2xl px-8 py-12 sm:px-12 lg:px-8"
            id="marketing"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Marketing
              </h3>
              <p className="mb-6">
                Haz que tu marca brille con nuestro potente arsenal de
                estrategias de marketing.
              </p>
              <p className="mb-6">
                Desde campañas digitales que cautivan a tus clientes hasta
                tácticas de branding que cuentan historias memorables, nuestra
                pasión es elevar tu negocio al siguiente nivel. Atrévete a ser
                diferente y destaca en el mercado con nuestra creatividad y
                conocimiento estratégico.
              </p>
              <p className="mb-6">¿Qué ofrecemos?</p>
              <ul className="list-disc list-inside">
                <li>Marketing Digital</li>
                <li>Publicidad</li>
                <li>Branding</li>
                <li>Web Design</li>
              </ul>
            </div>
            <img
              src={Marketing}
              className="w-2/6 ml-auto -mb-12"
              alt="illustration"
              loading="lazy"
              width="800"
              height="500"
            />
            <Link to={'/contact'}>
              <span className=" text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Contáctanos
                <i className="ml-3 fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl shadow-2xl px-8 py-12 sm:px-12 lg:px-8"
            id="merchandising"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Merchandising
              </h3>
              <p className="mb-6">
                <strong>
                  Tu marca merece estar en el centro del escenario.
                </strong>{' '}
              </p>
              <p className="mb-6">
                Con nuestro servicio de merchandising, llevamos tu identidad
                visual a otro nivel. Desde productos promocionales
                personalizados hasta exhibiciones impactantes en puntos de
                venta, hacemos que tu marca se destaque y deje una impresión
                duradera.
              </p>
            </div>
            <img
              src={Merchandising}
              className="w-2/6 ml-auto -mb-12"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
            <Link to={'/contact'}>
              <span className=" text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Contáctanos
                <i className="ml-3 fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl shadow-2xl px-8 py-12 sm:px-12 lg:px-8"
            id="events"
          >
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Events</h3>
              <p className="mb-6">
                <strong>
                  Crea momentos inolvidables con nuestros eventos
                  personalizados.
                </strong>{' '}
              </p>
              <p className="mb-6">
                Nos encargamos de cada detalle, desde la planificación hasta la
                ejecución, para garantizar que tu evento sea excepcional en
                todos los sentidos. Ya sea un lanzamiento de producto
                emocionante o una celebración corporativa, nuestro equipo
                talentoso se asegura de que tu evento sea digno de recordar.
              </p>
            </div>
            <img
              src={Events}
              className="w-2/6 ml-auto -mb-12"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
            <Link to={'/contact'}>
              <span className=" text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-3 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Contáctanos
                <i className="ml-3 fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllServices
