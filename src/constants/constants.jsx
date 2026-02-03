// Skills icons
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

// Tools icons
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io5";
import { SiXampp } from "react-icons/si";
import { SiMamp } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiWarp } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { SiBruno } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGit } from "react-icons/si";

// Database icons
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// Cloud icons
import { SiRailway } from "react-icons/si";
import { SiVercel } from "react-icons/si";

// Social media icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { th } from "motion/react-client";

export const NAVIGATION_LINKS = [
  { label: "ประวัติ", href: "#about" },
  { label: "ผลงาน", href: "#projects" },
  { label: "การศึกษา", href: "#education" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ติดต่อ", href: "#contact" },
];

export const HERO = {
  name: "PACHARA",
  greet: "FRONT-END DEVELOPER",
  greet2: "BACK-END DEVELOPER",
  greet3: "FULL-STACK DEVELOPER",
  greet4: "LEAD FRONT-END DEVELOPER",
};

export const ABOUT = [
  "ผมเป็นนักศึกษาระดับปริญญาตรี จากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ โดยเฉพาะในสายงาน Front-End Developer พร้อมให้ความสำคัญกับการสร้างสรรค์ผลงานที่สวยงามและตอบโจทย์ผู้ใช้งานอยู่เสมอ",
  "ด้วยความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผมตั้งเป้าหมายในการเติบโตสู่การเป็น Lead Front-End Developer โดยเน้นการออกแบบซอฟต์แวร์ที่มีคุณภาพ และประสบการณ์ผู้ใช้ที่ดีเยี่ยมควบคู่กันไป",
];

export const PROJECTS = [
  {
    id: 1,
    title: "ระบบจัดการสต๊อกสินค้า",
    description:
      "ระบบจัดการสต๊อกสินค้าแบบครบวงจร รองรับการค้นหาและสแกนบาร์โค้ดแบบเรียลไทม์แสดงข้อมูลสินค้า คงเหลือ และประวัติการขายอย่างเป็นระบบออกแบบมาเพื่อเพิ่มความรวดเร็วและลดความผิดพลาดในการจัดการสินค้า",
    image: "/image.Projects/Project1.png",
    techStack: ["React", "TailwindCSS", "Golang", "MySQL", "JWT"],
  },
  {
    id: 2,
    title: "ระบบแดชบอร์ดผู้ดูแลระบบ",
    description:
      "แดชบอร์ดสำหรับผู้ดูแลระบบ ใช้แสดงข้อมูลภาพรวมและสถิติสำคัญแบบเรียลไทม์รองรับการกำหนดสิทธิ์ผู้ใช้งานและการยืนยันตัวตนอย่างปลอดภัยออกแบบ UI ให้ใช้งานง่าย รองรับการแสดงผลทุกอุปกรณ์",
    image: "/image.Projects/Project2.png",
    techStack: ["React", "MUI", "Golang", "REST API"],
  },
  {
    id: 3,
    title: "แพลตฟอร์มการเรียนรู้ออนไลน์",
    description:
      "แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับจัดการบทเรียนและเนื้อหาแบบดิจิทัลรองรับระบบแบบฝึกหัด การติดตามความก้าวหน้า และสรุปผลการเรียนมุ่งเน้นประสบการณ์ผู้ใช้ที่เรียบง่ายและโต้ตอบได้อย่างลื่นไหล",
    image: "/image.Projects/Project3.png",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
  },
];

export const GALLERY_IMAGES = [
  {
    image:
      "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/cea1/live/1de105b0-f5a5-11ef-bcea-7b70a14a5556.jpg",
    text: "",
  },
  {
    image:
      "https://media.formula1.com/image/upload/t_16by9North/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202490999.webp",
    text: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0693/9957/6767/files/SF-25-still-both-02_6c1c08a1-5474-4cab-bc14-b32cb54c4785.jpg?v=1766483997",
    text: "",
  },
  {
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_2048/q_auto/v1740000000/content/dam/fom-website/manual/2023/Launches2023/Ferrari2023Launch/Ferrari%20front.webp",
    text: "",
  },
  {
    image:
      "https://cdn-8.motorsport.com/images/amp/2jEDVkk0/s1000/scuderia-ferrari.jpg",
    text: "",
  },
  {
    image:
      "https://cdn-2.motorsport.com/images/amp/YBVoVaMY/s6/charles-leclerc-ferrari.jpg",
    text: "",
  },
  {
    image:
      "https://image.makewebcdn.com/makeweb/m_1920x0/ZeRUazFMT/contentPic/2023_Ferrari_SF_23_Bangkoksupercar_8.jpg",
    text: "",
  },
  {
    image:
      "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/ferrari-pit-stop_ver_1.png",
    text: "",
  },
  {
    image:
      "https://www.formulaonehistory.com/wp-content/uploads/2025/05/Charles-Leclerc-Ferrari-2025-Monaco-GP-FP1.webp",
    text: "",
  },
  {
    image:
      "https://www.techzine.eu/wp-content/uploads/2024/04/shutterstock_2428935571.jpg",
    text: "",
  },
  {
    image:
      "https://cdn.motorsport.com/images/mgl/YP7rOyX2/s1000/lewis-hamilton-ferrari-sf25.jpg",
    text: "",
  },
  {
    image:
      "https://a.espncdn.com/combiner/i?img=/photo/2026/0127/r1606450_1296x729_16-9.jpg",
    text: "",
  },
];

export const IMAGE_SHOWCASE = {
  title: "ผลงานการออกแบบกราฟิก",
};

export const VIDEO_SHOWCASE = {
  title: "ผลงานวิดีโอโปรโมชัน",
  items: [
    {
      thumbnail: "/image.videos/video1.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำแบรนด์ (Brand Introduction)",
      description:
        "วิดีโอแนะนำภาพรวมของแบรนด์ สร้างการรับรู้และภาพลักษณ์ที่น่าเชื่อถือในเวลาอันสั้น",
    },
    {
      thumbnail: "/image.videos/video2.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอโปรโมชันบริการ",
      description:
        "นำเสนอจุดเด่นและประโยชน์ของบริการ เพื่อกระตุ้นความสนใจและการตัดสินใจของลูกค้า",
    },
    {
      thumbnail: "/image.videos/video3.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอรีวิวจากลูกค้า (Customer Review)",
      description:
        "รีวิวประสบการณ์จริงจากลูกค้า เพื่อเสริมความน่าเชื่อถือและสร้างความมั่นใจ",
    },
    {
      thumbnail: "/image.videos/video4.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำสินค้า",
      description:
        "แสดงรายละเอียดสินค้า ฟังก์ชันการใช้งาน และจุดเด่นที่แตกต่างจากคู่แข่ง",
    },
    {
      thumbnail: "/image.videos/video5.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอคอนเทนต์สำหรับโซเชียลมีเดีย",
      description:
        "วิดีโอสั้น กระชับ เหมาะสำหรับ Facebook, Instagram และ TikTok",
    },
    {
      thumbnail: "/image.videos/video6.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอเบื้องหลังการทำงาน (Behind the Scenes)",
      description:
        "ถ่ายทอดบรรยากาศการทำงานจริง เพื่อสร้างความเป็นกันเองและความน่าเชื่อถือ",
    },
  ],
};

export const EDUCATION = [
  {
    degree: "มัธยมศึกษาตอนปลาย สายทั่วไป",
    institution: "[ THAMMACHOTESUKSALAI SCHOOL ]",
    duration: "May 2558 - May 2561",
    description:
      "เรียนสายทั่วไป โดยมีความสนใจด้านการออกแบบกราฟิกและเริ่มต้นฝึกฝนพื้นฐานด้านการออกแบบตั้งแต่ช่วงมัธยม",
  },
  {
    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง สาขาคอมพิวเตอร์กราฟิก",
    institution: "[ Saraburi Vocational College ]",
    duration: "May 2561 - May 2563",
    description:
      "ศึกษาเกี่ยวกับการออกแบบกราฟิกด้วยโปรแกรมคอมพิวเตอร์ ฝึกปฏิบัติจริงทั้งด้านการออกแบบสื่อสิ่งพิมพ์ ดิจิทัลอาร์ต และพื้นฐานการใช้เครื่องมือกราฟิกอย่างมืออาชีพ เพื่อเตรียมความพร้อมสู่สายงานสร้างสรรค์",
  },
  {
    degree: "ปริญญาตรี สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    institution:
      "[ Rajamangala University of Technology Suvarnabhumi, Suphanburi Campus ]",
    duration: "July 2567 - Present",
    description:
      "ศึกษาเกี่ยวกับการพัฒนาเทคโนโลยีสารสนเทศ โดยเน้นด้านการออกแบบและพัฒนาระบบฐานข้อมูล แอปพลิเคชันบนอุปกรณ์พกพา และเว็บแอปพลิเคชัน ได้ฝึกปฏิบัติงานจริงในด้าน Full-stack Development ตั้งแต่การวางโครงสร้างฐานข้อมูล ไปจนถึงการเขียนโปรแกรมและออกแบบส่วนติดต่อผู้ใช้",
  },
];

export const SKILLS = [
  {
    skill1: (
      <SiReact className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#61DAFB]" />
    ),
    name: "React",
    experience: "",
  },
  // {
  //   skill2: (
  //     <SiNextdotjs className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
  //   ),
  //   name: "Next.js",
  //   experience: "",
  // },
  {
    skill3: (
      <SiVite className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#646CFF]" />
    ),
    name: "Vite",
    experience: "",
  },
  {
    skill4: (
      <SiPhp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#8892BF]" />
    ),
    name: "PHP",
    experience: "",
  },
  {
    skill5: (
      <RiTailwindCssFill className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#38BDF8]" />
    ),
    name: "Tailwind CSS",
    experience: "",
  },
  {
    skill6: (
      <FaHtml5 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E34F26]" />
    ),
    name: "HTML",
    experience: "",
  },
  {
    skill7: (
      <FaCss3Alt className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#264DE4]" />
    ),
    name: "CSS",
    experience: "",
  },
  {
    skill8: (
      <SiJavascript className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7DF1E]" />
    ),
    name: "JavaScript",
    experience: "",
  },
  // {
  //   skill9: (
  //     <SiTypescript className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3178C6]" />
  //   ),
  //   name: "Typescript",
  //   experience: "",
  // },
  {
    skill10: (
      <FaGolang className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#00ADD8]" />
    ),
    name: "GoLang",
    experience: "",
  },
  {
    skill11: (
      <SiMui className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007FFF]" />
    ),
    name: "MUI",
    experience: "",
  },
];

export const TOOLS = [
  {
    tool1: (
      <VscVscodeInsiders className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007ACC]" />
    ),
    name: "Visual Studio Code",
    experience: "",
  },
  {
    tool2: (
      <IoLogoGithub className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#586069]" />
    ),
    name: "GitHub",
    experience: "",
  },
  {
    tool3: (
      <SiXampp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF7A00]" />
    ),
    name: "XAMPP",
    experience: "",
  },
  {
    tool4: (
      <SiMamp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#7D7D7D]" />
    ),
    name: "MAMP",
    experience: "",
  },
  {
    tool5: (
      <SiAdobeillustrator className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF9A00]" />
    ),
    name: "Adobe Illustrator",
    experience: "",
  },
  {
    tool6: (
      <SiAdobephotoshop className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#31A8FF]" />
    ),
    name: "Adobe Photoshop",
    experience: "",
  },
  {
    tool7: (
      <SiWarp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Warp",
    experience: "",
  },
  {
    tool8: (
      <SiOpenai className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "OpenAI",
    experience: "",
  },
  {
    tool9: (
      <SiGithubcopilot className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4CB0FB]" />
    ),
    name: "GitHub Copilot",
    experience: "",
  },
  // {
  //   tool10: (
  //     <SiBruno className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2E3A59]" />
  //   ),
  //   name: "SiBruno",
  //   experience: "",
  // },
  {
    tool11: (
      <SiPostman className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF6C37]" />
    ),
    name: "Postman",
    experience: "",
  },
  {
    tool12: (
      <SiCanva className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#01C3CC]" />
    ),
    name: "Canva",
    experience: "",
  },
  // {
  //   tool13: (
  //     <SiDocker className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2496ED]" />
  //   ),
  //   name: "Docker",
  //   experience: "",
  // },
  {
    tool14: (
      <SiGit className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F1502F]" />
    ),
    name: "Git",
    experience: "",
  },
];

export const DATABASES = [
  {
    database1: (
      <SiMysql className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#4479A1]" />
    ),
    name: "MySQL",
    experience: "",
  },
  // {
  //   database2: (
  //     <SiMongodb className="text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4DB33D]" />
  //   ),
  //   name: "MongoDB",
  //   experience: "",
  // },
  // {
  //   database3: (
  //     <BiLogoPostgresql className="text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#336791]" />
  //   ),
  //   name: "PostgreSQL",
  //   experience: "",
  // },
];

export const CLOUDS = [
  {
    cloud1: (
      <SiVercel className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Vercel",
    experience: "",
  },
  {
    cloud2: (
      <SiRailway className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Railway",
    experience: "",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/pacharaaaaaaa",
    icon: <FaFacebook fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/axm.pcr/",
    icon: <FaInstagram fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Pachared42",
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
];