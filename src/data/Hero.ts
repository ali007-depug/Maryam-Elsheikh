export type FloatingIcon = {
  src: string;
  alt: string;
  className: string;
  animation: "float" | "rotate" | "scale" | "fade" | "custom";
  duration: number;
};

export type HeroButton = {
  label: string;
  href: string;
  download?: boolean;
  style: string;
};

export type HeroData = {
  type: "Chemical Engineer" | "Content Writer";
  bgGradient: string;
  title: string;
  description: string;
  heroImg: string;
  glowColor: string;
  floatingIcons: FloatingIcon[];
  buttons: HeroButton[];
};

export const heroData: HeroData[] = [
  // chemical engineer
  {
    type: "Chemical Engineer",
    bgGradient: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700",
    title: "Chemical Engineer",
    description: `I’m a highly motivated Chemical Engineer, fresh graduate
    with 1+ years of training and courses. I trained as a 
    Quality Control Engineer at Sudanese Standard Metrology Organization 
    and Azal Pharma Company.`,
    heroImg: "hero.jpeg",
    glowColor: "bg-gray-400",
    floatingIcons: [
      {
        src: "icon6.svg",
        alt: "icon",
        className: "absolute w-10 top-0 left-1/4",
        animation: "float",
        duration: 2,
      },
      {
        src: "icon2.svg",
        alt: "icon",
        className: "absolute w-10 bottom-0 right-10 z-2",
        animation: "rotate",
        duration: 3,
      },
      {
        src: "icon3.svg",
        alt: "icon",
        className: "absolute w-10 bottom-10 z-2 left-0",
        animation: "scale",
        duration: 2.5,
      },
      {
        src: "icon5.svg",
        alt: "icon",
        className: "absolute w-10 top-5 z-2 right-0",
        animation: "fade",
        duration: 4,
      },
    ],
    buttons: [
      {
        label: "Download My CV 📰",
        href: "maryam_enginner_Cv.pdf",
        download: true,
        style:
          "px-4 py-5 bg-white font-semibold rounded-lg shadow-md hover:bg-gray-400 hover:text-white transition-all duration-300 ease-in-out",
      },
      {
        label: "Explore my Work",
        href: "#work",
        style:
          "px-4 py-5 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition-all duration-300 ease-in-out",
      },
    ],
  },
  //   content writer
  {
    type: "Content Writer",
    bgGradient: "bg-gradient-to-r from-orange-950 via-orange-900 to-orange-800",
    title: "Content Writer",
       description: `
      <ul class="list-disc list-inside space-y-3">
        <li>
          Former <span class="font-semibold">Content Writer</span> at TEDX
          Wad-Madani Conference (2021) &amp; former
          <span class="font-semibold"> Articles Writer</span> at Akhirlahza
          Newspaper.
        </li>
        <li>
          One of the main founders of 
          <span class="font-semibold">Moqueroon Organization</span> that cares
          about community services and awareness for college students.
        </li>
        <li>
          Volunteered as <span class="font-semibold">Content Writer</span>, Page
          Manager, and
          <span class="font-semibold"> Social Media Content Creator</span> for
          several charitable organizations.
        </li>
        <li>
          Passionate about 
          <span class="font-semibold">sustainable energy</span>, 
          <span class="font-semibold">safety &amp; quality control</span>, 
          <span class="font-semibold">water treatment</span>, and 
          <span class="font-semibold">content writing</span>.
        </li>
      </ul>
    `,
    heroImg: "hero.jpeg",
    glowColor: "bg-orange-600",
    floatingIcons: [
      {
        src: "write4.svg",
        alt: "icon",
        className: "absolute w-10 top-10 left-[-10px]",
        animation: "custom",
        duration: 3,
      },
      {
        src: "write3.svg",
        alt: "icon",
        className: "absolute w-10 bottom-20 right-[-20px] z-11",
        animation: "rotate",
        duration: 4,
      },
      {
        src: "write1.svg",
        alt: "icon",
        className: "absolute w-10 bottom-10 z-11 left-0",
        animation: "scale",
        duration: 3,
      },
      {
        src: "write2.svg",
        alt: "icon",
        className: "absolute w-10 top-5 z-11 right-0",
        animation: "fade",
        duration: 5,
      },
    ],
    buttons: [
      {
        label: "Download My CV 📎",
        href: "maryam_elsheikh_content_writer_Cv.pdf",
        download: true,
        style:
          "px-4 py-5 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out",
      },
      {
        label: "Explore my Work",
        href: "#work",
        style:
          "px-4 py-5 bg-white font-semibold rounded-lg shadow-md hover:bg-orange-200 transition-all duration-300 ease-in-out",
      },
    ],
  },
];
