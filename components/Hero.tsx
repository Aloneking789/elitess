// import { FaLocationArrow } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import { Boxes } from "./ui/background-boxes";
// import { cn } from "@/lib/utils";

// const Logo = () => (
//   <div className="fixed top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 z-50 transition-all duration-300 hover:scale-105">
//     <div className="flex items-center gap-2">
//       <div className="relative">
//         <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-md sm:blur-lg" />
//         <div className="relative bg-white/10 rounded-full p-0.5 sm:p-1 backdrop-blur-sm ring-1 ring-white/20 shadow-lg">
//           <img
//             src="/elite.png"
//             alt="logo"
//             className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain filter brightness-110 contrast-125"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const FloatingIcons = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0"
//       >
//         {/* Tech icons floating in the background */}
//         {["💻", "📱", "⚛️", "🔷", "🌐", "🚀", "🎮", "🤖"].map((icon, index) => (
//           <motion.div
//             key={index}
//             className="absolute text-2xl md:text-3xl opacity-30"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               rotate: [0, 10, -10, 0],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           >
//             {icon}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36 relative overflow-hidden">
//       <Logo />

//       {/* 3D Background Effect */}
//       <div className="absolute inset-0 w-full h-full dark:bg-grid-white/[0.05] bg-grid-black/[0.1]">
//         <Boxes />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
//       </div>

//       {/* Spotlights */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <FloatingIcons />

//       {/* Main Content */}
//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4">
//               Elite Software Solutions
//             </p>
//           </motion.div>

//           <TextGenerateEffect
//             words="Transforming Ideas into Digital Reality"
//             className="text-center text-[40px] md:text-5xl lg:text-6xl mb-6"
//           />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-center space-y-4 mb-8"
//           >
//             <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl text-gray-300">
//               Your Gateway to Advanced Digital Solutions
//             </p>
//             <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-400">
//               <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
//                 Web Development
//               </span>
//               <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
//                 Mobile Apps
//               </span>
//               <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
//                 Blockchain
//               </span>
//               <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
//                 Metaverse
//               </span>
//               <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
//                 AI Solutions
//               </span>
//             </div>
//           </motion.div>

//           <div className="flex gap-4">
//             <a href="#services">
//               <MagicButton
//                 title="Explore Services"
//                 icon={<FaLocationArrow />}
//                 position="right"
//               />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Tech Stack Carousel */}
//       <motion.div
//         className="absolute bottom-10 left-0 right-0"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <div className="flex justify-center gap-8 px-4 py-6 backdrop-blur-sm bg-white/5 rounded-xl mx-4 overflow-hidden">
//           {[
//             "React",
//             "Next.js",
//             "Blockchain",
//             "Web3",
//             "Mobile Apps",
//             "Cloud Solutions",
//             "AI/ML",
//             "Smart Contracts",
//           ].map((tech, index) => (
//             <motion.span
//               key={index}
//               className="text-sm md:text-base text-gray-300 whitespace-nowrap"
//               animate={{
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 delay: index * 0.2,
//               }}
//             >
//               {tech}
//             </motion.span>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;



import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Boxes } from "./ui/background-boxes";
import { BsCodeSlash, BsDatabase } from "react-icons/bs";
import { FaEthereum, FaReact } from "react-icons/fa";
import { SiBlockchaindotcom, SiWeb3Dotjs } from "react-icons/si";
import { TbBrandMeta } from "react-icons/tb";


const Logo = () => (
  <div className="fixed top-2 sm:top-4 md:top-6 left-2 sm:left-4 md:left-6 z-50 transition-all duration-300 hover:scale-105">
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-md sm:blur-lg" />
        <div className="relative bg-white/10 rounded-full p-0.5 sm:p-1 backdrop-blur-sm ring-1 ring-white/20 shadow-lg">
          <img
            src="/elite.png"
            alt="logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain filter brightness-110 contrast-125"
          />
        </div>
      </div>
    </div>
  </div>
);

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Tech icons floating in the background */}
        {["💻", "📱", "⚛️", "🔷", "🌐", "🚀", "🎮", "🤖"].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl md:text-3xl opacity-30"
            initial={{
              // x: Math.random() * window.innerWidth,
              // y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const VectorElements = () => {
  const icons = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaEthereum, color: "#627EEA" },
    { Icon: SiBlockchaindotcom, color: "#F16822" },
    { Icon: SiWeb3Dotjs, color: "#F16822" },
    { Icon: TbBrandMeta, color: "#FF6B6B" },
    { Icon: BsCodeSlash, color: "#4CAF50" },
    { Icon: BsDatabase, color: "#FFC107" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute w-full h-full">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Tech icons */}
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            // x: Math.random() * window.innerWidth,
            // y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.8,
          }}
        >
          <Icon
            className="text-3xl md:text-4xl lg:text-5xl opacity-30"
            style={{ color }}
          />
        </motion.div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0,50 Q400,300 800,50"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          className="opacity-20"
          animate={{
            d: [
              "M0,50 Q400,300 800,50",
              "M0,100 Q400,50 800,100",
              "M0,50 Q400,300 800,50",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative overflow-hidden min-h-screen">
      <Logo />

      {/* Background Effects */}
      <div className="absolute inset-0 w-screen h-full dark:bg-grid-white/[0.05] bg-grid-black/[0.1]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 w-full" />
        <Boxes />
      </div>

      {/* Vector Elements */}
      <VectorElements />

      {/* Multiple Gradient Overlays */}
      <div className="absolute inset-0 w-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 w-screen" />
      </div>

      {/* Rest of the content remains the same... */}
      {/* ... */}

      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <FloatingIcons />

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10 w-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-widest text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg mb-4 ">
              <span className="text-pink-500">Elite</span> Software Solutions
            </p>
          </motion.div>

          <TextGenerateEffect
            words="Transforming Ideas into Digital Reality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-6"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-4 mb-8"
          >
            <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-xl text-gray-300">
              Your Gateway to Advanced Digital Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-400">
              <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
                Web Development
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
                Mobile Apps
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
                Blockchain
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
                Metaverse
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
                AI Solutions
              </span>
            </div>
          </motion.div>

          <div className="flex gap-4">
            <a href="#services">
              <MagicButton
                title="Explore Services"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Carousel */}
      <motion.div
        className="absolute bottom-10 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-center gap-8 px-4 py-6 backdrop-blur-sm bg-white/5 rounded-xl mx-4 overflow-hidden">
          {[
            "React",
            "Next.js",
            "Blockchain",
            "Web3",
            "Mobile Apps",
            "Cloud Solutions",
            "AI/ML",
            "Smart Contracts",
          ].map((tech, index) => (
            <motion.span
              key={index}
              className="text-sm md:text-base text-gray-300 whitespace-nowrap"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
