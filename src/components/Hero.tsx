import SlideIn from "./SlideIn";

const Hero = () => {
  return (
    <header
      className="h-[90dvh] max-h-[700px] overflow-hidden"
      style={{
        backgroundColor: "#dbe2e5",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%236797c1' fill-opacity='0.36' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto max-w-6xl flex justify-between items-center pt-24 px-2 h-full">
        <div className="flex flex-col text-center lg:text-left items-center justify-center lg:items-start gap-5 flex-1 h-full">
          <SlideIn direction="left">
            <h1 className="text-6xl text-pretty rubik-600 text-stone-800">
              Where Your Vision Is Our Mission.
            </h1>
          </SlideIn>
          <SlideIn direction="left" delay={0.2}>
            <p className="text-slate-600">
              We provide comprehensive eye exams, prescriptions, and advanced
              diagnostics with precision, care, and expert attention.
            </p>
          </SlideIn>
          <SlideIn direction="left" delay={0.4}>
            <div className="flex gap-3.5">
              <a
                href="https://calendly.com/wanigmena/30min"
                className="py-2 px-4 rounded-md bg-black text-white font-semibold inline-block"
              >
                Book a Consultation
              </a>
              <a
                href="/contact"
                className="border border-gray-500 py-2 px-4 rounded-md font-semibold inline-block hover:bg-white hover:border-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </SlideIn>
        </div>

        <div className="h-full flex">
          <img
            src="eye_girl.webp"
            className="hidden lg:block max-w-xl relative bottom-0 object-cover"
            alt="Eye Care"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
