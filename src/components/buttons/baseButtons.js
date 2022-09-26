import React from "react";
import { Button, Text, TouchableOpacity, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

function BaseButtons({ title, onPress, navigation, to }) {

  return (
    <View style={{ marginTop: 10 , padding: 10}}>
      <TouchableOpacity onPress={() => {
        navigation.navigate(to);
      }} >
        <LinearGradient
          colors={["#004d40", "#009688"]}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 150,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default BaseButtons;
