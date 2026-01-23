import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, type Variants } from 'framer-motion';
import { Hexagon } from 'lucide-react';

const testimonialsData = [
    {
        id: 1,
        name: "Emily Parker",
        role: "Senior Product Manager",
        quote: (
            <>
                Boyce's <strong className="font-extrabold text-white">imagination</strong> always brings fresh ideas that push creative boundaries.
            </>
        ),
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", // Blue
        logoColor: "text-blue-100",
        className: "z-10",
        initialX: 0
    },
    {
        id: 2,
        name: "Olivia Johnson",
        role: "Front-End Developer",
        quote: (
            <>
                Quickly <strong className="font-extrabold text-white">understands</strong> complex ideas and makes collaboration easy with clear communication.
            </>
        ),
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Emerald/Green
        logoColor: "text-emerald-100",
        className: "z-20",
        initialX: 50 // Offset for stacked look
    },
    {
        id: 3,
        name: "James Carter",
        role: "Back-End Developer",
        quote: (
            <>
                Creative, <strong className="font-extrabold text-white">technically skilled</strong>, and always a step ahead—Boyce is a great problem-solver.
            </>
        ),
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)", // Purple
        logoColor: "text-purple-100",
        className: "z-30",
        initialX: 100 // Offset for stacked look
    }
];

const Testimonials = () => {

    // Animation Controls used for Heading
    const controls = useAnimation();
    const sectionRef = useRef(null); // Ref for scrolling container
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

    // Scroll Progress for Cards
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Transforms for Cards
    // Card 1: Static
    // Card 2: Enters from left with tilt and zoom out
    const card2X = useTransform(scrollYProgress, [0.15, 0.5], ["-80vw", "0%"]);
    const card2Rotate = useTransform(scrollYProgress, [0.15, 0.5], [-20, 0]);
    const card2Scale = useTransform(scrollYProgress, [0.15, 0.5], [1.1, 1]);
    const card2Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

    // Card 3: Enters from left with tilt and zoom out
    const card3X = useTransform(scrollYProgress, [0.45, 0.8], ["-80vw", "0%"]);
    const card3Rotate = useTransform(scrollYProgress, [0.45, 0.8], [-20, 0]);
    const card3Scale = useTransform(scrollYProgress, [0.45, 0.8], [1.1, 1]);
    const card3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);


    useEffect(() => {
        if (isHeadingInView) {
            controls.start("visible");
        }
    }, [isHeadingInView, controls]);

    const headingText = "Why Partners Trust Me";

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
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    };

    const firstCardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: 0.4
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative w-full z-20"
            style={{
                height: '200vh', // Reduced scroll height
                marginTop: '-13vw',
                paddingTop: '0',
                // paddingBottom: '15rem', // Handled by height
                clipPath: 'polygon(0 13vw, 100% 2%, 100% 93%, 0 100%)',
                background: 'radial-gradient(91% 104% at 6.7% 3.4%, #352842 0%, #0D0219 100%)'
            }}
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-[10vh] overflow-hidden">
                <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">

                    {/* Heading */}
                    <div ref={headingRef} className="relative mb-16 inline-block">
                        <motion.h2
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls}
                            className="text-4xl md:text-[50px] font-semibold tracking-tighter [word-spacing:5px] text-white relative z-30"
                        >
                            {headingText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h2>
                        {/* Purple Line */}
                        <div className="absolute top-[20%] left-[-2%] w-[40%] h-[6px] md:h-[7px] bg-[#A855F7] transform -rotate-8 z-40 mix-blend-normal" />
                    </div>

                    {/* Testimonial Cards Container */}
                    <div className="relative w-full h-[400px] flex items-center justify-center md:justify-start mt-8">

                        {testimonialsData.map((item, index) => {
                            // Dynamic positioning styles
                            let style = {};
                            if (index === 0) {
                                style = { x: 0, y: 0, zIndex: 10, scale: 1 }; // Back card, static position, opacity handled by variants
                            } else if (index === 1) {
                                style = { x: card2X, rotate: card2Rotate, scale: card2Scale, y: -60, opacity: card2Opacity, left: '30%', zIndex: 20 }; // Middle overlapping, tighter
                            } else if (index === 2) {
                                style = { x: card3X, rotate: card3Rotate, scale: card3Scale, y: -120, opacity: card3Opacity, left: '57%', zIndex: 30 }; // Top overlapping, tighter
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    style={style}
                                    variants={index === 0 ? firstCardVariants : undefined}
                                    initial={index === 0 ? "hidden" : undefined}
                                    animate={index === 0 ? controls : undefined}
                                    className={`absolute w-full max-w-[500px] shadow-2xl group ${item.className}`}
                                >
                                    {/* Card Content (Height Decreased, No Radius) */}
                                    <div className="h-[310px] w-full flex flex-col relative bg-[#1e293b]">

                                        {/* Colored Gradient Header */}
                                        <div className="absolute top-0 left-0 right-0 h-[75%] z-0"
                                            style={{
                                                background: item.gradient,
                                                clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 85%)'
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">

                                            {/* Top: Logo & Quote */}
                                            <div>
                                                <div className={`flex items-center gap-2 mb-6 ${item.logoColor}`}>
                                                    <Hexagon className="w-6 h-6 fill-current" />
                                                    <span className="font-bold text-lg tracking-wide">logoipsum</span>
                                                </div>

                                                <p className="text-xl md:text-1xl font-medium leading-normal">
                                                    {item.quote}
                                                </p>
                                            </div>

                                            {/* Bottom: Profile */}
                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                                                    <p className="text-sm text-white/60 font-medium">{item.role}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
