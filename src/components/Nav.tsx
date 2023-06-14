import React, { ReactNode } from "react";
import SectionLink from "./SectionLink";
import sections from "../data/sections";

import { motion, Variants } from "framer-motion";
// import socials from "../../data/socials";

const navVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.8,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const navChildVariants: Variants = {
  hidden: {
    y: -35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      // ease: "easeOut",
      // duration: 0.8,
      type: "spring",
      stiffness: 100,
    },
  },
};
const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="h-24 w-full z-30 absolute"
    >
      <div className="relative flex items-center justify-end h-full max-w-7xl mx-auto ">
        {/* <a
          href="/"
          className="group text-2xl lg:text-2xl font-black select-none cursor-pointer h-full flex items-center pr-5 text-blue-500 tracking-tight"
        >
          <motion.span variants={navChildVariants} className="relative block">
            <span className="block absolute text-[#1532ff]">CATT</span>
            <span className="block relative group-hover:-translate-y-[0.20rem] will-change-transform transition">
              CATT
            </span>
          </motion.span>
        </a> */}
        <div className="flex space-x-10 px-20">
          <div className="text-sm text-white-600 hidden lg:flex space-x-10 items-center">
            <>
              {sections.map((section, i) => (
                <motion.span
                  variants={navChildVariants}
                  key={i}
                  className="block"
                >
                  <SectionLink href={section.href}>{section.name}</SectionLink>
                </motion.span>
              ))}
            </>
          </div>
          {/* <div className="text-2xl lg:text-xl text-gray-600 flex space-x-5 items-center">
            {socials.map((social, i) => (
              <motion.span
                variants={navChildVariants}
                key={i}
                className="block"
              >
                <SocialLink href={social.url}>{<social.Icon />}</SocialLink>
              </motion.span>
            ))}
          </div> */}
        </div>
      </div>
    </motion.nav>
  );
};

// interface SocialLinkProps {
//   children: ReactNode;
//   href: string;
// }
// const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
//   return (
//     <a
//       href={href}
//       className="relative select-none group cursor-pointer h-10 w-10 flex items-center justify-center hover:text-white transition ease-out"
//     >
//       <span className="absolute w-0 h-0 group-hover:h-10 group-hover:w-10 bg-blue-500 rounded-full transition-all ease-in-out"></span>
//       <span className="relative">{children}</span>
//     </a>
//   );
// };

export default Nav;