const WhyChooseUs = () => {
  return (
    <section id="tại-sao-chọn-z-life" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Tại sao chọn V-digital concept?</h2>
          <p className="text-2xl text-blue-400 font-medium italic">Nhanh hơn. Linh hoạt hơn. Tối ưu hơn.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Tốc độ vượt trội",
              desc: "Sản xuất trong vài giờ thay vì vài tuần. Giúp bạn nắm bắt xu hướng ngay lập tức."
            },
            {
              title: "Linh hoạt tối đa",
              desc: "Chỉnh sửa trực tiếp trên video gốc mà không cần quay lại. Tiết kiệm 70% thời gian."
            },
            {
              title: "Chi phí tối ưu",
              desc: "Quy trình AI hóa giúp chi phí tối ưu nhưng vẫn giữ chất lượng chuyên nghiệp nhất."
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-all">
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
