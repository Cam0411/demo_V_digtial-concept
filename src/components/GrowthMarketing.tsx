import { motion, AnimatePresence } from "motion/react";
import { Zap, TrendingUp, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const growthMarketingData = [
  {
    client: "IKIGAI SUSHI",
    role: "Facebook Ads Specialist",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/1.png",
    stats: [
      { value: "2 Tỷ+", label: "Doanh thu / Tháng" },
      { value: "~600", label: "Tin nhắn mới / Tháng" },
      { value: "4", label: "Chi nhánh vận hành" }
    ]
  },
  {
    client: "KING OF SUSHI VIETNAM",
    role: "Marketing Strategy & Operations",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/2.png",
    stats: [
      { value: "418 Tr", label: "Doanh thu cao nhất" },
      { value: "318%", label: "Tăng trưởng doanh thu" },
      { value: "1.5 Tháng", label: "Chuẩn hóa vận hành" }
    ]
  },
  {
    client: "JD TIM",
    role: "Make up Studio",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/3.png?updatedAt=1771995175460",
    stats: [
      { value: "115", label: "Cô dâu đặt lịch / 2 tháng" },
      { value: "100%", label: "Công suất phục vụ" },
      { value: "Top 1", label: "Search tại khu vực" }
    ]
  },
  {
    client: "MỘC THẢO CAFE",
    role: "Cafe Strategy",
    image: "https://ik.imagekit.io/39wvgoqre/VDC/4.png?updatedAt=1771995175730",
    stats: [
      { value: "93%", label: "Tăng trưởng doanh thu" },
      { value: "62 Tr", label: "Doanh thu đỉnh điểm" },
      { value: "24/7", label: "Hỗ trợ chiến lược" }
    ]
  }
];

const GrowthMarketing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = growthMarketingData.length - 1;
      if (nextIndex >= growthMarketingData.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const current = growthMarketingData[currentIndex];

  return (
    <section id="growth-marketing" className="py-32 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-lime text-xs font-black tracking-[0.3em] uppercase mb-4 block">Thành tựu tăng trưởng</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6">Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-primary">Studies.</span></h2>
          </motion.div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="w-full grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left: Stats Grid */}
              <div className="space-y-16">
                <div>
                  <div className="text-brand-lime font-black text-sm tracking-widest uppercase mb-4">{current.role}</div>
                  <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-16">{current.client}</h3>
                </div>

                <div className="flex flex-wrap gap-x-16 gap-y-12">
                  {current.stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-black text-brand-lime uppercase tracking-[0.3em]">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-[3.5rem] overflow-hidden border border-white/5 aspect-square shadow-2xl">
                  <img 
                    src={current.image} 
                    alt={current.client}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-4">
              <button 
                onClick={() => paginate(-1)}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-brand-lime/50 transition-all group"
              >
                <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => paginate(1)}
                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-brand-lime/50 transition-all group"
              >
                <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex gap-3">
              {growthMarketingData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-16 bg-brand-lime' : 'w-6 bg-white/10 hover:bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthMarketing;
