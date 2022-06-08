import { View , Text ,StyleSheet,ActivityIndicator} from "react-native";
import Myapi from "./Myapi";
import {useState,useEffect} from "react"
import Showresturants from "./ShowResturants";
import {FlatList} from "react-native"


export default function Resturants(props){
    let [allresturant,setAllresturant] = useState({id:1,name:"sam"});
    let [status,setStatus] = useState(true);
    console.log(props.hell);

    useEffect(()=>{
        Myapi.get("/search",{
            params:{
                limit:10,
                term:props.hell,
                location:"Toronto"
            }
        })
        .then(res=>{
            res.data.businesses.forEach(element => {  
                console.log(element)
            });
            setAllresturant(res.data.businesses);
            setStatus(false);

        })
        .catch(err=>console.log(err))
        
    },[props.hell])
    if(status) return <ActivityIndicator size="large" />

    return(
        <View style={[styles.resturantsConatiner,{flex: 1}]} >
            <Text style={styles.meinContText} >All Resturants</Text>
            <View style={{flex: 1}}>

                    <FlatList

                    data={allresturant}
                    renderItem={(x)=>{ //or also we can directly do {item,index}
                        return(
                            <Showresturants

                                name={x.item.name} 
                                rate= {x.item.rating}
                                imageResturant= {x.item.image_url}
                            />
                        )
                    }}
                    showsVerticalScrollIndicator={false}
                    />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resturantsConatiner:{
        marginLeft:20,
        marginTop:25,
    },
    imageContainer:{
        height:60,
        width:60,
        backgroundColor:"#0ad9f0",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"

    },
    images:{
        height:50,
        width:50,
        borderRadius:100
    },
    cardContainer:{
        backgroundColor:"white",
        height:80,
        width:'95%',
        backgroundColor:"#f1eff7",
        borderRadius:50,
        shadowColor:"rgba(0,0,0,1)",
        shadowOffset:{width:1,height:1},
        elevation:10,
        shadowOpacity:.1,

        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    meinContText:{
        textTransform:"capitalize",
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10
    },
    stars:{
        color:"gold"
    }
})