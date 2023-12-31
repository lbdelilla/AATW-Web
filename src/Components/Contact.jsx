import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const FORM_ID = import.meta.env.VITE_FORM_ID
  const [formState, handleSubmit] = useForm(FORM_ID)
  const resetInputs = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="mb-5 flex flex-col justify-center" id="contact">
      <h1 className="text-center text-2xl my-9 font-medium ">CONTÁCTANOS</h1>
      <form
        className="md:w-1/2 mx-auto flex flex-col items-center justify-center"
        onSubmit={(event) => {
          handleSubmit(event)
          setIsSubmitted(true)
          resetInputs(event)
        }}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={formState.errors}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={formState.errors}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo Electrónico
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder=" "
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={formState.errors}
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tu mensaje
          </label>
        </div>
        <button
          type="submit"
          className="mt-5 text-white bg-at-blue hover:bg-at-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-80 sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
        {isSubmitted && (
          <p className="text-center text-xl my-3 text-gray-600  dark:text-light mb-5">
            {' '}
            Muchas gracias por escribirnos, nos comunicaremos contigo lo antes
            posible!{' '}
          </p>
        )}
      </form>
    </section>
  )
}

export default Contact
