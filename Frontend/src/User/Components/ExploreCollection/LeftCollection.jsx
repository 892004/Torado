import React from "react";
import ExploreCards from "./ExploreCards";

const LeftCollection = (props) => {
  console.log(props);
  return (
    <div className="left-collection h-auto w-[60%] flex flex-wrap gap-2 p-5">
    {props.cards.map(function(elem , idx){
        return <ExploreCards key={idx} img={elem.img} heading={elem.heading} price={elem.price}/>
    })}
      
    </div>
  );
};

export default LeftCollection;
