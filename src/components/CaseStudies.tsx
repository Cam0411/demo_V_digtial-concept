import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 'bds',
    category: 'TVC BẤT ĐỘNG SẢN',
    title: 'Dự án bất động sản Eco retreat',
    videoUrl: 'https://player.vimeo.com/video/1162937100?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
    stats: [
      { value: "1.2M", label: "Lượt xem" },
      { value: "450+", label: "Lead đăng ký" }
    ]
  },
  {
    id: 'honda',
    category: 'TVC Honda',
    title: 'TVC Honda CRV',
    videoUrl: 'https://player.vimeo.com/video/1162937143?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
    stats: [
      { value: "2.5M", label: "Lượt xem" },
      { value: "85%", label: "Tỷ lệ xem hết" }
    ]
  },
  {
    id: 'baotin',
    category: 'TVC FMCG',
    title: 'TVC Nutri FOOD',
    videoUrl: 'https://player.vimeo.com/video/1162939003?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
    stats: [
      { value: "500K", label: "Tương tác" },
      { value: "120%", label: "Tăng trưởng Brand" }
    ]
  },
  {
    id: 'vietjet',
    category: 'TVC HÀNG KHÔNG',
    title: 'TVC Vietjet',
    videoUrl: 'https://player.vimeo.com/video/1162938875?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
    stats: [
      { value: "3.8M", label: "Lượt xem" },
      { value: "Top 1", label: "Trending" }
    ]
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = caseStudies.length - 1;
      if (nextIndex >= caseStudies.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section id="sản-phẩm" className="py-24 relative overflow-hidden">
      {/* Background LED Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none animate-led" />
      <div className="absolute top-1/3 right-0 w-[40%] h-[40%] bg-brand-lime/5 blur-[100px] rounded-full pointer-events-none animate-aurora" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">AI Video Solutions</h2>
            <p className="text-xl text-white/50 max-w-2xl">
              Khám phá các sản phẩm truyền thông được tối ưu hóa bằng công nghệ AI đỉnh cao.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-brand-primary/50 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-brand-primary/50 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[550px] lg:h-[650px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full max-w-5xl rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl shadow-brand-primary/5"
            >
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  src={currentStudy.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={currentStudy.title}
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <div className="text-brand-lime text-sm font-bold tracking-[0.2em] uppercase mb-3">
                        {currentStudy.category}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {currentStudy.title}
                      </h3>
                    </div>
                    
                    <div className="flex gap-8">
                      {currentStudy.stats.map((stat, i) => (
                        <div key={i} className="text-left">
                          <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tighter">
                            {stat.value}
                          </div>
                          <div className="text-[10px] font-black text-brand-lime uppercase tracking-widest">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-brand-lime" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
