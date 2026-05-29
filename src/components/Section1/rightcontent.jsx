import Card from "./card";

const Rightcontent = (props) => {
  return (
    <div className="h-full w-auto flex flex-wrap gap-7 overflow-y-auto ml-20">
      
      {props.pokemon.map(function(item, idx){
        return <Card key={idx} img={item.img} name={item.name} p={item.p} link={item.link}/>
      })}
    </div>
  );
};

export default Rightcontent;
