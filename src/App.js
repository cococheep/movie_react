import React from "react";
import PropTypes from "prop-types"; 

function Food({name, category, image}){
  return(
    <div>
      <h3>I like {name} and it's {category}</h3>
      <img src = {image} alt = {name + "image"} width = "400px"></img>
    </div>
  );
}

let myFavourite = [
  {
    id: 0,
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-620x349.jpg",
    category: "korean"
  },
  {
    id: 1,
    name: "Ramen",
    image: "https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg",
    category: "japanese"
  },
  {
    id: 2,
    name: "Pasta",
    image: "https://theclevermeal.com/wp-content/uploads/2019/12/IMG_7879.jpg",
    category: "italian"
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

function App() {
  return (
    <div>
      <h1>My Favourite Foods</h1>
        {myFavourite.map(dish => <Food name = {dish.name} image = {dish.image} category = {dish.category} key = {dish.id}/>)}
    </div>
  );
}

export default App;
