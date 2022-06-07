import {View,Text,TextInput,StyleSheet} from "react-native";

function Demo2(){
    return(
        <View style={styles.container}>
            <View style={styles.firstDiv}>
                <Text style={[styles.bigBlue,styles.container]} >Hiiii</Text>
            </View>
            <View style={styles.secondDiv} >
                <Text>Hello</Text>
                <Text>Hello</Text>
            </View>
            <View style={styles.thirdDiv}><Text>How are u</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:100,
      flex:1,
      flexDirection:"row"
    },
    bigBlue:{
      color:"rgba(0,0,0,1)",
      fontSize:40,
      fontWeight:"bold"
    },
    firstDiv:{
      backgroundColor:"#e8c1d6",
      height:300,
      width:200,
      flex:2,
    },
    secondDiv:{
      width:100,
      height:100,
      backgroundColor:"#88b9d1",
      flex:2,
    },
    thirdDiv:{
      width:"100%",
      height:50,
      backgroundColor:"#1ee699",
      paddingTop:10,
      flex:2
  
    }
  })

  export default Demo2;