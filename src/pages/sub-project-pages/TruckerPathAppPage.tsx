import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

import Contact from '../../components/Contact';

const TruckerPathAppPage = () => {
  const projectDetails = {
    title: "Trucker Path App",
    tags: ["UI/UX Design", "B2C"],
    description: "Focus on improving the CTR of various scenario entrances and the final conversion rate of Fuel Purchase reservations.",
    image: "https://framerusercontent.com/images/uLdyzLwa0zeiSrFZlT9rVUEr4U.jpg",
    role: "Product Design, Strategy, Branding, No-Code Development",
    stack: "Framer, Figma, Rive",
    duration: "4 weeks"
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };
  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  const imageRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      filter: 'blur(20px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#121314] text-white relative overflow-hidden selection:bg-blue-500/30">
      <Navbar />

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-24 left-6 z-50 md:left-12"
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white group-hover:-translate-x-1 transition-transform duration-300"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Back to Projects</span>
        </Link>
      </motion.div>

      {/* Background Gradients/Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-[#00FF94]/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[10%] right-[0%] w-[30vw] h-[30vw] bg-[#0066FF]/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[0%] left-[0%] w-[50vw] h-[50vw] bg-[#001E4C]/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative w-full h-[77vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={projectDetails.image}
              alt={projectDetails.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121314] via-transparent to-transparent opacity-90" />
          {/* Bottom Blur Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121314] to-transparent backdrop-blur-[2px]" />
        </div>

        {/* Content Overlay - Heading */}
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-20">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-xl lg:text-[85px] font-bold tracking-wide text-white/80 mb-8 max-w-5xl leading-[0.9]"
            style={{ perspective: '1000px' }}
          >
            {projectDetails.title.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={childVariants}
                style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full bg-[#121314] -mt-10 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12">

            {/* Left Details Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="space-y-0 overflow-hidden">
                <motion.div variants={containerVariants}>
                  <h3 className="text-[20px] font-[500] text-white">
                    {"Contribution".split("").map((char, index) => (
                      <motion.span key={index} variants={childVariants} style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}>
                        {char}
                      </motion.span>
                    ))}
                  </h3>
                  <motion.p variants={childVariants} className="text-gray-400 text-[14px] leading-relaxed">{projectDetails.role}</motion.p>
                </motion.div>
              </div>

              <div className="space-y-0 overflow-hidden">
                <motion.div variants={containerVariants}>
                  <h3 className="text-[20px] font-[500] text-white">
                    {"Stack".split("").map((char, index) => (
                      <motion.span key={index} variants={childVariants} style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}>
                        {char}
                      </motion.span>
                    ))}
                  </h3>
                  <motion.p variants={childVariants} className="text-gray-400 text-[14px] leading-relaxed">{projectDetails.stack}</motion.p>
                </motion.div>
              </div>

              <div className="space-y-0 overflow-hidden">
                <motion.div variants={containerVariants}>
                  <h3 className="text-[20px] font-[500] text-white">
                    {"Duration".split("").map((char, index) => (
                      <motion.span key={index} variants={childVariants} style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}>
                        {char}
                      </motion.span>
                    ))}
                  </h3>
                  <motion.p variants={childVariants} className="text-gray-400 text-[14px] leading-relaxed">{projectDetails.duration}</motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8 lg:pl-30"
            >
              {/* Tags */}
              <motion.div variants={containerVariants} className="flex flex-wrap gap-3">
                {projectDetails.tags.map(tag => (
                  <motion.span key={tag} variants={childVariants} className="px-5 py-1.5 rounded-full bg-[#1A1D21] text-gray-300 text-sm font-medium border border-white/5 hover:bg-[#25282C] transition-colors cursor-default">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div variants={containerVariants} className="space-y-2">
                <h2 className="text-[20px] font-[500] text-white">
                  {projectDetails.title.split("").map((char, index) => (
                    <motion.span key={index} variants={childVariants} style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}>
                      {char}
                    </motion.span>
                  ))}
                </h2>
                <motion.p variants={childVariants} className="text-[16px] text-gray-400 leading-relaxed max-w-5xl">
                  {projectDetails.description}
                </motion.p>
              </motion.div>

              <motion.div className="pt-0">
                <motion.a
                  variants={childVariants}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-block p-[1.5px] overflow-hidden"
                >
                  <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#A855F7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-2 px-5 py-1.5 z-10"
                    style={{
                      background: 'linear-gradient(161deg, #6d28d9 0%, #130321 47.75%, #6d28d9 100%)'
                    }}
                  >
                    <span className="font-medium text-lg tracking-wide text-white group-hover:translate-x-1 transition-transform duration-300">Live Link</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 delay-75" />
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Design Showcase Sections */}
      {/* Design Showcase Sections */}
      <div className="relative z-10 bg-[#121314] flex flex-col items-center gap-16 pb-16">

        {/* 1. Desktop Hero Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageRevealVariants}
          className="w-full max-w-[1200px] px-6"
        >
          <img
            src="https://framerusercontent.com/images/uLdyzLwa0zeiSrFZlT9rVUEr4U.jpg"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </motion.div>

        {/* 2. Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageRevealVariants}
          className="w-full max-w-[1200px] px-6"
        >
          <img
            src="https://framerusercontent.com/images/kiBWFLyUMVZVWnwRBX3CnZcLIc.jpg"
            alt="Analytics Dashboard"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </motion.div>

        {/* 3. Blog/Safety Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageRevealVariants}
          className="w-full max-w-[1200px] px-6"
        >
          <img
            src="https://framerusercontent.com/images/KxPqw7Aibv1iFxLZGK2l2qRQLg8.png"
            alt="Logistics Warehouse"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </motion.div>

        {/* 4. Mobile App Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageRevealVariants}
          className="w-full max-w-[1200px] px-6"
        >
          <img
            src="https://framerusercontent.com/images/wCrSyA83q0VSWZNONCHcVP4JFI.png"
            alt="Navigation Map"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </motion.div>

        {/* 5. Mobile App Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageRevealVariants}
          className="w-full max-w-[1200px] px-6"
        >
          <img
            src="https://framerusercontent.com/images/neFpcfg0vYb2manXgXYmPo3fuCQ.png"
            alt="Navigation Map"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </motion.div>

      </div>

      {/* Other Works Section */}
      <div
        className="relative z-10 w-full bg-[#121314] pt-10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 82%, 0 100%)',
          paddingBottom: '12rem'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-center mb-16">
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-5 text-5xl md:text-7xl font-semibold tracking-wider"
            >
              <span className="text-[#4A4B4D] flex">
                {"Other".split("").map((char, index) => (
                  <motion.span key={index} variants={childVariants} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="text-white flex">
                {"Works".split("").map((char, index) => (
                  <motion.span key={index} variants={childVariants} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1: Soft Wind Template */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link to="/projects/soft-wind-template" className="group block">
                <div className="overflow-hidden aspect-[16/10] mb-6 relative">
                  {/* Hover Image */}
                  <img
                    src="https://framerusercontent.com/images/lZIuPWPVIwJpHKOKIFa1aIdEkM0.jpeg?scale-down-to=2048&width=3840&height=2160"
                    alt="Soft Wind Template Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Default Image */}
                  <img
                    src="https://framerusercontent.com/images/f56Ypn22t6pS8WVqfh1LgROeAdw.jpg?scale-down-to=2048&width=3840&height=2880"
                    alt="Soft Wind Template"
                    className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-[500] text-white">Trucker Path Website </h3>
                  <div className="flex gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-[#1A1D21] text-[#888888] text-sm font-medium border border-white/5 transition-all duration-300 group-hover:bg-[#25282C] group-hover:text-gray-200 group-hover:border-white/20 group-hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.15)]">
                      Web Design
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#1A1D21] text-[#888888] text-sm font-medium border border-white/5 transition-all duration-300 group-hover:bg-[#25282C] group-hover:text-gray-200 group-hover:border-white/20 group-hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.15)]">
                      Landing Page
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 2: Trucker Path App */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Link to="/projects/trucker-path-app" className="group block">
                <div className="overflow-hidden aspect-[16/10] mb-6 relative">
                  {/* Hover Image */}
                  <img
                    src="https://framerusercontent.com/images/yfbXfVaII5WvZ6BUS7aYjveGyvk.jpg?scale-down-to=2048&width=2881&height=1900"
                    alt="Trucker Path App Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Default Image */}
                  <img
                    src="https://framerusercontent.com/images/kkJ5ppCn4pWHkdkfo9veY9UMhR4.jpg?scale-down-to=1024&width=2880&height=1900"
                    alt="Trucker Path App"
                    className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-[500] text-white">Soft Wind Template</h3>
                  <div className="flex gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-[#1A1D21] text-[#888888] text-sm font-medium border border-white/5 transition-all duration-300 group-hover:bg-[#25282C] group-hover:text-gray-200 group-hover:border-white/20 group-hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.15)]">
                      Framer
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#1A1D21] text-[#888888] text-sm font-medium border border-white/5 transition-all duration-300 group-hover:bg-[#25282C] group-hover:text-gray-200 group-hover:border-white/20 group-hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.15)]">
                      Template
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>

        </div>



      </div>

      <div className="-mt-32 md:-mt-48 relative z-0 bg-white pt-32">
        <Contact />
      </div>
    </div >
  );
};

export default TruckerPathAppPage;