import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import Counter from "../Counter";
import { FaTelegram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <section className="mx-auto mt-10 bg-orange-200/20 shadow-lg rounded-lg p-6 mb-20">
      {/* top section */}
      <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-2.5">
        {/* facebook logo + text */}
        <div className="flex flex-col justify-center gap-2">
          <span className="flex items-center gap-1">
            <LuFacebook/>
            Facebook
          </span>
          <Counter to={27000} label="Followers" />
        </div>
      <div className="flex items-center">
        {/* facebook logo + text */}
        <div className="flex flex-col justify-center gap-2">
          <span className="flex items-center gap-1">
            <FaTelegram />
            Orkeed
          </span>
          <Counter to={7500} label="Subscribers" />
        </div>
      </div>
      <div className="flex items-center">
        {/* facebook logo + text */}
        <div className="flex flex-col justify-center gap-2">
          <span className="flex items-center gap-1">
            <LuInstagram />
            Instagram
          </span>
          <Counter to={1040} label="Followers" />
        </div>
      </div>
      <div className="flex items-center">
        {/* facebook logo + text */}
        <div className="flex flex-col justify-center gap-2">
          <span className="flex items-center gap-1">
            <LuLinkedin />
            Linkedin
          </span>
          <Counter to={500} sign="+" label="Connection" />
        </div>
      </div>
      </div>
      {/*  */}
    </section>
  );
}
