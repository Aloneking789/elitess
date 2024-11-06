import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({
      publicKey: "YhN-MdfHfkjGBcWHY",
    });
    emailjs
      .send(
        "service_hragdzs", // Replace with your EmailJS service ID
        "template_zqiimmq", // Replace with your EmailJS template ID
        formData
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", message: "", email: "" });
        },
        (error) => {
          console.log(error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
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
        <a href="mailto:theelitesoftwaresol@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form mt-16 w-full flex justify-center relative z-999">
        <div className="max-w-[600px] w-full px-4 py-6 bg-gradient-to-r from-[#0a192f] to-[#121e3e] rounded-lg shadow-lg">
          <h2 className="text-2xl text-center font-semibold mb-4 text-white">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-white"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md text-white focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent transition duration-300"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-md transition duration-300 hover:from-blue-600 hover:to-blue-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
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
    </footer>
  );
};

export default Footer;
