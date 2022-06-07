import { useState } from "react";

import { View ,Text,TextInput,StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

import { Shadow } from "../common/Shadow";


export default function Searches(props){
    let [search,setSearch]= useState("");
    function searchFood(){
        if(search==='' || search===null || search===undefined) return
        props.input(search)
        setSearch("");
    }
    return(
        <View style={[styles.container,styles.Shadow]}>
            <FontAwesome style={styles.search} name="search" size={25} />
            <TextInput style={styles.inputs} placeholder="Resturants , Food" 
            value={search}
            onChangeText={(seaarhtext)=>setSearch(seaarhtext)}
            onEndEditing={()=>searchFood()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginTop:20,
        marginHorizontal:25,
        flexDirection:"row",
        padding:15,
        borderRadius:40
    },
    Shadow,
    inputs:{
        height: 40,
        marginHorizontal:10
    },
    search:{
        color:"#114745"
    }
})