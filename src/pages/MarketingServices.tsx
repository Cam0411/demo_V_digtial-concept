import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, ArrowRight, ShieldCheck, BarChart3, Users2, Zap, LayoutGrid, Radio } from "lucide-react";
import GrowthMarketing from "../components/GrowthMarketing";

const services = [
  {
    id: "growth",
    tab: "Growth Marketing",
    title: "Quảng cáo có cam kết hiệu quả",
    subtitle: "Thực chiến với +8 năm kinh nghiệm triển khai Google ads, Facebook ads, Tiktok ads, Shopee ads, tối ưu chi phí tối đa hiệu quả.",
    description: "Xây dựng hệ thống marketing dựa trên dữ liệu, ứng dụng AI để tối ưu hành trình khách hàng và gia tăng hiệu suất chuyển đổi theo thời gian thực.",
    features: [
      { title: "Chiến lược bài bản", desc: "Xây dựng chiến lược marketing 4Ps giúp đạt được mục tiêu kinh doanh." },
      { title: "Tiết kiệm chi phí", desc: "Liên tục lập kế hoạch tối ưu chi phí/1 chuyển đổi." },
      { title: "Quảng cáo đa kênh", desc: "Xây dựng giải pháp phủ sóng đa kênh, đa điểm chạm chuyển đổi." },
      { title: "Cam kết hiệu quả quảng cáo", desc: "Nhận phí nếu hoàn thành KPI." }
    ],
    painPoints: ["Quảng cáo sai đối tượng", "Không biết tối ưu từ đâu", "Chi phí thuê nhân sự cao", "Mất nhiều thời gian"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "branding",
    tab: "Branding Agency",
    title: "Định vị thương hiệu khác biệt",
    subtitle: "Xây dựng bản sắc thương hiệu độc bản với sự hỗ trợ của AI, giúp doanh nghiệp nổi bật giữa đám đông.",
    description: "Kết hợp tư duy chiến lược thương hiệu với phân tích dữ liệu và AI để tạo dựng hình ảnh khác biệt, nhất quán và mang lại giá trị thương hiệu bền vững.",
    features: [
      { title: "Tư duy chiến lược", desc: "Định vị thương hiệu dựa trên nghiên cứu thị trường sâu sắc." },
      { title: "Hình ảnh nhất quán", desc: "Thiết kế bộ nhận diện thương hiệu chuyên nghiệp, đồng bộ." },
      { title: "Giá trị bền vững", desc: "Xây dựng niềm tin và lòng trung thành của khách hàng." },
      { title: "Phân tích dữ liệu AI", desc: "Tối ưu hóa hình ảnh dựa trên phản hồi thực tế của người dùng." }
    ],
    painPoints: ["Thương hiệu mờ nhạt", "Thiếu sự nhất quán", "Không có bản sắc riêng", "Khó tiếp cận khách hàng"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "social",
    tab: "Social Management",
    title: "Quản trị nội dung số ấn tượng",
    subtitle: "Sáng tạo nội dung ngắn dựa trên phân tích xu hướng và thuật toán AI, giúp thương hiệu phủ sóng mạnh mẽ.",
    description: "Sản xuất và quản trị nội dung ngắn dựa trên phân tích xu hướng và thuật toán bằng AI, giúp thương hiệu tăng trưởng nhanh và chuyển đổi hiệu quả trên các nền tảng.",
    features: [
      { title: "Nội dung sáng tạo", desc: "Sản xuất video ngắn, bài viết bắt trend liên tục." },
      { title: "Tăng trưởng nhanh", desc: "Tối ưu thuật toán để tiếp cận hàng triệu người dùng." },
      { title: "Chuyển đổi hiệu quả", desc: "Biến người theo dõi thành khách hàng trung thành." },
      { title: "Quản trị ổn định", desc: "Duy trì tần suất đăng bài và tương tác chuyên nghiệp." }
    ],
    painPoints: ["Kênh không có tương tác", "Cạn kiệt ý tưởng nội dung", "Không hiểu thuật toán", "Tốn nhiều nguồn lực"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

const ecosystem = [
  { title: "ShowbizNow", desc: "Giải trí & Xu hướng trẻ", icon: Radio },
  { title: "Làng Mode", desc: "Thời trang & Văn hóa", icon: LayoutGrid },
  { title: "Tech365", desc: "Công nghệ & AI", icon: Zap },
  { title: "Blockchain World", desc: "Tài chính số", icon: BarChart3 },
  { title: "GenZ xê dịch", desc: "Du lịch & Trải nghiệm", icon: Users2 },
  { title: "Nhà Hay", desc: "Kiến trúc & Không gian", icon: ShieldCheck }
];

const MarketingServices = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const current = services.find(s => s.id === activeTab)!;

  return (
    <div className="pt-32 min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            <span className="text-brand-lime">V-digital concept Agency</span> Giải pháp Marketing được xây dựng tối ưu <br className="hidden md:block" />
            riêng theo từng lĩnh vực kinh doanh
          </h1>
        </motion.div>
      </section>

      {/* VTV Partnership & Data Advantage */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl font-black text-white mb-4 tracking-tighter">SỐ 1</div>
              <div className="text-xs font-black text-brand-lime uppercase tracking-widest">Đối tác truyền thông VTV Digital</div>
              <p className="mt-4 text-white/40 text-sm">Nội dung được bảo chứng bởi cơ quan truyền thông uy tín nhất Việt Nam.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl font-black text-white mb-4 tracking-tighter">89%</div>
              <div className="text-xs font-black text-brand-lime uppercase tracking-widest">Độ phủ Gen Z trên Instagram</div>
              <p className="mt-4 text-white/40 text-sm">Tối ưu hóa nội dung cho thế hệ tiếp nhận thông tin nhanh nhất.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl font-black text-white mb-4 tracking-tighter">BigData</div>
              <div className="text-xs font-black text-brand-lime uppercase tracking-widest">Tiên phong báo chí dữ liệu</div>
              <p className="mt-4 text-white/40 text-sm">Sử dụng dữ liệu lớn để kể những câu chuyện phức tạp một cách khoa học.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center border-b border-white/10 mb-16">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-8 py-6 text-lg font-bold transition-all relative ${
                activeTab === s.id ? "text-brand-lime" : "text-white/40 hover:text-white"
              }`}
            >
              {s.tab}
              {activeTab === s.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-lime shadow-[0_0_15px_rgba(190,242,100,0.5)]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left: Visual with Pain Points */}
              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                  <img 
                    src={current.image} 
                    alt={current.title}
                    className="w-full aspect-[4/5] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Pain Points */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-start gap-4">
                    {current.painPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className={`self-start px-6 py-3 rounded-full backdrop-blur-md border text-xs font-bold shadow-lg
                          ${i % 2 === 0 ? 'bg-brand-primary/20 border-brand-primary/30 text-white' : 'bg-brand-lime/20 border-brand-lime/30 text-brand-lime'}
                        `}
                        style={{ marginLeft: `${i * 20}px` }}
                      >
                        {point}
                      </motion.div>
                    ))}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-brand-primary/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-center">
                      <p className="text-white text-sm font-bold">Bạn đang đau đầu vì {current.tab.toLowerCase()}?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{current.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed font-medium mb-4">
                    {current.subtitle}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed italic">
                    {current.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {current.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-lime/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-lime/20 transition-colors">
                        <Check className="w-4 h-4 text-brand-lime" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg mb-1 group-hover:text-brand-lime transition-colors">{f.title}</div>
                        <div className="text-white/30 text-sm font-medium">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-black text-lg hover:bg-brand-lime hover:text-black transition-all shadow-2xl shadow-brand-primary/20 flex items-center gap-3 group">
                  XEM CHI TIẾT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Content Ecosystem Section */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-lime text-xs font-black tracking-[0.3em] uppercase mb-4 block">Hệ sinh thái nội dung</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">Đa dạng & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-brand-primary">Sâu sắc.</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ecosystem.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-brand-lime/30 transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-lime/20 transition-colors">
                  <item.icon className="w-6 h-6 text-brand-lime" />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Process Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-lime text-xs font-black tracking-[0.3em] uppercase mb-4 block">Quy trình phân phối</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-8">Lan tỏa đa nền tảng <br />với <span className="text-brand-lime">3 giai đoạn.</span></h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Trước khi phát sóng", desc: "Teaser, Trailer & Bài đăng giới thiệu đối tác trên toàn bộ hệ sinh thái Social Media." },
                  { step: "02", title: "Trong khi phát sóng", desc: "Podcast Audio (Spotify/Apple), Full-length Video (YouTube) với logo & credit thương hiệu." },
                  { step: "03", title: "Sau khi phát sóng", desc: "Short-clips (<90s), Highlight Reels, Recap Posts & Bài chia sẻ từ cộng đồng chuyên môn." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-4xl font-black text-white/10 group-hover:text-brand-lime transition-colors">{item.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-primary/10 blur-[100px] rounded-full" />
              <div className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                <div className="grid grid-cols-3 gap-6">
                  {['YouTube', 'Facebook', 'TikTok', 'Instagram', 'Spotify', 'LinkedIn'].map((platform, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 hover:border-brand-lime/30 transition-all group">
                      <span className="text-[10px] font-black text-white/20 group-hover:text-brand-lime uppercase tracking-widest">{platform}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 rounded-2xl bg-brand-lime/10 border border-brand-lime/20">
                  <p className="text-brand-lime text-xs font-bold leading-relaxed">
                    "Tận dụng hệ sinh thái VTV và các kênh số của V-digital concept để lan tỏa thông điệp. Báo cáo số liệu đầy đủ sau mỗi chiến dịch."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <GrowthMarketing />
    </div>
  );
};

export default MarketingServices;
