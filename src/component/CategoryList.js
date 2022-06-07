import { Text,View,StyleSheet,Image ,TouchableOpacity } from "react-native";
import {Shadow} from "../common/Shadow"
export default function CategoryList(props){
    return(
        <TouchableOpacity onPress={props.handlePress} >
            <View style={[styles.container,styles.Shadow, props.ind ===0 ? {marginLeft:40} :{marginLeft:30}, props.pressItem ? {backgroundColor:"#38d18a"} : {backgroundColor:"white"} ]}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={props.image} />
                </View>
                <Text style={styles.header}>
                    {props.name.length>9 ? props.name.substr(0,8) : props.name  }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginBottom:10,
        width:70,
        height:90,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        
    },
    Shadow,
    image:{
        height:35,
        width:35,
    },
    imageContainer:{
        backgroundColor:"white",
        borderRadius:50,
        width:43,
        height:43,
        padding:3
    },
    header:{
        marginTop:3,
        fontWeight:"bold"
    }
})