import firebase from "../../config/firebaseconfig"
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput} from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Styles from "./styles.js"


function Pg3({navigation}) {
  const [importancia, setImportancia] = React.useState("");
  const [satisfacao, setSatisfacao] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  const data = async (imp, sat, fb) => {
    try {
      await AsyncStorage.setItem("imp3", JSON.stringify(imp));
      await AsyncStorage.setItem("sat3", JSON.stringify(sat));
      await AsyncStorage.setItem("fb3", JSON.stringify(fb));
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
          3. Qualidade de apostilas, livros e textos, quanto a impressão e a adequação da informação
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
            onPress={() => (setChecked('alta'),firebase.database().ref('avaliacoes/').push('alta'))}
            
          />

          {/* - Media Radio - */}
          <RadioButton.Item
            value="media"
            label="Média"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            onPress={() => (setChecked('media'),firebase.database().ref('avaliacoes/').push('media'))}
          />

          {/* - Baixa Radio - */}
          <RadioButton.Item
            value="baixa"
            label="Baixa"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            onPress={() => (setChecked('baixa'),firebase.database().ref('avaliacoes/').push('baixa'))}
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
            onPress={() => (setChecked('otimo'),firebase.database().ref('avaliacoes/').push('otimo'))}
          />
          <RadioButton.Item
            value="bom"
            label="Bom"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            onPress={() => (setChecked('bom'),firebase.database().ref('avaliacoes/').push('bom'))}
          />
          <RadioButton.Item
            value="regular"
            label="Regular"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            onPress={() => (setChecked('regular'),firebase.database().ref('avaliacoes/').push('regular'))}
          />
          <RadioButton.Item
            value="ruim"
            label="Ruim"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            onPress={() => (setChecked('ruim'),firebase.database().ref('avaliacoes/').push('ruim'))}
          />
          {/* - Não se aplica Radio - */}
          <RadioButton.Item
            value="nao-se-aplica"
            label="Não se aplica"
            color="#C22A1F"
            uncheckedColor="#FFFFFF"
            labelStyle={Styles.text}
            onPress={() => (setChecked('nao-se-aplica'),firebase.database().ref('avaliacoes/').push('nao-se-aplica'))}
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

        
        {satisfacao === "" ||
        importancia === "" ||
        ((satisfacao === "regular" || satisfacao === "ruim") &&
          feedback === "") ? (
          <TouchableOpacity 
            disabled={true}
            style={Styles.buttonProx}
            onPress={() => (navigation.navigate("pg4"), data(importancia, satisfacao, feedback))}
            >
            <Text style={Styles.textButtomProx}>Proximo</Text>
          </TouchableOpacity>
        ) : (
        <TouchableOpacity
          style={Styles.buttonProx}
          onPress={() => (navigation.navigate("pg4"), data(importancia, satisfacao, feedback))} 
          >
          <Text style={Styles.textButtomProx}>Proximo</Text>
        </TouchableOpacity>
        )}
      </View>
  )
};

export default Pg3;