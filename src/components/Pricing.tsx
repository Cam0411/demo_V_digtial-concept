import { motion } from "motion/react";
import { Check } from "lucide-react";

const pricingPackages = [
  {
    title: 'Video Cơ Bản',
    subtitle: 'Không lời / Voiceover',
    price: 'Từ 2.000.000',
    priceSuffix: 'VNĐ',
    description: 'Lý tưởng cho các video sản phẩm, giới thiệu nhanh hoặc nội dung mạng xã hội không yêu cầu lời thoại phức tạp.',
    features: [
      'Tối ưu cho mạng xã hội',
      'Sản xuất nhanh chóng',
      'Chi phí AI hợp lý',
      'Phù hợp ngân sách nhỏ',
    ],
    isFeatured: false,
  },
  {
    title: 'Video Lời Thoại',
    subtitle: 'Đơn giản',
    price: 'Từ 2.500.000',
    priceSuffix: 'VNĐ',
    description: 'Phù hợp cho các video giải thích, phỏng vấn ngắn hoặc quảng cáo cần truyền tải thông điệp rõ ràng qua giọng nói.',
    features: [
      'Truyền tải thông điệp rõ ràng',
      'Quy trình sản xuất tinh gọn',
      'Giọng đọc AI chuyên nghiệp',
      'Nâng cao tính thuyết phục',
    ],
    isFeatured: false,
  },
  {
    title: 'Video TVC',
    subtitle: 'Storytelling',
    price: 'Từ 30.000.000',
    priceSuffix: 'VNĐ',
    description: 'Xây dựng câu chuyện thương hiệu hấp dẫn, tạo kết nối cảm xúc mạnh mẽ với khán giả qua kịch bản chuyên nghiệp.',
    features: [
      'Kịch bản & ý tưởng chuyên sâu',
      'Chất lượng sản xuất cao',
      'Tối ưu cho chiến dịch lớn',
      'Chi phí AI tùy theo kịch bản',
    ],
    isFeatured: true,
  },
   {
    title: 'Video TVC',
    subtitle: 'VFX & Hiệu Ứng',
    price: 'Từ 60.000.000',
    priceSuffix: 'VNĐ',
    description: 'Tạo ra những thước phim ấn tượng với hiệu ứng hình ảnh đỉnh cao, phù hợp cho các sản phẩm công nghệ, game, phim ảnh.',
    features: [
      'Kỹ xảo hình ảnh chuyên nghiệp',
      'Hậu kỳ & chỉnh màu cao cấp',
      'Tạo hình ảnh mãn nhãn',
      'Chi phí AI theo từng shot VFX',
    ],
    isFeatured: false,
  },
  {
    title: 'TVC Cao Cấp',
    subtitle: 'Storytelling & VFX',
    price: 'Từ 90.000.000',
    priceSuffix: 'VNĐ',
    description: 'Gói sản xuất toàn diện nhất, kết hợp giữa kịch bản sâu sắc và kỹ xảo điện ảnh để tạo ra một tác phẩm đỉnh cao.',
    features: [
      'Sản xuất ở cấp độ điện ảnh',
      'Sử dụng công nghệ Mocap',
      'Kịch bản và kỹ xảo phức tạp',
      'Gói sản xuất toàn diện nhất',
    ],
    isFeatured: false,
  },
  {
    title: 'Gói Tùy Chỉnh',
    subtitle: 'Giải Pháp Riêng Biệt',
    price: 'Liên Hệ',
    priceSuffix: '',
    description: 'Chúng tôi sẵn sàng xây dựng gói dịch vụ riêng, đáp ứng chính xác mục tiêu và ngân sách của dự án độc đáo của bạn.',
    features: [
        'Phân tích nhu cầu chuyên sâu',
        'Linh hoạt về quy mô',
        'Báo giá theo yêu cầu',
        'Tư vấn chiến lược miễn phí',
    ],
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 text-xs font-black tracking-[0.3em] uppercase mb-4 block text-center">Bảng giá dịch vụ</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">Đầu tư cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">tăng trưởng.</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Các gói giải pháp linh hoạt, ứng dụng công nghệ AI tối tân để tối ưu chi phí và thời gian sản xuất cho doanh nghiệp.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group p-10 rounded-[3rem] border transition-all duration-500 flex flex-col ${
                pkg.isFeatured 
                ? 'bg-blue-600/10 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/10'
              }`}
            >
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                  Phổ biến nhất
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                <div className="text-cyan-400 text-sm font-bold tracking-wide mb-6">{pkg.subtitle}</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-white tracking-tighter">{pkg.price}</span>
                  <span className="text-white/40 text-sm font-bold uppercase ml-1">{pkg.priceSuffix}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-white/60 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                pkg.isFeatured
                ? 'bg-white text-black hover:bg-cyan-400'
                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                Chọn gói này
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
