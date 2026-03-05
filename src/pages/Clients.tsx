import { motion } from "motion/react";
import { Building2, Globe, Shield, Zap, ArrowUpRight, Users, Award, Rocket } from "lucide-react";

const clients = [
  {
    name: "VNPT",
    category: "Viễn thông & Công nghệ",
    description: "Tối ưu hóa quy trình truyền thông số và sản xuất nội dung AI cho các chiến dịch quy mô quốc gia.",
    icon: Globe,
    color: "from-blue-500/20 to-brand-primary/20"
  },
  {
    name: "VinGroup",
    category: "Đa ngành",
    description: "Hợp tác triển khai các giải pháp video AI cá nhân hóa cho hệ sinh thái bất động sản và nghỉ dưỡng.",
    icon: Building2,
    color: "from-red-500/20 to-brand-primary/20"
  },
  {
    name: "TP Bank",
    category: "Tài chính - Ngân hàng",
    description: "Số hóa trải nghiệm khách hàng thông qua các chiến dịch Marketing Automation và Video AI thế hệ mới.",
    icon: Shield,
    color: "from-purple-500/20 to-brand-primary/20"
  },
  {
    name: "CEO Group",
    category: "Bất động sản",
    description: "Nâng tầm hình ảnh dự án với công nghệ sản xuất video 3D và AI tích hợp, tối ưu tỷ lệ chuyển đổi.",
    icon: Zap,
    color: "from-orange-500/20 to-brand-primary/20"
  },
  {
    name: "SCRV",
    category: "Dịch vụ & Thương mại",
    description: "Xây dựng hệ thống quản trị nội dung số đa nền tảng, giúp thương hiệu tăng trưởng ổn định.",
    icon: Users,
    color: "from-emerald-500/20 to-brand-primary/20"
  },
  {
    name: "MASAN Group",
    category: "FMCG",
    description: "Ứng dụng AI để phân tích xu hướng tiêu dùng và sản xuất nội dung quảng cáo ngắn hạn hiệu quả.",
    icon: Award,
    color: "from-yellow-500/20 to-brand-primary/20"
  },
  {
    name: "FPT Education",
    category: "Giáo dục",
    description: "Đột phá trong tuyển sinh với các chiến dịch truyền thông sáng tạo dựa trên dữ liệu và AI.",
    icon: Rocket,
    color: "from-orange-600/20 to-brand-primary/20"
  },
  {
    name: "Pentel",
    category: "Văn phòng phẩm",
    description: "Làm mới hình ảnh thương hiệu lâu đời thông qua các nội dung số hiện đại và sáng tạo.",
    icon: Zap,
    color: "from-blue-600/20 to-brand-primary/20"
  }
];

const Clients = () => {
  return (
    <div className="pt-32 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
              Khách hàng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-primary to-brand-dark">tiêu biểu.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
              Chúng tôi tự hào là đối tác chiến lược của những tập đoàn hàng đầu, 
              cùng nhau kiến tạo những giá trị đột phá thông qua công nghệ AI.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Dự án hoàn thành", value: "500+" },
              { label: "Khách hàng tin tưởng", value: "150+" },
              { label: "Tỷ lệ hài lòng", value: "98%" },
              { label: "Năm kinh nghiệm", value: "8+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-brand-lime uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative h-full bg-white/[0.03] backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] hover:border-brand-lime/30 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-lime/20 transition-colors">
                      <client.icon className="w-7 h-7 text-brand-lime" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-brand-lime transition-colors" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-[10px] font-black text-brand-lime uppercase tracking-[0.3em] mb-2">{client.category}</div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-brand-lime transition-colors">{client.name}</h3>
                  </div>
                  
                  <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                    {client.description}
                  </p>

                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-brand-lime transition-colors">
                    <span>Xem chi tiết dự án</span>
                    <div className="h-px flex-1 bg-white/5 group-hover:bg-brand-lime/20 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-brand-primary/20 to-brand-lime/10 border border-white/10 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Bạn đã sẵn sàng trở thành <br />
                <span className="text-brand-lime">đối tác tiếp theo?</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
                Hãy cùng V-digital concept kiến tạo nên những thành công mới cho doanh nghiệp của bạn bằng sức mạnh của AI.
              </p>
              <button className="px-12 py-6 bg-white text-black rounded-2xl font-black text-xl hover:bg-brand-lime hover:scale-105 transition-all shadow-2xl shadow-white/10">
                BẮT ĐẦU DỰ ÁN NGAY
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
