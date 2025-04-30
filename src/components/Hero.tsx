import SlideIn from "./SlideIn";

const Hero = () => {
  return (
    <header className="h-[95dvh] overflow-hidden bg-gradient-to-b from-[#d3d2d2] to-[#dcdcdc]">
      <div className="container mx-auto max-w-6xl flex justify-between items-center pt-24 px-2 h-full">
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start gap-5 flex-1">
          <SlideIn direction="left">
            <h1 className="text-7xl text-pretty rubik-600 text-stone-800">
              Your Vision
              <br />
              Our Priority.
            </h1>
          </SlideIn>
          <SlideIn direction="left" delay={0.2}>
            <p className="text-gray-600">
              Easy appointments, modern tech, and a caring team—all in one
              place.
            </p>
          </SlideIn>
          <SlideIn direction="left" delay={0.4}>
            <div className="flex gap-3.5">
              <a
                href="/login"
                className="py-2 px-4 rounded-md bg-black text-white font-semibold inline-block"
              >
                Book a Consultation
              </a>
              <a
                href="/contact"
                className="border border-gray-500 py-2 px-4 rounded-md font-semibold inline-block"
              >
                Contact Us
              </a>
            </div>
          </SlideIn>
        </div>

        <img
          src="lady2.png"
          className="hidden lg:block max-w-xl relative bottom-16"
          alt="Eye Care"
        />
      </div>
    </header>
  );
};

export default Hero;
