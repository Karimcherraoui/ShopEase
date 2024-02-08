import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Data from "../data/Data";
import Card from "../components/Cards/Card";

const Catalogue = () => {
  const course = useSelector((state) => state.Course.courses);
  const panierItems = course.filter((item) => item.selected === false);

  return course.length === 0 ? (
    <Text style={styles.text}>Aucun Course Disponible pour l'instant</Text>
  ) : (
    <FlatList
      data={panierItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card course={item} />}
    />
  );
};

const styles = {
  text: {
    marginTop: "60%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    margin: 10,
  },
};

export default Catalogue;
