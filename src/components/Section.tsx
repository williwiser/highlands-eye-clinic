interface SectionProps {
  title: string;
  bg?: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { title, bg, children } = props;
  return (
    <section className={bg ? `bg-${bg}` : ""}>
      <div className="container mx-auto max-w-6xl flex flex-col items-center px-2 py-8 h-full">
        <h1 className="font-semibold text-5xl text-center">{title}</h1>
        <hr className="border-slate-500 border-2 w-56 my-8 rounded-md"></hr>
        {children}
      </div>
    </section>
  );
};

export default Section;
