import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import {
  Eye,
  ShieldCheck,
  Stethoscope,
  Microscope,
  ScanLine,
  Glasses,
} from "lucide-react";

const services = [
  {
    title: "Comprehensive Eye Exams",
    description:
      "Routine eye checks for early detection of vision problems, eye diseases, and overall eye health.",
    icon: <Eye className="w-8 h-8 text-slate-600" />,
  },
  {
    title: "Cataract Surgery",
    description:
      "Modern, safe, and effective cataract removal surgery using small incision techniques (SICS).",
    icon: <Stethoscope className="w-8 h-8 text-slate-600" />,
  },
  {
    title: "Glaucoma Management",
    description:
      "Screening, treatment, and long-term care for patients with glaucoma using medication and surgical techniques.",
    icon: <ShieldCheck className="w-8 h-8 text-slate-600" />,
  },
  {
    title: "Diabetic Retinopathy Screening",
    description:
      "Early detection and monitoring of diabetic eye complications using advanced retinal imaging.",
    icon: <ScanLine className="w-8 h-8 text-slate-600" />,
  },
  {
    title: "Minor Eye Surgeries",
    description:
      "Outpatient surgical procedures such as eyelid and orbital surgery, pterygium removal, and others.",
    icon: <Microscope className="w-8 h-8 text-slate-600" />,
  },
  {
    title: "Prescription Glasses & Optical Services",
    description:
      "On-site prescription and fitting for glasses tailored to your vision needs and lifestyle.",
    icon: <Glasses className="w-8 h-8 text-slate-600" />,
  },
];
function Services() {
  return (
    <>
      <Navigation />
      <Header title="Our Services" />
      <Section title="What We Offer">
        {" "}
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            At Highlands Eye Clinic, we offer a full range of ophthalmic
            services — from basic exams to complex surgeries — tailored to meet
            your unique eye care needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Services;
