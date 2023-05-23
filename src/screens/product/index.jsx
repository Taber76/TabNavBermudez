import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants";

const Product = ({ route }) => {
  const { productId } = route.params

  const item = PRODUCTS.find(product => product.id === productId)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}>
          <View>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View>
            <Text style={styles.price}>${item.price}</Text>
          </View>
      </TouchableOpacity>
    </View>
  )
}

export default Product