import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import Section from "@/components/Section";
import GoogleMap from "@/components/GoogleMap";
import PulseLoader from "react-spinners/PulseLoader";
import { useState } from "react";
import { BACKEND_BASE_URL } from "../utilities/constants";
import DialogBox from "../components/DialogBox";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [openDialog, setOpenDialog] = useState(false);
  const [gotError, setGotError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsLoading(true); // Set loading state to true
    axios
      .post<FormData>(`${BACKEND_BASE_URL}/api/v1/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setGotError(false);
        setIsLoading(false);
        setOpenDialog(true);
        console.log("Response:", response.data);
      })
      .catch((error) => {
        setGotError(true);
        setIsLoading(false);
        console.error("Error submitting form:", error);
      })
      .finally(() => {
        // Clear the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <>
      <Navigation />
      <Header title="Contact Us" />
      <Section title="Get in Touch">
        <div className="max-w-6xl mx-auto px-4" id="contact">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              Have questions or need to book an appointment? Reach out to us —
              we’re here to help.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  rows={5}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  onChange={handleChange}
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-500 transition duration-200"
              >
                {isLoading ? (
                  <PulseLoader color="#fff" size={10} />
                ) : (
                  "Send Message"
                )}
              </button>
              <p className="text-red-500 text-center max-w-xs text-xs">
                {gotError &&
                  "Something went wrong. Please try again later or reach out to us via email."}{" "}
              </p>
            </form>

            {/* Google Map */}
            <div className="h-[90%] overflow-hidden rounded-md shadow-md">
              <GoogleMap />
            </div>
            <DialogBox open={openDialog} setOpen={setOpenDialog} />
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Contact;
