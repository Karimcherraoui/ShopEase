import { View, Text, Image, StyleSheet, Pressable, Alert, ScrollView } from "react-native";
import { useDispatch,useSelector } from 'react-redux';
import React from "react";
import { addToPanier } from "../features/CoursesSlice";

const Cours = (course) => {
  const dispatch = useDispatch();
  const { description, image, price, id,title } = course.route.params.course;


  const handleAchat = () => {
    Alert.alert("Alert", "Ajouté au panier avec succès!");
    dispatch(addToPanier(id))
  };

  return (
    <ScrollView>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.descContainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.price}>
        <Pressable style={styles.button} onPress={handleAchat}>
          <Text style={styles.buttonAchat}>Ajouter au panier</Text>
        </Pressable>
        <Text style={styles.textPrice}>{price} $</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },

  description: {
    padding: 10,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,

    fontSize: 16,
  },
  descContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
    backgroundColor: "#1E90FF",
    paddingBottom: 60,
    paddingTop: 20,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textPrice: {
    color: "#00FF00",
    borderColor: "red",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonAchat: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "#1E90FF",
  },
});

export default Cours;
