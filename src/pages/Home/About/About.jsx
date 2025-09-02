import React from "react";
function About() {

  return (
    <>
       <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Images */}
        <div className="flex flex-col items-center space-y-6">
          <div className="rounded-2xl overflow-hidden shadow-md w-72 h-56">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md w-72 h-56">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Office team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Employees Box */}
          <div className="bg-white shadow-md border rounded-2xl px-6 py-4 flex items-center space-x-3">
            <div className="text-blue-600 text-2xl">👥</div>
            <div>
              <h4 className="text-lg font-bold">1100+ Employees</h4>
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div>
          <h4 className="text-blue-600 font-semibold mb-2 uppercase">
            About Us
          </h4>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-snug">
            We Provide The <span className="text-blue-600">Best Services</span>{" "}
            To Grow Your Business!
          </h2>
          <p className="text-gray-600 mb-6">
            Bdcalling invites you to explore our array of services, reach out to
            our team of seasoned professionals, and embark on a journey of
            digital transformation and business expansion. We see each project
            as a gateway to growth and innovation, and we have the collective
            capability to leverage technology’s potent force and propel your
            business forward.
          </p>
          <button className="btn btn-primary rounded-full px-6">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
