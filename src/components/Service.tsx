interface ServiceProps {
  name: string;
  description: string;
}

const Service = (props: ServiceProps) => {
  return (
    <div className="flex flex-col gap-2.5 bg-gray-200 p-4 rounded-md text-center md:text-left shadow hover:shadow-md transition-all">
      <h1 className="font-semibold">{props.name}</h1>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
};

export default Service;
