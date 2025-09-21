import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail, FiPhone } from "react-icons/fi"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from "react-router"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Map from "../Map/Map";

function Contact() {
    const [loading,setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();

        emailjs
            .sendForm('service_vjiy0tc', 'template_boeza0l', form.current, {
                publicKey: 'FFPPwApvQ5jGzW9RD',
            })
            .then(
                () => {
                    setLoading(false);
                    form.current.reset();
                        Swal.fire({
                            title: "Successfully",
                            text: "Your massage has been seccessfully. I will get back to you sortly.",
                            icon: "success"
                        });
                },
                (error) => {
                    setLoading(false)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                },
            );
    };


    return (
        <>
            <div className="bg-gradient-to-b from-gray-200 to-[#fff]">
                <section id="contact" className="w-11/12 md:w-10/12  mx-auto py-20 space-y-6 ">
                <div className="text-center mb-8">
                    <span className="font-semibold text-[var(--secondary)]">Contact</span>
                    <h2 className="text-2xl lg:text-4xl font-bold  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
                        Contact with me
                    </h2>
                </div>
                <div className="grid overflow-hidden grid-cols-1 justify-between gap-8 mx-auto md:grid-cols-2 ">
                    {/* map section */}
                    <Map></Map>


                    {/* form section */}
                    <form
                    ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col p-6 border border-gray-200 transition-all space-y-6 rounded-lg"
                    >
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input
                                type="text"
                                required
                                name="from_name"
                                placeholder="Name"
                                className="block w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 "
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Phone Number</span>
                            <input
                                type="text"
                                required
                                name="from_number"
                                placeholder="Phone"
                                className="block w-full border p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 "
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input
                                type="email"
                                required
                                name="from_email"
                                placeholder="Email"
                                className="block w-full p-2 rounded-md border shadow-sm focus:ring focus:ring-opacity-75 "
                            />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea
                                rows="3"
                                required
                                name="message"
                                className="block p-2 w-full border rounded-md focus:ring focus:ring-opacity-75 "
                            ></textarea>
                        </label>
                        <div>
                            <button className="btn px-8 py-6 rounded-full text-white bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] border-0 hover:opacity-90">
                                {loading ? <span className="loading loading-spinner loading-md"></span> : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            </div>

        </>
    )
}

export default Contact
