import Cardcontent from "./cardcontent";

const Card = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-75 rounded-4xl">
      <img className="h-full w-full object-cover"
        src={props.img} alt=""
      />
      <Cardcontent name={props.name} p={props.p} link={props.link}/>

    </div>
  );
};

export default Card;
