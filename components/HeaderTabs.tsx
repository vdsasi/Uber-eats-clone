import { View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Props } from '../Types'

export default function HeaderTabs() {

  const [selected, setSelected] = useState<String>("Delivery");

  const handleSwitch = (value)  => {
    setSelected(value);
  }

  return (
    <View style ={{
      flexDirection: "row",
      marginTop: 20,
     
      alignSelf: "center"
    }}>
      <HeaderButton text = "Delivery" selected = {selected} switch = {handleSwitch}/>
      <HeaderButton text = "pickup" selected = {selected}  switch = {handleSwitch}/>
    </View>
  )
}

const HeaderButton = (props: Props) => (
  <View>
    <TouchableOpacity style = {{
      backgroundColor: props.text === props.selected ? "black" : "white",
      paddingTop: 7,
      paddingBottom: 7,
      paddingLeft: 15, 
      paddingRight: 15,
      marginLeft: 3,
      marginRight: 3,
      borderRadius: 50,
    }}
    onPress = {(e) => props.switch(props.text)}
    >
      <Text style= {{
        color: props.text == props.selected ? "white": "black",
        fontSize: 16,
        fontWeight: 900,
      }}>{props.text}</Text>
    </TouchableOpacity>
  </View>
)

const styles = {

}
