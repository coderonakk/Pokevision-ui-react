import "remixicon/fonts/remixicon.css";
import Arrow from "./arrow";
import Herosection from "./herosection";

const Leftcontent = () => {
  return (
    <div className="h-full w-1/4 flex flex-col justify-between">
      <Herosection />
      <Arrow />
    </div>
  );
};

export default Leftcontent;
