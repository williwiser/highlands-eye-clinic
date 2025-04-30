import SlideIn from "./SlideIn";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto max-w-6xl flex flex-col items-center px-2 py-8 h-full te">
        <h1 className="font-semibold text-5xl">Who We Are</h1>
        <hr className="border-slate-500 border-2 w-56 my-8 rounded-md"></hr>
        <div className="flex justify-center md:justify-between items-center gap-8 w-full">
          <SlideIn direction="left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="max-w-xl text-gray-600">
                Located in the heart of Mutare, our eye clinic is dedicated to
                providing expert eye care with a personal touch. Led by a
                specialist ophthalmologist with years of experience, we offer a
                full range of services — from routine check-ups to advanced
                diagnostics and treatment. Our clinic combines modern technology
                with a warm, welcoming environment to ensure every patient feels
                seen, heard, and cared for.
              </p>
              <a
                href="/about"
                className="py-2 px-4 mt-4 rounded-md bg-black text-white font-semibold inline-block"
              >
                Read more...
              </a>
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <img
              src="eye_bg.jpg"
              className="hidden md:block max-w-md rounded-md"
              alt="Eye Care"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
