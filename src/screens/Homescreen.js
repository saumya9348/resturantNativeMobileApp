import {View,FlatList} from "react-native";
import { useState } from "react";
import CategoryList from "../component/CategoryList";
import Header from "../component/Header"
import Searches from "../component/Searches";
import Resturants from "../component/Resturants";
export default function Homescreen(){
  const allCategories = [
    {
      name:"Burger",
      image: require("../assets/images/burger.png")
    },
    {
      name:"Fast-Food",
      image: require("../assets/images/fast-food.png")
    },
    {
      name:"Starter",
      image: require("../assets/images/food.png")
    },
    {
      name:"Fried Potatoes",
      image: require("../assets/images/fried-potatoes.png")
    },
    {
      name:"Hamburger",
      image: require("../assets/images/hamburger.png")
    },
    {
      name:"Sushi",
      image: require("../assets/images/sushi.png")
    }
  ]
  let [active,setActive] = useState("Burger");
  return(
    <View style={{flex: 1}}>
      <Header/>
      <Searches input= {setActive} />
      <View>
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
      </View>
        <Resturants hell= {active} />

    </View>
  )
}


