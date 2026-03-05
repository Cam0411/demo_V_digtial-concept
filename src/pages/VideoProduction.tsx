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
const [playingId, setPlayingId] = useState(null);
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

      <div className="relative w-full overflow-hidden py-20 group/carousel">

      {/* Cursor */}
      <motion.div
        className="fixed w-20 h-20 rounded-full border border-brand-lime/50 
        bg-brand-lime/10 backdrop-blur-md z-50 pointer-events-none
        items-center justify-center hidden group-hover/carousel:flex"
        style={{
          left: "var(--cursor-x)",
          top: "var(--cursor-y)",
          transform: "translate(-50%, -50%)"
        }}
      >
        <span className="text-brand-lime text-xs font-bold tracking-widest uppercase">
          Drag
        </span>
      </motion.div>


      {/* Carousel */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        onDrag={(e, info) => setDragX(info.point.x)}
        className="flex gap-10 px-6 md:px-16 cursor-grab active:cursor-grabbing"
      >

        {videos.map((video, idx) => (

          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="
            relative 
            w-[90vw] 
            sm:w-[70vw] 
            lg:w-[55vw] 
            xl:w-[45vw]
            flex-shrink-0
            "
          >

            {/* Frame */}
            <div className="
            relative 
            w-full 
            aspect-video
            rounded-[2rem]
            overflow-hidden
            bg-black
            shadow-2xl
            group
            ">

              {/* Video / Thumbnail */}
              <motion.div
                style={{ x: dragX * 0.03 }}
                className="absolute inset-0"
              >

                {playingId === video.id ? (

                  <iframe
                    src={`${video.url}?autoplay=1&muted=0`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                  />

                ) : (

                  <img
                    src={video.thumbnail}
                    className="
                    w-full h-full object-cover
                    grayscale-[0.7]
                    group-hover:grayscale-0
                    transition-all duration-700
                    "
                  />

                )}

              </motion.div>


              {/* Overlay gradient */}
              <div className="
              absolute inset-0 
              bg-gradient-to-t 
              from-black/70 
              via-black/20 
              to-transparent
              " />


              {/* Play button */}
              {playingId !== video.id && (

                <div className="
                absolute inset-0
                flex items-center justify-center
                ">

                  <button
                    onClick={() => setPlayingId(video.id)}
                    className="
                    w-16 h-16
                    rounded-full
                    flex items-center justify-center
                    bg-white/10
                    backdrop-blur
                    border border-white/20
                    transition
                    hover:scale-110
                    hover:bg-brand-lime
                    "
                  >

                    <Play
                      size={26}
                      className="
                      text-white
                      hover:text-black
                      ml-1
                      fill-current
                      "
                    />

                  </button>

                </div>

              )}


              {/* Info */}
              <div className="
              absolute bottom-0 left-0 right-0
              p-6 md:p-10
              ">

                <span className="
                text-brand-lime
                text-xs
                font-bold
                tracking-[0.3em]
                uppercase
                ">
                  {video.category || "Cinematography"}
                </span>


                <h4 className="
                text-white
                font-bold
                text-2xl
                md:text-4xl
                lg:text-5xl
                mt-3
                leading-tight
                group-hover:text-brand-lime
                transition-colors
                ">
                  {video.title}
                </h4>


                <div className="flex gap-8 mt-4 text-xs text-white/60">

                  <div>
                    <span className="block text-white/30 uppercase tracking-widest">
                      Production
                    </span>

                    <span className="font-semibold">
                      V-DIGITAL
                    </span>
                  </div>

                  <div>
                    <span className="block text-white/30 uppercase tracking-widest">
                      Year
                    </span>

                    <span className="font-semibold">
                      2024
                    </span>
                  </div>

                </div>

              </div>

            </div>


            {/* Index decoration */}
            <div className="
            absolute -top-6 -left-6
            text-[8rem]
            font-black
            text-white/[0.03]
            pointer-events-none
            ">
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
