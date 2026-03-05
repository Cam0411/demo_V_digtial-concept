import { motion } from "motion/react";
import { Zap, Cpu, TrendingUp } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Sẵn sàng để <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-primary to-brand-dark animate-pulse">bứt phá?</span>
            </h2>
            <p className="text-xl text-white/50 mb-10 leading-relaxed max-w-lg font-medium">
              Để lại thông tin doanh nghiệp của bạn, đội ngũ chuyên gia của V-digital concept sẽ liên hệ tư vấn giải pháp AI Marketing tối ưu nhất trong vòng 24h.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Zap, text: "Tư vấn chiến lược AI miễn phí", desc: "Phân tích hiện trạng và đề xuất lộ trình tối ưu." },
                { icon: Cpu, text: "Demo giải pháp video AI tự động", desc: "Trải nghiệm công nghệ sản xuất video hàng loạt." },
                { icon: TrendingUp, text: "Cam kết tăng trưởng chuyển đổi", desc: "Tập trung vào kết quả kinh doanh thực tế." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-brand-lime" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1">{item.text}</div>
                    <div className="text-white/30 text-sm font-medium">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-brand-primary/10 blur-[100px] rounded-full -z-10 animate-pulse" />
            
            <form className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 md:p-12 rounded-[3.5rem] shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-lime/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Doanh nghiệp</label>
                  <input 
                    type="text" 
                    placeholder="Tên công ty của bạn"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-brand-lime/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Người liên hệ</label>
                  <input 
                    type="text" 
                    placeholder="Họ và tên"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-brand-lime/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Số điện thoại</label>
                  <input 
                    type="tel" 
                    placeholder="090 123 4567"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-brand-lime/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="contact@company.com"
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-brand-lime/30 focus:bg-white/[0.05] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] ml-4">Nhu cầu của bạn</label>
                <textarea 
                  rows={4}
                  placeholder="Bạn đang quan tâm đến giải pháp nào? (AI Video, Marketing Strategy, Automation...)"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:border-brand-lime/30 focus:bg-white/[0.05] transition-all font-medium resize-none"
                />
              </div>

              <button className="w-full py-6 bg-white text-black rounded-2xl font-black text-lg hover:bg-brand-lime transition-all shadow-2xl shadow-white/5 transform hover:-translate-y-1 active:translate-y-0">
                GỬI VIDEO GỐC ĐỂ TỐI ƯU BẰNG AI
              </button>
              
              <p className="text-center text-white/20 text-[10px] font-bold tracking-widest uppercase">
                Bảo mật thông tin 100% • Phản hồi trong 24h
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
