import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import af from "./../../assets/img/af.png";
import BaseButtons from "../../components/buttons/baseButtons";

function Home({ navigation }) {
  const [body, setBody] = useState([]);
  const storeData = async () => {
    try {
      return await AsyncStorage.setItem("token");
    } catch (e) {
     // console.log(e);
    }
  };
  useEffect(() => {
    storeData().then(r => {
      if (!r) {
        let auth = [
            <BaseButtons key="login1" title="login" navigation={navigation} to={"Login"} />,
            <BaseButtons key='register1' title="register" navigation={navigation} to={"Register"} />,
        ];
        setBody(auth);
      }
    });
  }, []);

  return (

    <View key="HomeKey">
      <View style={Style.titlePage}>
        <Text style={{textAlign: "center"}}>Action Francaise </Text>
        <Text style={{textAlign: "center"}}>Mulhouse</Text>
      </View>
      <Image source={af} style={Style.homepicture}/>
      <View style={Style.container}>
        {body}
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: Dimensions.get('window').width / 50,

  },
  homepicture: {
    marginRight: "auto",
    marginLeft: "auto",
    resizeMode: "stretch",
    marginTop: "15%",
  },
  titlePage:{
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    marginTop: "10%"
  }
});
export default Home;
