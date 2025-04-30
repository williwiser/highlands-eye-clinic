import Service from "./Service";
import SlideIn from "./SlideIn";

const ServicesSn = () => {
  return (
    <section>
      <div className="container mx-auto max-w-6xl flex flex-col items-center px-2 py-8 h-full te">
        <h1 className="font-semibold text-5xl">Services</h1>
        <hr className="border-slate-500 border-2 w-56 my-8 rounded-md"></hr>
        <div className="grid md:grid-cols-2 gap-3.5 w-full">
          <SlideIn direction="down">
            <Service
              name="Comprehensive Eye Examinations"
              description="Thorough check-ups to assess overall eye health, screen for conditions, and update vision prescriptions."
            />
          </SlideIn>
          <SlideIn direction="down" delay={0.2}>
            <Service
              name="Prescription Eyeglasses and Contact Lenses"
              description="Customized lenses and frames to correct vision problems like nearsightedness, farsightedness, and astigmatism."
            />
          </SlideIn>
          <SlideIn direction="down">
            <Service
              name="Diagnosis and Management of Eye Diseases"
              description="Early detection and ongoing treatment plans for chronic eye conditions to preserve vision and prevent complications."
            />{" "}
          </SlideIn>
          <SlideIn direction="down" delay={0.2}>
            <Service
              name="Pediatric Eye Care"
              description="Specialized eye exams and treatments tailored for children to support healthy vision development."
            />
          </SlideIn>
          <SlideIn direction="down">
            <Service
              name="Laser Vision Correction"
              description="Advanced laser procedures to reshape the cornea and reduce dependency on glasses or contacts."
            />
          </SlideIn>
          <SlideIn direction="down" delay={0.2}>
            <Service
              name="Emergency Eye Care"
              description="Immediate care for sudden eye injuries, infections, or vision loss to prevent long-term damage."
            />
          </SlideIn>
        </div>
        <a
          href="/services"
          className="py-2 px-4 mt-4 rounded-md bg-black text-white font-semibold inline-block"
        >
          Read more...
        </a>
      </div>
    </section>
  );
};

export default ServicesSn;
