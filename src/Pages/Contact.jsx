import React, { useState } from "react";
import emailjs from "emailjs-com";
import {  FaPaperPlane, FaTimesCircle } from "react-icons/fa";
import HoverButton from "../Components/HoverButton";
import { Mail, Instagram } from "lucide-react";


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [charCount, setCharCount] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "message") setCharCount(value.length);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSending(true);
    emailjs
      .send(
        "service_ts9b1zc",
        "template_gh3kpuj",
        formData,
        "iIWJs3CRWmyLxDeHb"
      )
      .then(
        () => {
          setNotification({
            type: "success",
            message: "Message sent successfully!",
          });
          setTimeout(() => setNotification(null), 5000);
          setFormData({ name: "", email: "", message: "" });
          setCharCount(0);
          setIsSending(false);
        },
        (error) => {
          setNotification({
            type: "error",
            message: "Failed to send message.",
          });
          setTimeout(() => setNotification(null), 5000);
          setIsSending(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="border border-borderLight dark:border-borderDark bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark px-6 py-8 flex flex-col w-full max-w-full rounded-lg gap-6 overflow-hidden"
    >
      {notification && (
        <div
          className={`fixed bottom-4 right-4 p-3 rounded-md ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white flex justify-between items-center`}
        >
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 text-white"
          >
            <FaTimesCircle />
          </button>
        </div>
      )}
      <h2 className="text-black dark:text-white text-2xl font-bold mb-4">
        Contact me.
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        I’m always eager to explore new opportunities and take on exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </p>
      <form
        onSubmit={sendEmail}
        className="bg-lightBg dark:bg-[#18181B] p-4 rounded-md border border-gray-300 dark:border-[#27272A]"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full">
            <label className="block text-sm font-semibold text-black dark:text-white">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-transparent text-black dark:text-white border-gray-300 dark:border-[#27272A]"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold text-black dark:text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@doe.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-transparent text-black dark:text-white border-gray-300 dark:border-[#27272A]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-black dark:text-white">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Hello there, I would like to ask you about..."
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
            className="w-full p-2 h-28 border rounded-md bg-transparent text-black dark:text-white border-gray-300 dark:border-[#27272A]"
          ></textarea>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mt-2">
          <span className="text-right">{charCount}/500 characters</span>
          <button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.message}
            className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center gap-2 relative disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPaperPlane />
            Send
            {!formData.name || !formData.email || !formData.message ? (
              <FaTimesCircle className="text-red-500" />
            ) : null}
          </button>
        </div>
      </form>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        Or contact me with...
      </p>
      <div className="flex gap-4 mt-2">
        <HoverButton
          text="Email"
          icon={Mail}
          className="px-4 py-2 bg-buttonLight text-buttonLightText dark:bg-lightBg dark:text-textLight rounded-md hover:bg-buttonLightHover flex items-center gap-2"
        />
        <HoverButton
          text="Instagram"
          icon={Instagram}
          className="px-4 py-2 bg-buttonLight text-buttonLightText dark:bg-lightBg dark:text-textLight rounded-md hover:bg-buttonLightHover flex items-center gap-2"
        />
      </div>
    </div>
  );
};

export default ContactForm;

