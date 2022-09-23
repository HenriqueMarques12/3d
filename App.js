import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import Cards from "./src/Components/Cards";
import Slider from "@react-native-community/slider";
import { CheckBox } from "@rneui/themed";

export default () => {
  const [check1, setCheck1] = useState(0);
  const [velo, setVeloValue] = useState(50);
  const [quant, setQuant] = useState(25);
  const [ang, setAng] = useState(180);

  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentbox}>
        <View style={styles.contentbox}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>
        <Cards top={50}>
          <View>
            <Text style={styles.label}>Velocidade</Text>
            <Slider
              style={{ width: "100%", height: 20 }}
              minimumValue={0}
              maximumValue={100}
              value={velo}
              onValueChange={(v) => setVeloValue(v)}
              minimumTrackTintColor="#0071E3"
              maximumTrackTintColor="#D1D1D1"
              thumbTintColor="#0071E3"
            />
            <Text style={styles.TextInput}>{Math.floor(velo)} rpm</Text>
          </View>
          <View>
            <Text style={styles.label}>Quantidade de fotos</Text>
            <Slider
              style={{ width: "100%", height: 20 }}
              minimumValue={0}
              maximumValue={50}
              value={quant}
              onValueChange={(v) => setQuant(v)}
              minimumTrackTintColor="#0071E3"
              maximumTrackTintColor="#D1D1D1"
              thumbTintColor="#0071E3"
            />
            <Text style={styles.TextInput}>{Math.floor(quant)} Fotos</Text>
          </View>
          <View>
            <Text style={styles.label}>Direção</Text>
            <View style={styles.containerCheckbox}>
              <CheckBox
                textStyle={styles.TextInput2}
                containerStyle={styles.checkbox}
                center={false}
                title="Horário"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={check1 == 0 ? true : false}
                onPress={() => setCheck1(0)}
                uncheckedColor="#555555"
                checkedColor="#0071E3"
              />
              <CheckBox
                textStyle={styles.TextInput2}
                containerStyle={styles.checkbox}
                center={false}
                title="Anti-Horário"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={check1 == 1 ? true : false}
                onPress={() => setCheck1(1)}
                uncheckedColor="#555555"
                checkedColor="#0071E3"
              />
            </View>
          </View>
        </Cards>
        <Cards top={25}>
          <View>
            <Text style={styles.label}>Ângulo da plataforma</Text>
            <Slider
              style={{ width: "100%", height: 20 }}
              minimumValue={0}
              maximumValue={360}
              value={ang}
              onValueChange={(v) => setAng(v)}
              minimumTrackTintColor="#0071E3"
              maximumTrackTintColor="#D1D1D1"
              thumbTintColor="#0071E3"
            />
            <Text style={styles.TextInput}>{Math.floor(ang)}°</Text>
          </View>
          <View style={styles.setaBox}>
            <View style={styles.seta}>
              <Image source={require("./assets/playe.png")} />
            </View>
            <View style={styles.seta}>
              <Image source={require("./assets/play.png")} />
            </View>
          </View>
        </Cards>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>INICIAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentbox}>
        <Text style={styles.footerText}>PHOTO 360</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Platform.OS == "ios" ? 40 : 35,
    paddingHorizontal: 20,
  },
  contentbox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#111",
    fontFamily: "PoppinsMedium",
    padding: 10,
  },
  TextInput: {
    fontSize: 11,
    color: "#9f9f9f",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: 10,
  },
  TextInput2: {
    fontSize: 11,
    color: "#9f9f9f",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  containerCheckbox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkbox: {
    backgroundColor: "transparent",
    width: "28%",
    paddingHorizontal: 0,
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },
  setaBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seta: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#0071E3",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "40%",
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0071E3",
    borderRadius: 8,
    marginTop: 40,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    color: "#fff",
  },
  logo: {
    height: 40,
  },
  footerText: {
    fontSize: 12,
    fontFamily: "PoppinsMedium",
    color: "#D1D1D1",
  },
});
