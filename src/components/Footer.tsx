import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src="https://ik.imagekit.io/39wvgoqre/V%20digital/V%20DIGITAL%20LOGO%20OK-01.png" 
                alt="V-digital concept Logo" 
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-white font-bold tracking-tighter text-2xl">V-digital concept</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Tiên phong trong việc ứng dụng AI vào Digital Marketing, giúp doanh nghiệp tối ưu hóa quy trình sản xuất và bứt phá doanh thu.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Giải pháp</h4>
            <ul className="space-y-4">
              {["AI Video Solutions", "Growth Marketing", "Social Management"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-brand-lime text-sm transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Công ty</h4>
            <ul className="space-y-4">
              {["Về chúng tôi", "Quy trình làm việc", "Báo giá", "Liên hệ"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/40 hover:text-brand-lime text-sm transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-sm font-medium">
                <Phone className="w-4 h-4 text-brand-lime" />
                090 123 4567
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm font-medium">
                <Mail className="w-4 h-4 text-brand-lime" />
                contact@vdigital.vn
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm font-medium">
                <MapPin className="w-4 h-4 text-brand-lime" />
                TP. Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/20 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} V-digital concept Creative Agency. All rights reserved.
          </div>
          
          {/* Social Media Logos - Bottom Right */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all group"
              title="Facebook"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-lime/20 hover:border-brand-lime/50 transition-all group"
              title="Zalo"
            >
              <div className="relative">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
              </div>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-brand-dark/20 hover:border-brand-dark/50 transition-all group"
              title="TikTok"
            >
              <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-1.13-.31-2.34-.25-3.41.33-.71.38-1.27 1.03-1.51 1.8-.31.82-.28 1.73.08 2.51.32.78.96 1.43 1.76 1.78 1.21.55 2.65.45 3.77-.24.77-.44 1.3-1.19 1.53-2.01.19-.7.2-1.44.2-2.15V.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
