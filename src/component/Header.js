import { View,Text,StyleSheet,TextInput } from "react-native";

function Header(){
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.headerFtext}>Grab Your</Text>
            <Text style={styles.headerStext}>Delicious Meal!</Text>
            <TextInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:60,
        marginHorizontal:20,
    },
    headerFtext:{
        fontSize:30,
        fontWeight:"400"
    },
    headerStext:{
        fontSize:40,
        fontWeight:"bold",
    }
})

export default Header;