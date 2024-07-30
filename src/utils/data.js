import { HiOutlineDesktopComputer, HiAcademicCap, HiHeart } from "react-icons/hi";
export const projectExperience = [
  {
    name: "Website Designs",
    projects: "Made coding projects dedicated to serving the benefits of the community.",
    icon: HiOutlineDesktopComputer,
    bg: "#9CAFAA",
  },
  {
    name: "College",
    projects: "University of Washington, Seattle",
    icon: HiAcademicCap,
    bg: "#5F0F40",
  },
  {
    name: "Hobbies",
    projects: "Outside of the computer, I love to hike, snowboard, and spending time with family and friends, especially when finding the best boba spots.",
    icon: HiHeart,
    bg: "#EFBC9B",
  },

];

export const WhatDoIHelp = [
  "I am a new graduate based in Seattle, Washington. As a first-generation with a degree in Computer Science and minoring in Business at the University of Washington Seattle. A collaborative and a detail-oriented individual, who is searching for internships and research labs related to these skills.",
  " I am passionate about improving the lives of others through software development and data analytics. I'm constantly learning new things everyday and love meeting people who are motivated and unafraid of sharing their ideas with the world.",
  " ",
];

export const furtherInfo = [
  " I have learnt a lot of the processes, concepts and theories of software development and engineering through academics, attending workshops, reading blogs and applying these to projects in my spare time and at work. I am very much a big-picture thinker and enjoy working on products end to end, from ideation all the way to development."
];

export const workExp = [
  {
    place: "Springer Capital",
    location: "Chicago, Illinois",
    tenure: "Jan 2024 - Apr 2024",
    role: "Software Engineer, Intern",
    detail: "",
  },
  {
    place: "Husky Coding Project",
    location: "Seattle, Washington",
    tenure: "Jan 2023 - Present",
    role: "Full-stack Developer",
    detail: "Developed an application called 'Snoozer', supporting high school and college students with different ways to wake up with motivation. Implementing additional features to reduce bugs within the full-stack development using Agile methodologies. Collaborating with a group of 5 to prototype a backend system to enhance human-computer interaction. Leveraging efficiency of the code by adding features using the Flask framework.",

  },
  {
    place: "Geeking Out Kids of Color",
    location: "Seattle, Washington",
    tenure: "Mar 2022 - Aug 2022",
    role: "Software Engineer, Intern",
    detail: "Developed a sound understanding of relevant technologies to help create software applications, ultimately to serve underrepresented communities. Cooperated with other developers to ensure the effective implementation of the technical designs into the resulting software produced. Performed entry-level analysis, problem-solving, implementation, and documentation. Provided technical support to users.",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};