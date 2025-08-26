import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 👈 Loading state

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading state to true

    emailjs
      .sendForm(
        "service_8u8g0aa", // Replace with your EmailJS Service ID
        "template_02j5ewr", // Replace with your EmailJS Template ID
        form.current,
        "Xk6InqMeEo4fcHihF" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsLoading(false); // Set loading state to false
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f]/90 p-8 rounded-2xl shadow-[0_0_30px_rgba(130,69,236,0.3)] border border-purple-600/40 backdrop-blur-lg transition-transform duration-500 hover:scale-105">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="user_email"
              className="text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 
              focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
              transition duration-300"
            />
          </div>
          {/* Name*/}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="user_name"
              className="text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 
              focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
              transition duration-300"
            />
          </div>
          {/* Subject */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 
              focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
              transition duration-300"
            />
          </div>
          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-700 
              focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50
              transition duration-300"
            />
          </div>
          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading} // 👈 Disable button during loading
            className={`relative w-full py-3 text-white font-semibold rounded-lg 
              bg-gradient-to-r from-purple-600 to-pink-400 
              overflow-hidden transition-all duration-500 
              ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-105 cursor-pointer"
              }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Sending...</span>
              </div>
            ) : (
              <span className="relative z-10">Send 🚀</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
