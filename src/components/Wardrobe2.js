import Article from "./Article";
import React, { Component } from 'react';

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ]

    return wardrobe
    .filter(c => c.color === "blue")
    .map(c => {return <Article info={c} key={c.color + c.type} />})
    // return wardrobe.map(o=>{
        
      
    //    if(o.color=="blue")
    //     return <Article  info={o}/>
    //  })

  }
}

export default Wardrobe2