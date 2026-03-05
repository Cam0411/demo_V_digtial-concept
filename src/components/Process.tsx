import { motion } from "motion/react";
import { Search, Fingerprint, FileText, Target, Rocket, BarChart, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Học và thấu hiểu SP/DV",
      icon: Search,
      yOffset: "-translate-y-8"
    },
    {
      number: "02",
      title: "Phân tích đánh giá",
      icon: Fingerprint,
      yOffset: "translate-y-8"
    },
    {
      number: "03",
      title: "Lập kế hoạch",
      icon: FileText,
      yOffset: "-translate-y-8"
    },
    {
      number: "04",
      title: "Chốt KPI đo lường",
      icon: Target,
      yOffset: "translate-y-8"
    },
    {
      number: "05",
      title: "Thực thi marketing thực tế",
      icon: Rocket,
      yOffset: "-translate-y-8"
    },
    {
      number: "06",
      title: "Đo lường báo cáo tối ưu",
      icon: BarChart,
      yOffset: "translate-y-8"
    }
  ];

  return (
    <section id="quy-trình" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Luôn hướng đến <span className="text-cyan-400">hiệu quả chuyển đổi</span> KHÁCH HÀNG
            </h2>
            <p className="text-white/40 text-lg font-medium">
              Với mỗi dự án chúng tôi đều có quy trình <span className="text-cyan-400/60">"cá nhân hóa"</span> để đảm bảo vận hành hiệu quả nhất
            </p>
          </motion.div>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative">
          {/* Connecting Line/Wave */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col items-center ${step.yOffset}`}
              >
                <div className="relative mb-6">
                  {/* Step Number */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl font-black italic text-white/10 group-hover:text-cyan-400/20 transition-colors">
                    {step.number}
                  </span>
                  
                  {/* Icon Container (Diamond Style) */}
                  <div className="w-24 h-24 relative group">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-full h-full bg-white/[0.03] border border-white/10 rounded-2xl rotate-45 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-white/[0.05] transition-all duration-500 shadow-2xl">
                      <div className="-rotate-45">
                        <step.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < steps.length - 1 && (
                    <div className={`absolute top-1/2 -right-8 -translate-y-1/2 ${idx % 2 === 0 ? 'rotate-[20deg]' : '-rotate-[20deg]'}`}>
                      <ArrowRight className="w-4 h-4 text-white/10" />
                    </div>
                  )}
                </div>

                <h4 className="text-center text-sm font-bold text-white/80 max-w-[120px] leading-snug group-hover:text-white transition-colors">
                  {step.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              <div className="relative shrink-0">
                <span className="absolute -top-4 -left-4 text-3xl font-black italic text-white/10">
                  {step.number}
                </span>
                <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-xl rotate-45 flex items-center justify-center">
                  <div className="-rotate-45">
                    <step.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white/80">
                {step.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
