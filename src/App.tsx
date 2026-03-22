/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import { useMeasure } from 'react-use';
import { getSvgPath } from 'figma-squircle';
import { galleryItems, bookItems, musicItems, artworksItems } from './data';

gsap.registerPlugin(ScrollTrigger);

const SquircleMask = ({ children, cornerRadius = 32, cornerSmoothing = 1, className = "" }: any) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  
  const path = width > 0 && height > 0 
    ? getSvgPath({ width, height, cornerRadius, cornerSmoothing }) 
    : '';

  return (
    <div ref={ref} className={`relative w-full h-full ${className}`} style={{ clipPath: path ? `path('${path}')` : 'none' }}>
      {children}
    </div>
  );
};

const projectsData = [
  {
    id: 'proj-1',
    title: 'Project Alpha',
    description: 'A deep dive into system architecture and interactive design.',
    image: 'https://picsum.photos/seed/project1/1200/800',
    details: 'In this project, I explored the foundational elements of scalable system architecture. The challenge was to build a robust backend while maintaining a fluid, interactive frontend. By utilizing modern web technologies and optimizing data flow, I achieved a 40% reduction in load times and significantly improved the overall user experience. The architecture heavily relied on microservices, allowing for independent scaling and deployment of features.'
  },
  {
    id: 'proj-2',
    title: 'Project Beta',
    description: 'Exploring the boundaries of WebGL and creative development.',
    image: 'https://picsum.photos/seed/project2/1200/800',
    details: 'This project focuses on pushing the limits of browser-based rendering. I experimented with custom WebGL shaders to create immersive, 3D interactive environments. The project involved complex mathematics for lighting and physics, resulting in a highly engaging, cinematic digital experience that runs smoothly across devices. By implementing custom render pipelines, I was able to maintain 60fps even on lower-end mobile devices.'
  }
];

const caseStudiesData = [
  {
    id: 'cs-1',
    title: 'Fintech Dashboard Redesign',
    description: 'A complete overhaul of a legacy financial platform, focusing on user experience and data visualization.',
    image: 'https://picsum.photos/seed/casestudy1/1200/800',
  },
  {
    id: 'cs-2',
    title: 'E-commerce Mobile App',
    description: 'Streamlining the checkout process and improving conversion rates for a major retail brand.',
    image: 'https://picsum.photos/seed/casestudy2/1200/800',
  }
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Lenis for that buttery, cinematic "Apple" smooth scroll
    const lenis = new Lenis({
      lerp: 0.05, // Lower value = more friction/smoother
      wheelMultiplier: 0.8, // Slightly heavier scroll feel
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Scroll for 3x the window height
          pin: true,
          scrub: 2, // Increased scrub (from 1 to 2) for more lag/friction on the animation
        }
      });

      // Initial states for hidden text
      gsap.set(text2Ref.current, { opacity: 0, filter: "blur(24px)", scale: 0.8 });
      gsap.set(text3Ref.current, { opacity: 0, filter: "blur(24px)", scale: 0.8 });

      // Animation Sequence
      tl.to(text1Ref.current, { opacity: 0, filter: "blur(24px)", scale: 1.2, duration: 1 })
        .to(text2Ref.current, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1 }, "-=0.5")
        .to(text2Ref.current, { opacity: 0, filter: "blur(24px)", scale: 1.2, duration: 1 }, "+=1") // Stay on screen a bit
        .to(text3Ref.current, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1 }, "-=0.5");

    }, containerRef);

    return () => {
      ctx.revert(); // Cleanup GSAP
      lenis.destroy(); // Cleanup Lenis
      lenisRef.current = null;
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useEffect(() => {
    if (selectedId) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [selectedId]);

  return (
    <div 
      className="bg-black text-white selection:bg-white/30"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif' }}
    >
      {/* Pinned Sequence */}
      <div ref={containerRef} className="h-screen w-full flex items-center justify-center overflow-hidden relative">
        
        {/* Text 1 */}
        <h1 
          ref={text1Ref}
          className="absolute text-[75px] md:text-[90px] font-bold tracking-[-0.06em] text-center"
        >
          ishit
        </h1>

        {/* Text 2 */}
        <h2 
          ref={text2Ref}
          className="absolute text-4xl md:text-6xl font-medium tracking-[-0.04em] text-center max-w-4xl px-6 leading-tight text-white/90"
        >
          I build. I break.<br className="md:hidden" /> I rethink systems.
        </h2>

        {/* Text 3 */}
        <h2 
          ref={text3Ref}
          className="absolute text-5xl md:text-7xl font-bold tracking-[-0.05em] text-center"
        >
          Portfolio 2026
        </h2>

      </div>

      {/* About Section */}
      <section className="min-h-screen bg-black flex items-center justify-center px-6 md:px-12 relative z-10 py-32">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/3] md:aspect-[16/9] relative mb-4 md:mb-8"
          >
            <SquircleMask cornerRadius={32} className="w-full h-full bg-neutral-900">
              <img 
                src="https://picsum.photos/seed/creator/1200/800" 
                alt="About Me" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </SquircleMask>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-white/90"
          >
            I’m a student driven by curiosity, structure, and the need to understand how things work beneath the surface. My academic journey isn’t just about scoring well—it’s about building clarity, questioning systems, and developing a mindset that adapts.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.3] text-neutral-400"
          >
            I have a strong inclination toward technology, problem-solving, and analytical thinking. Whether it’s exploring concepts, working on projects, or experimenting independently, I focus on learning in a way that goes beyond the classroom.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.3] text-neutral-400"
          >
            Alongside academics, I actively engage in creative and technical pursuits—from building digital projects to producing music—allowing me to merge logic with expression. This balance helps me approach challenges with both precision and originality.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.3] text-neutral-400"
          >
            I believe in consistency over intensity, depth over memorization, and progress over perfection. My goal is to keep evolving—academically, technically, and personally—while building a foundation that lasts.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-white/90 mt-8"
          >
            And when the logic ends, creation begins.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-32">
            KLIKS
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 items-center justify-items-center">
            {galleryItems.map((item) => (
              <motion.div 
                layoutId={`card-${item.id}`}
                key={item.id} 
                onClick={() => setSelectedId(item.id)}
                initial={{ rotate: item.rotation }}
                animate={{ rotate: item.rotation }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className={`w-full max-w-[180px] ${item.aspect} cursor-pointer`}
              >
                <SquircleMask cornerRadius={16}>
                  <motion.img 
                    layoutId={`image-${item.id}`}
                    src={item.src} 
                    alt="" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </SquircleMask>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="min-h-screen bg-black py-32 px-6 md:px-12 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative h-[90vh] md:h-[900px] w-full">
          
          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center pointer-events-none flex items-center justify-center">
            <div className="absolute w-[150%] h-[150%] bg-black/50 blur-[40px] rounded-full -z-10"></div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-[-0.04em] text-white drop-shadow-2xl">
              Books!!!
            </h2>
          </div>
          
          {/* Scattered Cards */}
          {bookItems.map((item) => (
            <motion.div 
              layoutId={`card-${item.id}`}
              key={item.id} 
              onClick={() => setSelectedId(item.id)}
              initial={{ rotate: item.rotation }}
              animate={{ rotate: item.rotation }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
              className={`absolute cursor-pointer ${item.aspect}`}
              style={{
                top: item.pos.top,
                bottom: item.pos.bottom,
                left: item.pos.left,
                right: item.pos.right,
                width: item.pos.width,
                zIndex: item.pos.zIndex,
              }}
            >
              <SquircleMask cornerRadius={16}>
                <motion.img 
                  layoutId={`image-${item.id}`}
                  src={item.src} 
                  alt="" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </SquircleMask>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Music Section */}
      <section className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-32">
            Music!!!
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 items-start justify-items-center">
            {musicItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center w-full max-w-[180px]">
                <motion.div 
                  layoutId={`card-${item.id}`}
                  onClick={() => setSelectedId(item.id)}
                  initial={{ rotate: item.rotation }}
                  animate={{ rotate: item.rotation }}
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                  className={`w-full ${item.aspect} cursor-pointer mb-6`}
                >
                  <SquircleMask cornerRadius={16}>
                    <motion.img 
                      layoutId={`image-${item.id}`}
                      src={item.src} 
                      alt="" 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                      referrerPolicy="no-referrer" 
                    />
                  </SquircleMask>
                </motion.div>
                <div className="text-center">
                  <p className="text-white font-medium text-sm tracking-tight">{item.title}</p>
                  <p className="text-neutral-400 text-xs mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <section className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-32">
            Artworks
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 items-center justify-items-center">
            {artworksItems.map((item) => (
              <motion.div 
                layoutId={`card-${item.id}`}
                key={item.id} 
                onClick={() => setSelectedId(item.id)}
                initial={{ rotate: item.rotation }}
                animate={{ rotate: item.rotation }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className={`w-full max-w-[180px] ${item.aspect} cursor-pointer`}
              >
                <SquircleMask cornerRadius={16}>
                  <motion.img 
                    layoutId={`image-${item.id}`}
                    src={item.src} 
                    alt="" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                </SquircleMask>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-8 text-white">
            Projects
          </h2>

          {/* Projects List */}
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[4/3] md:aspect-[16/9] relative"
              >
                <SquircleMask cornerRadius={32} className="w-full h-full bg-neutral-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </SquircleMask>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div 
                  className="flex justify-between items-start cursor-pointer group"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div>
                    <h3 className="text-2xl font-medium text-white tracking-tight group-hover:text-white/80 transition-colors">{project.title}</h3>
                    <p className="text-neutral-400 mt-2 text-lg">{project.description}</p>
                  </div>
                  <motion.button
                    animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-white p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors flex-shrink-0 ml-4 mt-1"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-4 border-t border-white/10 mt-8">
                        <h4 className="text-white font-medium mb-4 text-lg">Project Details</h4>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                          {project.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}

        </div>
      </section>

      {/* Case Studies Section */}
      <section className="min-h-screen bg-black pt-32 pb-40 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.04em] text-center mb-8 text-white">
            Case Studies
          </h2>

          {/* Case Studies List */}
          {caseStudiesData.map((study) => (
            <div key={study.id} className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-[4/3] md:aspect-[16/9] relative"
              >
                <SquircleMask cornerRadius={32} className="w-full h-full bg-neutral-900">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </SquircleMask>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-2xl font-medium text-white tracking-tight">{study.title}</h3>
                <p className="text-neutral-400 mt-2 text-lg">{study.description}</p>
              </motion.div>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-[50vh] bg-black pt-32 pb-32 px-6 md:px-12 relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-start text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-medium tracking-[-0.04em] mb-16 text-white"
          >
            Let's Connect
          </motion.h2>

          <div className="flex flex-col gap-12 w-full">
            <motion.a 
              href="mailto:ishitsingh01@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-start gap-2"
            >
              <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">Email</p>
              <p className="text-2xl md:text-3xl text-neutral-300 group-hover:text-white transition-colors">ishitsingh01@gmail.com</p>
            </motion.a>

            <motion.a 
              href="https://github.com/7pky4yzn"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-start gap-2"
            >
              <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">GitHub</p>
              <p className="text-2xl md:text-3xl text-neutral-300 group-hover:text-white transition-colors">github.com/7pky4yzn</p>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-2"
            >
              <p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">Location</p>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-md leading-relaxed">
                M3X7+J85, Uttar Mohal, Robertsganj, Uttar Pradesh 231216
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedId && [...galleryItems, ...bookItems, ...musicItems, ...artworksItems].filter(i => i.id === selectedId).map(item => (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 pointer-events-none"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
              onClick={() => setSelectedId(null)}
            />

            <div className="w-full max-w-md flex flex-col gap-4 z-10 pointer-events-auto">
              <motion.div
                layoutId={`card-${item.id}`}
                className={`relative w-full ${item.aspect}`}
                onClick={(e) => e.stopPropagation()}
              >
                <SquircleMask cornerRadius={24} className="bg-neutral-900">
                  <motion.img
                    layoutId={`image-${item.id}`}
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </SquircleMask>
  
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 text-white bg-black/40 backdrop-blur-md rounded-full p-2 hover:bg-black/60 transition-colors z-10"
                  onClick={() => setSelectedId(null)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
