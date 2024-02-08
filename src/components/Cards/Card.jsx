import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToPanier } from "../../features/CoursesSlice";

const Card = ({course}) => {
    const navigator = useNavigation();

    const dispatch = useDispatch();

    const takeCourse = () => {
        Alert.alert("Alert", "Ajouté au panier avec succès!");
        dispatch(addToPanier(course.id));
    }


  return (
    <Pressable style={styles.container} onPress={()=>navigator.navigate('Cours',
    {course: course}
    )}>
      <Image
        source={{
          uri: course.image,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>{course.title}</Text>
        <Text style={styles.price}>{course.price} $</Text>
      </View>
      <View style={styles.actions}>
        <Entypo name="eye" size={35} color="#1E90FF"  onPress={()=>navigator.navigate('Cours',{course: course})}/>
        <Ionicons name="bag" size={35} color="#1E90FF" onPress={takeCourse }/>
      </View>
    </Pressable>
  );
};

    const styles = StyleSheet.create({
    container: {
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
        padding: 10,
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },

    text: {
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    price: {
        color: "black",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10,

    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginTop: 20,
    },
    });

export default Card;
