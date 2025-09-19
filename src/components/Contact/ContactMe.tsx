import Form from "./Form";
import SocialAccount from "./SocialAccounts";

export default function ContactMe() {
  return (
    <section className="my-10 px-5" id="contact">
      {/* title */}
      <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
        {/* Background text */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-11 w-full">
          <span className="text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold text-black opacity-10 tracking-widest select-none">
            CONTACT
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-orange-500 relative">
          Contact
        </h1>
      </div>
      {/* form + img */}
      <div className="flex flex-col items-center mt-10 lg:grid grid-cols-[400px_1fr] lg:gap-10">
        {/* left section */}
        <div className="col-start-1 bgred-200">
          {/* text */}
          <div className="text-center">
            <h2 className="text-orange-500 relative text-2xl  font-bold my-1.5 max-lg:after:hidden after:w-25 after:h-1  after:absolute  after:-right-10 after:-translate-1/2 after:top-1/2  after:bg-orange-400 after:contetn-['*'] max-lg:before:hidden before:w-25 before:h-1  before:absolute  before:left-15 before:-translate-1/2 before:top-1/2  before:bg-orange-400 before:contetn-['*']">
              Contact Me
            </h2>
            <p className="text-gray-800 text-xl my-1.5 font-semibold">
              Get In Touch
            </p>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Have a project in mind or just want to connect? Feel free to reach
              out—I’d be happy to discuss ideas, collaborations, or
              opportunities. Let’s create something great together!
            </p>
          </div>

          {/* social media icons */}
          <div className="mt-10">
            <p className="text-center font-semibold text-amber-800">Follow me in these platforms</p>
            <SocialAccount/>
          </div>
        </div>
    {/* Form section */}
      <div className="flex max-md:flex-col gap-10 w-full mt-10 lg:mt-0">
        <Form/>
        {/* right section */}
        <img src="msg.svg" alt="msg icon" className="grow max-md:self-center object-contain size-[300px]" width={400} height={100}/>
      </div>
      </div>

    </section>
  );
}


