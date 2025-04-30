import ProcessCard from "./ProcessCard";
import SlideIn from "./SlideIn";

const Process = () => {
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto max-w-6xl flex flex-col items-center px-2 py-8 h-full te">
        <h1 className="font-semibold text-5xl">Our Process</h1>
        <hr className="border-slate-500 border-2 w-56 my-8 rounded-md"></hr>

        <div className="grid md:grid-cols-3 gap-3 w-full">
          <SlideIn direction="down">
            <ProcessCard
              title="Step 1: Schedule Your Visit"
              description="Book an appointment online or by phone — or simply walk in during our business hours."
            />
          </SlideIn>
          <SlideIn direction="down" delay={0.2}>
            <ProcessCard
              title="Step 2: Meet with Our Eye Care Team"
              description="Our friendly staff will guide you through a thorough eye examination and discuss any concerns you may have."
            />
          </SlideIn>
          <SlideIn direction="down" delay={0.4}>
            <ProcessCard
              title="Step 3: Receive Your Personalized Plan"
              description="Get your diagnosis, prescription, or treatment options tailored to your specific needs — all in one visit!"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Process;
