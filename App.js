import {View,FlatList} from "react-native";
import { useState } from "react";
import CategoryList from "./src/component/CategoryList";
import Demo2 from "./src/component/Demo2";
import Header from "./src/component/Header"
import Searches from "./src/component/Searches";
import Resturants from "./src/component/Resturants";
export default function App(){
  const allCategories = [
    {
      name:"Burger",
      image: require("./src/assets/images/burger.png")
    },
    {
      name:"Fast-Food",
      image: require("./src/assets/images/fast-food.png")
    },
    {
      name:"Starter",
      image: require("./src/assets/images/food.png")
    },
    {
      name:"Fried Potatoes",
      image: require("./src/assets/images/fried-potatoes.png")
    },
    {
      name:"Hamburger",
      image: require("./src/assets/images/hamburger.png")
    },
    {
      name:"Sushi",
      image: require("./src/assets/images/sushi.png")
    }
  ]
  let [active,setActive] = useState("Burger");
  return(
    <View>
      <Header/>
      <Searches input= {setActive} />
      <FlatList
          data={allCategories}
          renderItem={({item,index})=>{
            return(
              <CategoryList 
              name={item.name} image={item.image} ind={index}  
              pressItem ={active===item.name} 
              handlePress = {()=>{ setActive(item.name) }}
              />
            )
          }}
          horizontal 
          showsHorizontalScrollIndicator={false}

          keyExtractor={(cat)=>cat.name}
      />
      <Resturants />
    </View>
  )
}


