import heroImage from "../assets/dosan-hero.webp";

const HeroSection = () => {
  return (
    <div dir="rtl">
      <section className="relative min-h-screen w-full overflow-hidden ">
        <img
          src={heroImage}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/** Shadow Effect */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10"
          style={{
            width: "min(64%, 900px)",
            background:
              "linear-gradient(90deg, rgba(0,55,67,0.82) 0%, rgba(0,55,67,0.5) 46%, rgba(0,55,67,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
          style={{
            height: "min(55%, 2220px)",
            background:
              "linear-gradient(180deg, rgba(0,55,67,0) 0%, rgba(0,55,67,0.55) 55%, rgba(0,55,67,0.88) 100%)",
          }}
        />

        <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-1 flex flex-col justify-between py-12 text-white pointer-events-none">
          {/* Location */}
          <div className="flex items-center gap-2 mb-20 sm:mb-12">
            <span className="w-6 h-[2px] bg-[#00e6a8]" />

            <span
              className="text-xs"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.6px",
                color: "rgba(255, 255, 255, 0.76)",
              }}
            >
              الرياض • المملكة العربية السعودية
            </span>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-start  gap-2 mb-[30px]">
            {/* Small title */}
            <div className="flex items-center gap-2 ">
              <span className="w-6 h-[2px] bg-[#00e6a8]" />
              <p
                className="text-xs"
                style={{
                  margin: 0,
                  fontWeight: 600,
                  letterSpacing: "1.4px",
                  color: "rgba(255, 255, 255, 0.76)",
                }}
              >
                هندسة سعودية • الشريك الحصري لـ OXYCOM في المملكة
              </p>
            </div>

            {/* Main Title */}
            <h1 className="m-0 max-w-[15ch] text-[min(clamp(31.3px,4.8vw,66.1px),8.8vh)] leading-none tracking-[clamp(-2px,-0.18vw,-0.6px)] font-bold text-white [text-wrap:balance] text-xs">
              تبريد بتكلفة تشغيل أقل.
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 max-w-[52ch] text-sm sm:text-base leading-relaxed text-white/90">
              تقنية التبريد التبخيري غير المباشر IDEC من Oxycom، وأنظمة VRF من
              Hisense، وطلاءات Enercoat الموفرة للطاقة، وتحليلات المباني، وخدمات
              MEP الكاملة — تخفض دوسان للطاقة استهلاك كهرباء التبريد في أنحاء
              المملكة العربية السعودية، بتصميم وتنفيذ وصيانة من فريق هندسي واحد
              مقره الرياض.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-3 mt-6">
              <button
                className="  inline-flex items-center justify-center gap-2   font-semibold leading-none whitespace-nowrap  rounded-md cursor-pointer h-[52px] px-7 text-base bg-[#1cd2ad] text-[#00201a] "
              >
                اطلب تقييم الموقع ←
              </button>

              <button
                className="
          inline-flex items-center justify-center gap-2
          font-semibold leading-none whitespace-nowrap
          rounded-md cursor-pointer
          h-[52px] px-7
          text-base
          text-white/80
          border border-white/50
        "
              >
                شاهد مشاريعنا ←
              </button>
            
            </div>
            <span className="block text-[11px] text-white/76 opacity-1 sm:opacity-100 ">
              انزل للاستكشاف
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
