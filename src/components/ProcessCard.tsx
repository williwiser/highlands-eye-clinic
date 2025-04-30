interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard = (props: ProcessCardProps) => {
  return (
    <div className="border border-gray-700 rounded-md flex flex-col min-h-56 overflow-hidden bg-white text-center md:text-left">
      <h1 className="font-semibold text-lg bg-gray-700 p-4 text-gray-100">
        {props.title}
      </h1>
      <div className="p-4 text-gray-600">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
