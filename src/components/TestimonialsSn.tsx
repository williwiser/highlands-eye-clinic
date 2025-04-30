import Testimonial from "./Testimonial";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const TestimonialsSn = () => {
  return (
    <section>
      <div className="container mx-auto max-w-6xl flex flex-col items-center px-2 py-8 h-full">
        <h1 className="font-semibold text-5xl">Testimonials</h1>
        <hr className="border-slate-500 border-2 w-56 my-8 rounded-md"></hr>
        <ScrollArea className="w-full pb-4">
          <div className="grid grid-cols-3 w-max gap-4">
            <Testimonial
              testimonial="Dr. Wani is not only knowledgeable but also incredibly kind and patient. 
              The team made me feel comfortable from the moment I walked in. Highly recommend this clinic!"
              name="Lydia M."
            />
            <Testimonial
              testimonial='"After my cataract surgery, I can finally see clearly again. 
              Everything was smooth and well explained. Thank you Highlands Eye Clinic!'
              name="Taffy G."
            />
            <Testimonial
              testimonial='"The staff is warm and professional. I brought my mother for a checkup and she was treated with so much respect. 
              We are very happy with the service."'
              name="Ronald K."
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default TestimonialsSn;
