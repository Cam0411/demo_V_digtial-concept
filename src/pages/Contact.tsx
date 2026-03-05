import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-32">
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Liên <span className="text-cyan-400">hệ.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium">
            Sẵn sàng bứt phá cùng V-digital concept? Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ tư vấn giải pháp AI Marketing tối ưu nhất.
          </p>
        </motion.div>
      </section>

      <ContactForm />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
        {[
          { title: "Hotline", value: "090 123 4567" },
          { title: "Email", value: "contact@vdigital.vn" },
          { title: "Địa chỉ", value: "TP. Hồ Chí Minh, Việt Nam" }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
            <h4 className="text-cyan-400 font-bold mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
            <p className="text-white font-bold text-lg">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
