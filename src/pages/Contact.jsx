
const Contact = () => {
  return (
    <div className="bg-[#3a6fa4] text-white p-7">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8 leading-relaxed">
          Have a question, feedback, or just want to say hello? Feel free to
          reach out to us using the form below. We'd love to hear from you!
        </p>
      </div>

      <form
        className="max-w-lg mx-auto flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-transparent border border-white rounded-md placeholder-white text-white"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-transparent border border-white rounded-md placeholder-white text-white"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full px-4 py-2 bg-transparent border border-white rounded-md placeholder-white text-white"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          required
          className="w-full px-4 resize-none py-2 bg-transparent border border-white rounded-md placeholder-white text-white"
        ></textarea>

        <button
          type="submit"
          className="w-full py-2 bg-white text-blue-700 font-bold rounded-md hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-white/80">support@bitesdigest.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-white/80">+91 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
