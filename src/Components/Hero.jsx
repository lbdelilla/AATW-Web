import { TypeAnimation } from 'react-type-animation'
import '../index.css'
const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-1 px-4 mx-auto max-w-screen-xl text-center lg:py-5">
        <div className="up">
          <div className="red-form-up forms tracking-in-expand-forward-top"></div>
          <div className="blue-form-up forms tracking-in-expand-forward-top"></div>
        </div>
        <h1 className="flex flex-col md:flex-row md:flex justify-center gap-3 md:gap-5 lg:gap-9 mb-4 text-2xl tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl dark:text-white">
          <TypeAnimation
            sequence={[
              'OUTSOURCING  |',
              50,
              'OUTSOURCING  |  MARKETING  |',
              50,
              'OUTSOURCING  |  MARKETING  |  MERCHANDISING  |',
              50,
              'OUTSOURCING  |  MARKETING  |  MERCHANDISING  |  EVENTS  ',
              50,
              () => {
                console.log('Sequence completed')
              },
            ]}
            wrapper="span"
            cursor={false}
            repeat={false}
            style={{ fontSize: '1em', display: 'inline-block' }}
          />
        </h1>
        <div className="down">
          <div className="blue-form-down forms tracking-in-expand-forward-bottom"></div>
          <div className="red-form-down forms tracking-in-expand-forward-bottom"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
