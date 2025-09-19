export default function SocialAccount() {
    const accounts = [
      {
        platform: "LinkedIn",
        src: "LinkedIn.png",
        href: "https://www.linkedin.com/in/maryamelsheikh",
      },
      {
        platform: "X",
        src: "x.png",
        href: "https://x.com/MaryameElsheikh9?t=a0rhDHWz_01lm2qo-Tu4kQ&s=09",
      },
      {
        platform: "Facebook",
        src: "facebook.png",
        href: "https://www.facebook.com/maryamelsheikh1998",
      },
      {
        platform: "Instagram",
        src: "insta.png",
        href: "https://www.instagram.com/maryamelsheikh9?igsh=MW5wcDRxaWx6aDNsbw==",
      },
    ];
  
    return (
      <div className="flex gap-5 justify-center mt-4">
        {accounts.map((account) => (
          <a
            href={account.href}
            title={account.platform}
            target="_blank"
            className="text-gray-700 hover:text-orange-500 transition-all duration-300 ease-in-out"
            key={account.platform}
          >
            <img src={account.src} alt={account.platform + "icon"} width={30} height={30} />
          </a>
        ))}
      </div>
    );
  }