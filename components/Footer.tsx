import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://elitebackend-82n8.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Your message has been sent!");
        closeModal();
      } else {
        alert("There was a problem sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <button onClick={openModal}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </button>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Elite
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
        <div>
          <p className="md:text-base text-sm md:font-normal font-light">
            Credit - Javascript Mastery
          </p>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white p-8 rounded-lg w-full max-w-md relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-2xl font-extrabold mb-6 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Full Name"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-blue-700 bg-opacity-60 placeholder-white focus:outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-blue-700 bg-opacity-60 placeholder-white focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your Contact Number"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-blue-700 bg-opacity-60 placeholder-white focus:outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-semibold">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full mt-2 py-2 px-4 rounded-lg bg-blue-700 bg-opacity-60 placeholder-white focus:outline-none"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
