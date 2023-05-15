import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  const images: { img: any; data: string }[] = [
    { img: require("../assets/images/items/bread.png"), data: "bread" },
    { img: require("../assets/images/items/coffee.png"), data: "coffee" },
    { img: require("../assets/images/items/deals.png"), data: "deals" },
    { img: require("../assets/images/items/desserts.png"), data: "desserts" },
    {
      img: require("../assets/images/items/fast-food.png"),
      data: "fast foods",
    },
    {
      img: require("../assets/images/items/shopping-bag.png"),
      data: "shopping bag",
    },
    {
      img: require("../assets/images/items/soft-drink.png"),
      data: "soft drink",
    },
    { img: require("../assets/images/items/splash.png"), data: "splash" },
  ];

  return (
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}
      style={{
        marginTop: 5,
        paddingTop: 14,
        paddingBottom: 14,
        backgroundColor: "white",
      }}
      
    >
      {images.map((image: { img: any; data: string }) => (
        <View style = {{alignItems: "center"}} >
          <Image
            source={image.img}
            style={{
              height: 50,
              width: 70,
              marginLeft: 10,
              marginRight: 10,
            }}
          />           
          <Text style = {{fontWeight: 600}}>{image.data}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
