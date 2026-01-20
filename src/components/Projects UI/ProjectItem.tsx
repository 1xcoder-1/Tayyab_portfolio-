import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectItemProps {
    title: string;
    images: string[];
    tags: string[];
}

const ProjectItem = ({ title, images, tags }: ProjectItemProps) => {
    const imageVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const
            }
        })
    };

    return (
        <div className="relative w-full py-4 group overflow-hidden">

            {/* Background Stripes - Split Design - NO ANIMATION */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* 1. Upper Half (Darkest) */}
                <div
                    className={`absolute left-0 right-0 h-[110px] top-1/2 -translate-y-full bg-[#A855F7] origin-left transform -skew-y-6 transition-transform duration-500`}
                />

                {/* 2. Lower Half (Medium) */}
                <div
                    className={`absolute left-0 right-0 h-[110px] top-1/2 bg-[#A855F7] opacity-60 origin-left transform -skew-y-6 transition-transform duration-500`}
                />

                {/* 3. Bottom Stripe (Lightest) */}
                <div
                    className={`absolute left-0 right-0 h-[30px] top-[calc(45%+148px)] bg-[#A855F7] opacity-10 origin-left transform -skew-y-6 transition-transform duration-500`}
                />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
                <div className="relative w-full h-[500px] flex items-center justify-center">

                    {/* TITLE - Rotated heavily in background */}
                    <div className="absolute top-[3.3%] left-1/2 -translate-x-1/2 w-full text-center z-10 pointer-events-none mix-blend-multiply">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.1,
                                    }
                                }
                            }}
                            className="text-[5rem] md:text-[4.38rem] font-black text-[#1e1e1e] tracking-evenly [word-spacing:20px] transform -rotate-6 whitespace-nowrap opacity-90"
                            style={{ textShadow: '0px 10px 40px rgba(0,0,0,0.1)' }}>
                            {title.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
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
                                    }}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h3>
                    </div>

                    {/* IMAGES Cluster */}
                    <div className="relative w-full max-w-[1000px] h-[400px] z-20 mt-12 mx-auto">

                        {/* 3. Back Image (Right-Top) - Third Image */}
                        <motion.div
                            custom={2}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="absolute right-[10%] top-[4%] w-[30%] aspect-[16/10] bg-white rounded-none shadow-xl transform -rotate-[6deg] z-10 overflow-hidden transition-all duration-300"
                        >
                            <img src={images[2]} alt="Project view 3" className="w-full h-full object-cover opacity-80" />
                        </motion.div>

                        {/* 2. Middle Image (Center) - Second Image */}
                        <motion.div
                            custom={1}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="absolute left-[39%] top-[17%] w-[30%] aspect-[16/10] bg-white rounded-none shadow-xl transform -rotate-[6deg] z-20 overflow-hidden transition-all duration-300"
                        >
                            <img src={images[1]} alt="Project view 2" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* 1. Front Image (Left-Bottom) - First Image */}
                        <motion.div
                            custom={0}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="absolute left-[18%] top-[28%] w-[30%] aspect-[16/10] bg-gray-900 rounded-none shadow-xl transform -rotate-[6deg] z-30 overflow-hidden transition-all duration-300"
                        >
                            <img src={images[0]} alt="Project view 1" className="w-full h-full object-cover" />
                        </motion.div>

                    </div>

                    {/* Details - Bottom Right Floating */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="absolute bottom-22 right-0 md:right-45 z-40 transform -rotate-6"
                    >
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2 mb-1">
                                {tags.map((tag, i) => (
                                    <span key={i} className="text-[#2dd4bf] text-lg md:text-xl font-mono tracking-tight shadow-sm">
                                        {tag} {i < tags.length - 1 && <span className="text-[#2dd4bf]/40">•</span>}
                                    </span>
                                ))}
                            </div>

                            <button className="group/btn flex items-center gap-2 text-[20px]  text-black ">
                                View Details
                                <ArrowRight className="w-8 h-8 transition-transform group-hover/btn:translate-x-2" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
