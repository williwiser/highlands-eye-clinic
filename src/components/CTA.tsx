const CTA = () => {
  return (
    <section
      style={{
        background: `linear-gradient(
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0.4)
    ), url('lady.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-cover bg-center overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl flex flex-col items-center px-2 py-8 h-full text-white gap-8">
        <h1 className="font-semibold text-5xl text-center">
          Ready to Take Care of Your Eyes?
        </h1>

        <div className="flex flex-col justify-between items-center gap-8 text-center">
          <p className="max-w-2xl text-pretty">
            Whether it's your first visit or a routine check-up, our team is
            here to help you see clearly and comfortably. Book your consultation
            today — your eyes will thank you!
          </p>
          <a
            href="https://calendly.com/wanigmena/30min"
            className="py-2 px-4 mt-4 rounded-md bg-black text-white font-semibold inline-block"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
