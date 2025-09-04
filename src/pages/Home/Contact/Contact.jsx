import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiMail, FiPhone } from "react-icons/fi"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from "react-router"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

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
            <section id="contact" className="pb-10 lg:pb-12 space-y-6">
                <div className="text-center mb-8">
                    <span className="font-semibold text-[var(--secondary)]">Contact</span>
                    <h2 className="text-2xl lg:text-4xl font-bold  uppercase bg-gradient-to-l from-[#24C4F4] to-[#0E47A1] bg-clip-text text-transparent">
                        Contact with me
                    </h2>
                </div>
                <div className="grid overflow-hidden md:w-11/12 grid-cols-1 gap-4 mx-auto md:grid-cols-2 ">
                    <section className="rounded-xl ">
                        <div className="w-11/12 mx-auto ">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-2">
                                Let’s talk about your project
                            </h2>
                            <p className="mb-6">
                                I’m currently available for new projects. Contact me to discuss
                                your web development needs.
                            </p>

                            <div className="space-y-4 text-left">
                                <p className="flex items-center gap-3">
                                    <IoLocationSharp className="text-[var(--secondary)] text-xl" />
                                    Bhabanipur, Gazipur, Dhaka, Bangladesh
                                </p>
                                <p className="flex items-center gap-3">
                                    <FiPhone className="text-[var(--secondary)] text-xl" />
                                    +880 1407641417
                                </p>
                                <p className="flex items-center gap-3">
                                    <FiMail className="text-[var(--secondary)] text-xl" />
                                    tonmoynht1930@gmail.com
                                </p>
                            </div>

                            <div className="mt-6 flex  gap-4 text-2xl">
                                <Link
                                    to="https://www.facebook.com/nurislamhasantonmoyth"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[var(--secondary)]"
                                >
                                    <FaFacebookF />
                                </Link>
                                <Link
                                    to="https://github.com/tonmoyth"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[var(--secondary)]"
                                >
                                    <FaGithub />
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/in/nurislam-hasan-tonmoy-88b1bb368/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-[var(--secondary)]"
                                >
                                    <FaLinkedinIn />
                                </Link>
                            </div>
                        </div>
                    </section>
                    <form
                    ref={form}
                        onSubmit={sendEmail}
                        className="flex w-11/12 mx-auto flex-col p-6 bg-black text-white space-y-6 rounded-lg"
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

        </>
    )
}

export default Contact
