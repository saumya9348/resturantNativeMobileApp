import { View , Text ,Image,StyleSheet} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

function Showresturants(props){
    return(
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.images} source={{uri:props.imageResturant}} />
                </View>
                <View>
                    <Text>{props.name} {props.rate} <FontAwesome style={styles.stars} name="star" size={20} /> </Text>
                    
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    cardContainer:{
        backgroundColor:"white",
        height:80,
        width:'95%',
        backgroundColor:"#f1eff7",
        borderRadius:50,
        marginBottom:15,
        shadowColor:"rgba(0,0,0,1)",
        shadowOffset:{width:1,height:1},
        elevation:10,
        shadowOpacity:.1,
        alignSelf:"stretch",

        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
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
    stars:{
        color:"gold"
    }
})

export default Showresturants;