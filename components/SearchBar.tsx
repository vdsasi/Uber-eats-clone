import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style ={{flexDirection: "row", alignItems: "center",height: 60}}>
    <View 
    style = {{
      flex: 1,
      marginTop: 10,
      marginLeft: 15,
      borderRadius: 50,
      marginRight: 15,
      backgroundColor: "#eee"
      
    }}>
      <View style = {{flexDirection: "row", alignItems: "center"}}>
        <Ionicons name = "location-sharp" size = {24} style = {{padding: 12 }}/>
        <TextInput 
          style = {{
            flex: 1,
            height: 50,
            borderRadius: 50,
            fontWeight: "600", 
            fontSize: 17
          }}
          cursorColor="black"
          
        />
        <View 
          style = {{
            backgroundColor: "white",
            marginRight: 10,
            padding: 8,
            borderRadius: 50, 
            flexDirection: "row",
            alignItems: "center"
          }}
        >

          <AntDesign 
            name = "clockcircle" 
            size = {11}
            style = {{marginRight: 6}}
          />
          <Text>Search</Text>
        </View>
      </View>
    </View>
    
    <Ionicons name = "funnel" size = {20} style = {{paddingRight: 5, paddingTop: 5, marginTop: 5, marginRight: 5,}}/>
  
    </View>
  )
}