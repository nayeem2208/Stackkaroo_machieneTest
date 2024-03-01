import image from '../../public/5ec9a2e7ef3f94384dcee82e279f368d.jpeg';

export default function FourthMini() {
  return (
    <div  style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='text-center  py-2 md:py-6 items-center flex justify-center'>
        <h1
          style={{
            color: "#0A56F1",
            lineHeight: "1.5",
            zIndex:'5'
          }}
          className="text-xs md:text-3xl w-3/6 md:w-2/5 font-bold flex justify-center items center text-center"
        >
          Achieve Customization and Satisfaction with Stackkaroo's{" "}
          Carefully Crafted Web Solutions
        </h1>
      </div>
      <div className='text-center pb-2 md:pb-6 items-center flex justify-center'>
        <div className=' w-4/6 md:w-3/6'>
          <h1
            style={{
              maxWidth: "100vw",
              zIndex:'5'
            }}
            className="text-gray-700 text-xs md:text-2xl font-semibold text-center  "
          >
            Consider Stackkaroo's trusted web development services for top-notch and
            cutting-edge web development solutions. Stackkaroo boasts a team of
            highly experienced and skilled web designers and developers who are
            dedicated to delivering high-quality and innovative websites.
          </h1>
        </div>
        </div>
        <div className='text-center md:pb-4 items-center flex justify-center'>
        <button
          style={{
            backgroundColor: "#F78319",
            zIndex:'5'
          }}
          className="text-white px-1 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-xl font-semibold md:font-bold mt-2 mb-8"
        >
          Connect with our Experts Today!
        </button>
        </div>
    </div>
  );
}
