import Leftcontent from "./leftcontent";
import Rightcontent from "./rightcontent";

const Pagecontent = (props) => {
  return (
    <div className="flex  h-[88vh] gap-10 px-7 py-7">
      <Leftcontent />
      <Rightcontent  pokemon={props.pokemon} />
    </div>
  );
};

export default Pagecontent;
