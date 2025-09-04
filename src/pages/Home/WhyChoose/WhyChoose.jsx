import NexusOrb from "../../../components/Nexusorb/nexusorb"

function WhyChoose() {

  return (
    <>
     
       <div className="px-4  mx-auto  md:px-24 lg:px-8 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-10/12 mx-auto overflow-hidden bg-white rounded lg:flex-row sm:mx-auto">
        {/* <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div> */}

        <div>
            <NexusOrb></NexusOrb>
        </div>


        <div className="flex flex-col justify-center p-8 bg-white  ">
          <div>
            <h4 className="text-[var(--secondary)] font-semibold mb-2 uppercase">
                           Why Choose us
                        </h4>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Your new ideal style
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
            sed consequat odio sollicitudin.
          </p>
          <div className="flex items-center">
            {/* <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button> */}
            <button className="btn px-8 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                Learn More
                            </button>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default WhyChoose
