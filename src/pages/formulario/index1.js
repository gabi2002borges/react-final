import firebase from "../../config/dados"
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import { RadioButton } from "react-native-paper";
import MaterialButtonTransparentHamburger from "../../public/components/MaterialButtonTransparentHamburger2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "./styles.js"

function Pg1({navigation}) {
  const [importancia, setImportancia] = React.useState("");
  const [satisfacao, setSatisfacao] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  const data = async (imp, sat, fb) => {
    try {
      await AsyncStorage.setItem("imp1", JSON.stringify(imp));
      await AsyncStorage.setItem("sat1", JSON.stringify(sat));
      await AsyncStorage.setItem("fb1", JSON.stringify(fb));
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
     
          <Text style={Styles.textQ1}>
            1. Limpeza e conservação da sala de aula e da oficina
          </Text>

        <Text style={Styles.questionLabel}>Nivel de Importancia:</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setImportancia(newValue)}
          value={importancia}
        >
          
          {/* - Alta Radio - */}
          <RadioButton.Item
            value="alta"
            label="Alta"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
            
          />

          {/* - Media Radio - */}
          <RadioButton.Item
            value="media"
            label="Média"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />

          {/* - Baixa Radio - */}
          <RadioButton.Item
            value="baixa"
            label="Baixa"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />
        </RadioButton.Group>

        <RadioButton.Group
          onValueChange={(newValue) => setSatisfacao(newValue)}
          value={satisfacao}
        >
          <Text style={Styles.questionLabel}>Nivel de Satisfação:</Text>
          <RadioButton.Item
            value="otimo"
            label="Ótimo"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />
          <RadioButton.Item
            value="bom"
            label="Bom"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />
          <RadioButton.Item
            value="regular"
            label="Regular"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />
          <RadioButton.Item
            value="ruim"
            label="Ruim"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />
          {/* - Não se aplica Radio - */}
          <RadioButton.Item
            value="nao-se-aplica"
            label="Não se aplica"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            
          />
        </RadioButton.Group>

        {satisfacao === "regular" || satisfacao === "ruim" ? (
          <View>
            <Text style={Styles.questionLabel}>
              Envie seu feedback para melhorarmos:
            </Text>
            <TextInput
              style={Styles.input}
              placeholder="Digite aqui"
              placeholderTextColor="white"
              multiline={true}
              numberOfLines={4}
              defaultValue={feedback}
              onChangeText={(newValue) => setFeedback(newValue)}
            />
          </View>
        ) : null}

        <MaterialButtonTransparentHamburger
            style={styles.bTNicon2}
            onPress={() => navigation.push("Sobre")}
        ></MaterialButtonTransparentHamburger>
        {/* <TouchableOpacity
          style={Styles.buttonVol}
          onPress={() => navigation.push("Sobre")}
          >
          <Text style={Styles.textButtomVol}>Voltar</Text>
        </TouchableOpacity> */}

        {satisfacao === "" ||
        importancia === "" ||
        ((satisfacao === "regular" || satisfacao === "ruim") &&
          feedback === "") ? (
          <TouchableOpacity 
            disabled={true}
            style={Styles.buttonProx1}
            onPress={() => (navigation.navigate("pg2"), data(importancia, satisfacao, feedback))}
            >
            <Text style={Styles.textButtomProx1}>Proximo</Text>
          </TouchableOpacity>
        ) : (
        <TouchableOpacity
          style={Styles.buttonProx1}
          onPress={() => (navigation.navigate("pg2"), data(importancia, satisfacao, feedback))} 
          >
          <Text style={Styles.textButtomProx1}>Proximo</Text>
        </TouchableOpacity>
        )}
        
      </View>
  )
};

export default Pg1;
