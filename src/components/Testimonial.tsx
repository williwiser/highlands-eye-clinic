import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

interface TestimonialProps {
  profilePhoto?: string;
  name?: string;
  testimonial?: string;
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md flex gap-3.5 max-w-sm">
      <FontAwesomeIcon className="text-4xl" icon={faUserCircle} />
      <div className="h-full flex flex-col justify-between">
        <p className="text-gray-600">
          <i>{props.testimonial}</i>
        </p>
        <h1 className="font-semibold text-right ">~ {props.name}</h1>
      </div>
    </div>
  );
};

export default Testimonial;
