import { useRef, useState } from "react";
import emailjs from "emailjs-com";
export default function Form({portfolioType}:{portfolioType:string}) {
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_ue37d1g", // e.g. service_xxx
        "template_zyqr6jq", // e.g. template_abc
        form.current,
        "ZswtFDAFZFZvNPBNJ" // from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowToast(true);
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setShowToast(false), 3000);
        },
        () => {
          setLoading(false);
        }
      );
  };

  return (
    <>
      <form
        onSubmit={sendEmail}
        ref={form}
        className={`basis-1/2 flex flex-col gap-5 relative ${portfolioType === 'Chemical Engineer' ? 'focus-within:text-gray-900' :'focus-within:text-orange-900'}`}
      >
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Your Name"
          className={`h-10 p-2 border ${portfolioType === 'Chemical Engineer' ? 'border-gray-700 focus:outline-gray-900' :'border-orange-900 focus:outline-orange-500'}`}
          required
        />
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Your Email"
          className={`h-10 p-2 border ${portfolioType === 'Chemical Engineer' ? 'border-gray-700 focus:outline-gray-900' :'border-orange-900 focus:outline-orange-500'}`}
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          className={`h-30 p-2 border ${portfolioType === 'Chemical Engineer' ? 'border-gray-700 focus:outline-gray-900' :'border-orange-900 focus:outline-orange-500'}`}
          required
        ></textarea>
        <button
          type="submit"
          className={`w-fit px-5 py-3 mx-auto  text-white cursor-pointer transition duration-300 ease-in-out rounded bg-gradient-to-l ${portfolioType === 'Chemical Engineer' ? 'from-gray-500 to-gray-800 hover:to-gray-950' :' from-orange-500 to-orange-950 hover:to-orange-500'}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {showToast && <Toast />}
      </form>
    </>
  );
}

function Toast() {
  return (
    <div className="flex absolute -top-20  -translate-x-1/2 left-1/2 gap-5 bg-green-700 text-white px-2 py-3 rounded-lg items-center animate-toast transition duration-300 ease-in-out">
      <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <img src="done.png" alt="check mark icon" width={30} height={30} />
      </span>
      <p>Message sent</p>
    </div>
  );
}
