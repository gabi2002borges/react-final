import React from "react";
import firebase from "../../config/dados"
import * as Dados from "../../config/dados"
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import Styles from "./styles";

function Anonimo({ navigation }) {
  const [anonimo, setAnonimo] = React.useState("");

  const data = async (anon) => {
    try {
      await AsyncStorage.setItem("anon", JSON.stringify(anon));
      Dados.default()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.navbar}>
        <View style={Styles.backNavbar}>
        </View>
      </View>
        <Text style={Styles.questionLabel}>
          Deseja enviar o formulario anonimamente?{" "}
        </Text>
        <RadioButton.Group
          onValueChange={(newValue) => setAnonimo(newValue)}
          value={anonimo}
        >
          {/* - Sim Radio - */}
          <RadioButton.Item
            value="Sim"
            label="Sim"
            color="#C22A1F"
            labelStyle={Styles.text}
          />

          {/* - Não Radio - */}
          <RadioButton.Item
            value="Não"
            label="Não"
            color="#C22A1F"
            labelStyle={Styles.text}
          />
        </RadioButton.Group>

      {anonimo === "" ? (
        <TouchableOpacity 
            style={Styles.buttonProx} 
            disabled={true} 
            onPress={() => (navigation.navigate("Final"), data(anonimo))}>
            <Text style={Styles.textButtomProx}>Finalizar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={Styles.buttonProx}
          onPress={() => (
            navigation.navigate("Final"), data(anonimo))}>
          <Text style={Styles.textButtomProx}>Finalizar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Anonimo;