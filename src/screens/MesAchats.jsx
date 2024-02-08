import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const MesAchats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const totalAchat = useSelector((state) => state.Achats.achats);

  return (
    <ScrollView style={Styles.container}>
      {totalAchat.length === 0 ? (
        <View>
          <Text style={Styles.text}>Vous n'avez pas d'achats</Text>
        </View>
      ) 
      : (
        totalAchat.map((item, index) => {
          return (
            <View style={Styles.info} key={index}>
              <Text style={Styles.text}>{item.totalPrice} $</Text>
              <Text style={Styles.text}>{item.date} </Text>
            </View>
          );
        })
      )}
      {isVisible ? (
        <Ionicons
          style={Styles.plus}
          name="add-circle"
          size={34}
          color="black"
          onPress={() => setIsVisible(false)}
        />
      ) : (
        <>
          <AntDesign
            style={Styles.plus}
            name="minuscircle"
            size={24}
            color="black"
            onPress={() => setIsVisible(true)}
          />

          <View style={Styles.line}></View>
          {totalAchat.map((item,index)=>{
            return (
          <View>
            <View style={Styles.achats} key={index} >
            {item.names.map((name, idx) => (
      <View key={idx} style={Styles.infoAchats}>
        <Text style={Styles.coursName}>{name}</Text>
        <Text style={Styles.priceAchat}>{item.prices[idx]} $</Text>
      </View>
    ))}
              <View style={Styles.lineSmall}></View>

            </View>
          </View>
            )
          })}
        </>
      )}
    </ScrollView>
  );
};

const Styles = {
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
    paddingVertical: 20,
    paddingBottom: 40,
    flexDirection: "column",

  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plus: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    marginTop: 30,
  },
  achats: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // padding: 10,
  },
    priceAchat: {
        color: "gray",
        fontSize: 15,
        fontWeight: "bold",
    },
    coursName: {
        color: "#228B22",
        fontSize: 15,
        fontWeight: "bold",
    },
    infoAchats: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,

    },
    lineSmall: {
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        marginTop: 10,


    },
};
export default MesAchats;
