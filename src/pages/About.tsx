import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "@/components/Section";

function About() {
  return (
    <>
      <Navigation />
      <Header title="About Us" />
      <Section title="About the Clinic">
        <div className="flex justify-between items-center gap-8 w-full">
          <div>
            <p className="max-w-xl text-center md:text-left text-gray-700">
              Highlands Eye Clinic is a specialist eye care center based in
              Mutare, Zimbabwe, dedicated to restoring and preserving vision
              with compassion and precision. Founded by Dr. Wani Mena, a highly
              experienced ophthalmologist with over three decades of expertise,
              the clinic offers world-class medical, surgical, and optical
              services tailored to every patient's unique needs.
            </p>
          </div>
          <img
            src="sasu.jpg"
            className="hidden md:block max-w-lg w-full rounded-md max-h-[300px] object-cover"
            alt="Eye Care"
          />
        </div>
      </Section>
      <Section title="Vision and Mission" bg="slate-200">
        <div className="flex justify-between items-center gap-8 w-full mb-8 bg-slate-300 overflow-hidden rounded-md">
          <img
            src="opth.jpg"
            className="hidden md:block max-w-lg max-h-[300px] w-full object-cover"
            alt="Eye Care"
          />
          <div className="flex flex-col gap-3 p-4 overflow-hidden">
            <h1 className="font-semibold text-5xl text-center md:text-left">
              Vision
            </h1>
            <p className="max-w-xl text-center md:text-left text-gray-700">
              To provide comprehensive eye care through skilled diagnosis,
              effective treatment, and patient-centered care, while promoting
              education, research, and outreach in the communities we serve.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 w-full mb-8 bg-slate-300 overflow-hidden rounded-md">
          <div className="flex flex-col gap-3 p-4 justify-center">
            <h1 className="font-semibold text-5xl text-center md:text-left">
              Mission
            </h1>
            <p className="max-w-xl text-center md:text-left text-gray-700">
              To become a leading center of excellence in eye care across
              Zimbabwe and the region, delivering accessible, affordable, and
              high-quality ophthalmic services that prevent blindness and
              improve lives.
            </p>
          </div>
          <img
            src="phoroptor.jpg"
            className="hidden md:block max-w-lg max-h-[300px] w-full object-cover"
            alt="Eye Care"
          />
        </div>
      </Section>

      <Section title="Meet Our Specialist" bg="bg-slate-200">
        <div className="flex flex-col items-center md:flex-row gap-8 md:items-start">
          <img
            src="/specialist.jpg" // Replace with actual image path
            alt="Dr. Wani Mena"
            className="size-48 rounded-md object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Dr. Wani Mena</h3>
            <p className="text-gray-600 italic">
              MBChB, MMed (Ophth), MSc ClinEpi, Cert. CEH
            </p>
            <p className="mt-4 text-gray-700">
              Dr. Wani Mena is a seasoned consultant ophthalmologist with over
              three decades of experience in both clinical and surgical eye care
              across Southern and Eastern Africa. His passion for
              community-centered ophthalmology has shaped national programs in
              South Sudan and Zimbabwe.
            </p>
            <p className="mt-4 text-gray-700">
              A graduate of the University of Juba, University of Nairobi,
              University of Zimbabwe, and the University of Cape Town, Dr. Mena
              holds qualifications in medicine, ophthalmology, clinical
              epidemiology, and community eye health.
            </p>

            <p className="mt-4 text-gray-700">
              Throughout his career, he has led major public eye care
              initiatives, including developing the
              <strong> Vision 2020 National Plan</strong> for South Sudan and
              founding the Buluk Eye Centre and ophthalmic training programs at
              Juba Teaching Hospital.
            </p>

            <p className="mt-4 text-gray-700">
              Currently, Dr. Mena serves as the lead consultant at{" "}
              <strong>Highlands Eye Clinic</strong> in Mutare, Zimbabwe, where
              he continues to provide specialist care and run outreach and
              diabetic screening programs in partnership with local and
              international organizations.
            </p>

            <p className="mt-4 text-gray-700">
              Dr. Mena is skilled in a range of advanced ophthalmic procedures
              including SICS, glaucoma surgery, and orbital surgery. He is also
              a passionate educator, committed to training the next generation
              of ophthalmologists, nurses, and cataract surgeons.
            </p>

            <p className="mt-4 text-gray-600 italic">
              “My mission has always been to make quality eye care accessible
              and sustainable, especially in underserved communities.”
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default About;
