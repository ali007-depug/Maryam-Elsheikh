import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import Counter from "../Counter";
import { FaTelegram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <section className="mx-auto mt-10 bg-orang-400/20 shadow-lg rounded-lg p-6 mb-20">
      {/* top section */}
      <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-2.5">
      {/* facebook */}
      <SocialAccount platform="Facebook" count={27000} label="Followers">
        <LuFacebook />
        </SocialAccount>
      {/* telegram */}
      <SocialAccount platform="Telegram" count={7500} label="Subscribers">
        <FaTelegram />
        </SocialAccount>
      {/* instagram */}
      <SocialAccount platform="Instagram" count={1040} label="Followers">
        <LuInstagram />
        </SocialAccount>
      {/* linked in */}
      <SocialAccount platform="LinkedIn" count={500} sign="+" label="Connections">
        <LuLinkedin /> 
        </SocialAccount>
      </div>
      {/*  */}
    </section>
  );
}

interface SocialAccountProps {
  platform: string;
  children: React.ReactNode;
  count: number;
  label: string;
  sign?: string;
}
function SocialAccount({platform,count,label,sign,children}: SocialAccountProps) {
  return(
<div className="flex items-center">
        {/* facebook logo + text */}
        <div className="flex flex-col justify-center gap-2">
          <span className="flex items-center gap-1">
            {/* <LuLinkedin /> */}
            {children}
            {platform}
          </span>
          <Counter to={count} sign={sign} label={label} />
        </div>
      </div>  )
}
