import { View , Text } from "react-native";
import Myapi from "./Myapi";


export default function Resturants(){
    async function apicall(){
        const x = await Myapi.get("/search",{
            params:{
                limit:5,
                term:"Desert",
                location:"Toronto"
            }
        });
        console.log(x.data)
    }
    apicall();
    return(
        <View>
            <Text>Resyurants</Text>
        </View>
    )
}