import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";

const featuredVideos = [
  {
    id: 1,
    title: "Traditional Essence",
    url: "https://www.youtube.com/embed/jOOs4f5RFf4?autoplay=1&mute=1&controls=0&loop=1&playlist=jOOs4f5RFf4",
    category: "AI CINEMATOGRAPHY"
  },
  {
    id: 2,
    title: "Modern Innovation",
    url: "https://player.vimeo.com/video/1162937143?autoplay=1&muted=1&background=1",
    category: "Digital Production"
  }
];

const videoCategories = [
  {
    name: "Video AI Evolution",
    videos: [
      { id: 101, title: "AI Avatar Brand Rep", url: "https://player.vimeo.com/video/1162938875" },
      { id: 102, title: "AI Voiceover Demo", url: "https://player.vimeo.com/video/1162939003" },
      { id: 103, title: "AI Background Swap", url: "https://player.vimeo.com/video/1162937100" },
      { id: 104, title: "AI Content Batch", url: "https://player.vimeo.com/video/1162937143" },
    ]
  },
  {
    name: "Video Truyền Thống",
    videos: [
      { id: 201, title: "TVC Nutri Food", url: "https://player.vimeo.com/video/1162939003" },
      { id: 202, title: "Vietjet Air Promo", url: "https://player.vimeo.com/video/1162938875" },
      { id: 203, title: "Corporate Story", url: "https://player.vimeo.com/video/1162937100" },
      { id: 204, title: "Product Showcase", url: "https://player.vimeo.com/video/1162937143" },
    ]
  }
];

interface VideoCarouselProps {
  title: string;
  videos: any[];
  key?: any;
}

const VideoCarousel = ({ title, videos }: VideoCarouselProps) => {
  const [dragX, setDragX] = useState(0);

  return (
    <div className="mb-56 relative">
      {/* Artistic Background Text */}
      <div className="absolute -top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter">
          {title} {title}
        </h2>
      </div>

      <div className="px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-brand-lime" />
              <span className="text-brand-lime text-xs font-black tracking-[0.5em] uppercase">Artistic Direction</span>
            </div>
            <h3 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-8">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-brand-lime italic serif block md:inline" : "block md:inline"}>
                  {word}{' '}
                </span>
              ))}
            </h3>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-lime/30" />
              ))}
            </div>
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em] vertical-text md:writing-mode-vertical-rl">
              Scroll to explore
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="relative cursor-none group/carousel">
        {/* Custom Cursor Hint */}
        <motion.div 
          className="fixed w-24 h-24 rounded-full border border-brand-lime/50 bg-brand-lime/5 backdrop-blur-sm z-[100] pointer-events-none items-center justify-center hidden group-hover/carousel:flex"
          style={{ 
            left: "var(--cursor-x)", 
            top: "var(--cursor-y)",
            transform: "translate(-50%, -50%)"
          }}
          onMouseMove={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.setProperty('--cursor-x', `${e.clientX}px`);
            target.style.setProperty('--cursor-y', `${e.clientY}px`);
          }}
        >
          <span className="text-brand-lime text-[10px] font-black uppercase tracking-widest">Drag</span>
        </motion.div>

        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -((videos.length * 0.7 * window.innerWidth) - window.innerWidth + 100) }}
          onDrag={(e, info) => setDragX(info.point.x)}
          className="flex gap-16 px-6"
          style={{ width: "max-content" }}
        >
          {videos.map((video, idx) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="relative w-[80vw] md:w-[60vw] group"
            >
              {/* Artistic Frame */}
              <div className="relative aspect-video rounded-[4rem] overflow-hidden bg-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] transition-all duration-1000 group-hover:shadow-brand-lime/20">
                
                {/* Parallax Video Container */}
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  style={{ x: dragX * 0.05 }}
                >
                  <iframe
                    src={`${video.url}?autoplay=0&muted=1&background=1`}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    allow="autoplay; fullscreen"
                  />
                </motion.div>

                {/* Film Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grain" />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/40 group-hover:opacity-30 transition-opacity duration-1000" />
                <div className="absolute inset-0 border-[20px] border-black/10 pointer-events-none" />

                {/* Play Button - Minimalist & Artistic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-8 border border-brand-lime/20 rounded-full"
                    />
                    <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center group-hover:bg-brand-lime group-hover:border-brand-lime transition-all duration-700 group-hover:scale-125">
                      <Play className="text-white group-hover:text-black fill-current ml-1.5 transition-colors" size={28} />
                    </div>
                  </div>
                </div>

                {/* Editorial Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
                  <div className="overflow-hidden mb-6">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-brand-lime text-xs font-black uppercase tracking-[0.4em]">
                        {video.category || "Cinematography"}
                      </span>
                      <div className="h-px w-24 bg-brand-lime/30" />
                    </motion.div>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.h4 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6 group-hover:text-brand-lime transition-colors duration-700"
                    >
                      {video.title}
                    </motion.h4>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex items-center gap-12"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Production</span>
                      <span className="text-xs text-white/60 font-bold">V-DIGITAL CONCEPT</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Year</span>
                      <span className="text-xs text-white/60 font-bold">2024</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Artistic Elements */}
              <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.02] pointer-events-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const VideoProduction = () => {
  return (
    <div className="pt-20">
      {/* Top Videos Section */}
      <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          {featuredVideos.map((video, idx) => (
            <div key={video.id} className={`relative h-full overflow-hidden ${idx === 0 ? "border-r border-white/10" : ""}`}>
              <iframe
                src={video.url}
                className="absolute inset-0 w-full h-full object-cover scale-125 grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                allow="autoplay; fullscreen"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Subtle Label for each side */}
              <div className={`absolute bottom-12 ${idx === 0 ? "left-12" : "right-12 text-right"} z-10 hidden md:block`}>
                <span className="text-white/30 text-[10px] font-black tracking-[0.5em] uppercase mb-2 block">
                  {idx === 0 ? "Heritage" : "Innovation"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Artistic Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="max-w-6xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Decorative Background Text */}
              <div className="absolute inset-0 -top-12 flex items-center justify-center opacity-[0.05] select-none">
                <span className="text-[15vw] font-black text-white whitespace-nowrap tracking-tighter">V-DIGITAL</span>
              </div>

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-brand-lime text-xs md:text-sm font-black tracking-[0.6em] uppercase mb-8 block"
              >
                AI CINEMATOGRAPHY
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] drop-shadow-2xl"
              >
                Nghệ Thuật Thị Giác: <br />
                <span className="text-brand-lime italic serif">Sự Giao Thoa</span> Giữa Di Sản <br />
                Truyền Thống Và Đột Phá <br />
                Công Nghệ AI
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100px" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-px bg-brand-lime mx-auto mt-12"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Kỷ nguyên sản xuất <span className="text-brand-lime">Video mới.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium">
              V-digital concept không chỉ quay phim. Chúng tôi kiến tạo nội dung hình ảnh bằng sự kết hợp giữa tư duy nghệ thuật truyền thống và sức mạnh đột phá của trí tuệ nhân tạo. 
              Mỗi khung hình đều được tối ưu để mang lại hiệu quả chuyển đổi cao nhất.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousels */}
      <div className="max-w-7xl mx-auto">
        {videoCategories.map((category, idx) => (
          <VideoCarousel key={idx} title={category.name} videos={category.videos} />
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto p-16 rounded-[4rem] bg-gradient-to-br from-brand-primary/20 to-brand-lime/10 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime to-transparent" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Sẵn sàng nâng tầm hình ảnh thương hiệu?</h2>
          <button className="px-12 py-5 bg-white text-black rounded-full font-black text-lg hover:bg-brand-lime transition-all transform hover:scale-105 shadow-2xl">
            LIÊN HỆ TƯ VẤN VIDEO AI
          </button>
        </div>
      </section>
    </div>
  );
};

export default VideoProduction;
