import { ActivityIndicator } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Switch } from "react-native";
import { Slider } from "react-native-elements";
import { TextInput } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <TextInput style={{
      left: 31,
      top: 191,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 196,
      height: 30
    }}></TextInput><Slider thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0} style={{
      left: 73,
      top: 304,
      position: "absolute",
      width: 284,
      height: 40
    }}></Slider><Switch style={{
      left: 86,
      top: 37,
      position: "absolute",
      width: 50,
      height: 25
    }} thumbColor="#c73636"></Switch><Switch style={{
      left: 109,
      top: 93,
      position: "absolute",
      width: 248,
      height: 25,
      transform: "rotate(90deg)"
    }}></Switch><RadioGroup radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="row" style={{
      left: 81,
      top: 390,
      position: "absolute"
    }}></RadioGroup><ActivityIndicator style={{
      left: 55,
      top: 401,
      position: "absolute",
      width: 50,
      height: 50
    }}></ActivityIndicator></View>;
};

export default Untitled1;