import { View, Text, Button, Pressable, Alert, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeCourse , removeAllCourses } from "../features/CoursesSlice";
import { addAchat } from "../features/AchatSlice";
import moment from 'moment';


const Panier = () => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.Course.courses);
  const panierItems = course.filter((item) => item.selected);
  const totalPrice = panierItems
  .reduce((acc, item) => acc + item.price, 0)
  .toFixed(2);
  const names = panierItems.map((item) => item.title);
  const prices = panierItems.map((item) => item.price);



  const handleDelete = (id) => {
    Alert.alert("Alert", "Supprimé du panier avec succès!")
    dispatch(removeCourse(id));
  };
  const handlePayer = () => {
    Alert.alert("Alert", "Paiement effectué avec succès!");
    const date =moment().format('L,LTS');
    const newAchat = {totalPrice,date,names,prices}
    dispatch(addAchat(newAchat))
    dispatch(removeAllCourses());
  }

  return (
  
    <ScrollView>
    {panierItems.length === 0 ? (
      <View>
        <Text style={Styles.textVide}>Votre panier est vide</Text>
      </View>
    ) : (
      panierItems.map((item, index) => (
        <View key={index}>
          <View style={Styles.cours}>
            <Text style={Styles.text}>{item.title}</Text>
            <View style={Styles.action}>
              <Text style={Styles.text}>{item.price} $</Text>
              <MaterialIcons
                name="delete-sweep"
                size={24}
                color="red"
                onPress={() => handleDelete(item.id)}
              />
            </View>
          </View>
        </View>
      ))
    )}
  
    <View style={Styles.paye}>
      <Text style={Styles.total}>
        Total : <Text style={Styles.price}>{totalPrice} $</Text>
      </Text>
      {panierItems.length === 0 ? (
      <Pressable disabled style={Styles.buttonDisabled} >
        <Text style={Styles.buttonText}>Payer</Text>
      </Pressable>
    ) : (
      <Pressable  style={Styles.button} onPress={handlePayer}>
        <Text style={Styles.buttonText}>Payer</Text>
      </Pressable>
    )}
    </View>
  </ScrollView>
  );
};

export default Panier;

const Styles = {
  cours: {
    backgroundColor: "snow",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  paye: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#ED7F10",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "green",
  },
  textVide: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  buttonDisabled: {
    backgroundColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
};
