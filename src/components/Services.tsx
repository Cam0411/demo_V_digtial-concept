import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Growth Marketing",
    highlight: "Chuyển đổi số & Tối ưu ROI",
    description: "Xây dựng hệ thống marketing dựa trên dữ liệu, ứng dụng AI để tối ưu hành trình khách hàng và gia tăng hiệu suất chuyển đổi theo thời gian thực.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    stagger: "md:mt-0"
  },
  {
    title: "Branding Agency",
    highlight: "Xây dựng thương hiệu Cá nhân & Doanh nghiệp",
    description: "Kết hợp tư duy chiến lược thương hiệu với phân tích dữ liệu và AI để tạo dựng hình ảnh khác biệt, nhất quán và mang lại giá trị thương hiệu bền vững.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
    stagger: "md:mt-24"
  },
  {
    title: "Social Management",
    highlight: "Sáng tạo nội dung số ấn tượng - ổn định",
    description: "Sản xuất và quản trị nội dung ngắn dựa trên phân tích xu hướng và thuật toán bằng AI, giúp thương hiệu tăng trưởng nhanh và chuyển đổi hiệu quả trên các nền tảng.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    stagger: "md:mt-0"
  },
  {
    title: "AI Video Solutions",
    highlight: "Biến video của bạn thành lợi thế cạnh tranh",
    description: "Ứng dụng AI trong sản xuất, tối ưu và cá nhân hóa video nhằm gia tăng hiệu suất truyền thông, nâng cao nhận diện và tạo lợi thế cạnh tranh bền vững cho thương hiệu.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    stagger: "md:mt-24",
    isHighlighted: true
  }
];

const Services = () => {
  return (
    <section id="dịch-vụ" className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Dịch vụ của V-digital concept Agency</h2>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
              Chúng tôi không chỉ làm marketing. Chúng tôi xây dựng hệ thống tăng trưởng toàn diện, nơi chiến lược, sáng tạo và AI vận hành như một thể thống nhất.
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`flex flex-col ${service.stagger}`}
            >
              <div className={`relative aspect-[4/5] rounded-sm overflow-hidden group mb-8 ${service.isHighlighted ? 'ring-2 ring-brand-lime ring-offset-4 ring-offset-black' : ''}`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-xl leading-tight">
                    <span className="text-brand-lime block mb-1">{service.title}</span>
                    <span className="text-sm font-medium text-white/70 italic">{service.highlight}</span>
                  </h4>
                </div>
                {service.isHighlighted && (
                  <div className="absolute top-4 right-4 bg-brand-lime text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                    Featured
                  </div>
                )}
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
