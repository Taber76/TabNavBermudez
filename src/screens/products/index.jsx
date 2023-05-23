import React from "react";
import { SafeAreaView, Button, FlatList } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants/index";
import { ProductItem } from "../../components/index";


const Products = ({ navigation, route }) => {
  const { categoryID, categoryColor } = route.params

  const onSelected = (item) => {
    navigation.navigate("Product", { 
      productId: item.id,
      color: categoryColor
     })
  }
  
  const filteredProducts = PRODUCTS.filter(product => product.categorie === categoryID)

  const renderItem = ({ item }) =>  {
    return <ProductItem item={item} onSelected={onSelected} />
  }

  const keyExtractor = (item) => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  )
}

export default Products