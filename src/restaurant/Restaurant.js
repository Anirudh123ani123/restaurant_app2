import React, { useState } from "react";
import Card from "./Card";
import { Menu } from "./apiData";
import "./style.css";
const Restaurant = () => {
    let[itemsTodisplay,setDisplayItems]=useState(Menu);
  let category = [...new Set(Menu.map((card) => card.category)), "All"];


  const filterCategory=(category)=>{
    if(category=="All"){
        setDisplayItems(Menu);
        return; 
    }
    let filteredItems=Menu.filter((card)=>{
        return card.category==category
    });
    setDisplayItems([...filteredItems])
  }


  console.log("category:", category);
  return (
    <>
      <div className="container">
        <div className="nav-container">
          {category.map((title) => {
            let id=new Date().getTime().toString();
            return (
              <>
                <Navbutton title={title} filterCategory={filterCategory} key={id}/>
              </>
            );
          })}
        </div>
        <div className="image-container" >
          
          {
            itemsTodisplay.map((card)=>{
              let id=new Date().getTime().toString()
                return<>
                <Card card={card} key={id}/>
                </>
            })
          }
          
        </div>
      </div>
    </>
  );
};

const Navbutton = ({ title,filterCategory }) => {
  return (
    <>
      <button className="nav-button" onDoubleClick={()=>filterCategory(title)} >{title}</button>
    </>
  );
};
export default Restaurant;
