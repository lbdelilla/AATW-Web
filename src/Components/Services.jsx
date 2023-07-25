import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className="my-10 md:mb-10" id="services">
      <div className="flex flex-row justify-center ">
        <Link to={'/services-outsourcing'}>
          <div className="flex justify-center serv-container items-center max-w-sm p-10 bg-at-blue  rounded-tl-lg shadow hover:bg-at-dark-blue  dark:bg-gray-800  dark:hover:bg-gray-700">
            <h5 className="mb-2 text-sm md:text-2xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
              OUTSOURCING
            </h5>
          </div>
        </Link>
        <Link to={'/services-marketing'}>
          <div className="flex justify-center serv-container items-center max-w-sm p-10 bg-at-red  rounded-tr-lg shadow hover:bg-at-dark-red dark:bg-gray-800  dark:hover:bg-gray-700">
            <h5 className="text-center mb-2 text-sm md:text-2xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
              MARKETING & DESIGN
            </h5>
          </div>
        </Link>
      </div>
      <div className="flex flex-row justify-center ">
        <Link to={'/services-merchandising'}>
          <div className="flex justify-center serv-container items-center max-w-sm p-10 bg-at-red  rounded-bl-lg shadow hover:bg-at-dark-red dark:bg-gray-800  dark:hover:bg-gray-700">
            <h5 className="mb-2 text-sm md:text-2xl lg:text-2xl font-bold tracking-tight text-white dark:text-white">
              MERCHANDISING
            </h5>
          </div>
        </Link>
        <Link to={'/services-events'}>
          <div className="flex justify-center serv-container items-center max-w-sm p-10 bg-at-blue rounded-br-lg shadow hover:bg-at-dark-blue dark:bg-gray-800  dark:hover:bg-gray-700">
            <h5 className=" mb-2 text-sm md:text-2xl lg:text-2xl font-bold tracking-tight  text-white dark:text-white">
              EVENTS
            </h5>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Services
