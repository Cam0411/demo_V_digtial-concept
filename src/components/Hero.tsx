import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ChevronRight, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const scrollYValue = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(dy, [-20, 20], [10, -10]);
  const rotateY = useTransform(dx, [-20, 20], [-10, 10]);

  const text = "Tạo ra tăng trưởng thật sự bằng AI.";
  const words = text.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/15 blur-[120px] rounded-full animate-aurora" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-lime/15 blur-[150px] rounded-full animate-aurora delay-700" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-brand-dark/5 blur-[100px] rounded-full animate-aurora delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center perspective-1000">
        <motion.div
          style={{ 
            y: scrollYValue, 
            opacity, 
            scale, 
            x: dx, 
            translateY: dy,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-lime text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
            AI Marketing Evolution
          </span>
          
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-10 perspective-1000">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="inline-block mr-[0.2em] last:mr-0"
              >
                {word === "tăng" || word === "trưởng" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-primary to-brand-dark animate-pulse">
                    {word}
                  </span>
                ) : word === "AI." ? (
                  <span className="relative inline-block group cursor-default">
                    <span className="relative z-10 text-brand-lime group-hover:text-white transition-colors duration-300">{word}</span>
                    <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-70 animate-glitch pointer-events-none">{word}</span>
                    <span className="absolute inset-0 text-brand-primary opacity-0 group-hover:opacity-70 animate-glitch pointer-events-none [animation-delay:0.1s]">{word}</span>
                    <span className="absolute inset-0 bg-brand-primary/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Chúng tôi xây dựng hệ sinh thái Digital Marketing kết hợp AI để giúp doanh nghiệp sản xuất nhanh hơn, tối ưu tốt hơn và chuyển đổi hiệu quả hơn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-brand-lime transition-all transform hover:scale-105 shadow-2xl shadow-white/10">
              Gửi video gốc để tối ưu bằng AI
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
              Nhận mẫu Video AI cho ngành của bạn
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-12 hidden lg:block"
      >
        <div className="p-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center">
              <TrendingUp className="text-brand-lime w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-base">+142% Growth</div>
              <div className="text-white/40 text-xs font-medium tracking-wide">AI Optimized Campaign</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
