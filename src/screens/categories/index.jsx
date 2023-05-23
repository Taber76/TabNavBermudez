import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { CATEGORIES } from "../../constants/index";
import { CategoryItem } from "../../components/index";

const Categories = ({ navigation }) => {

  const onSelected = (item) => {
    navigation.navigate("Products", {
      categoryID: item.id,
      categoryName: item.name,
      categoryColor: item.color,
    })
  }

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={onSelected} />
  }
  const keyExtractor = (item) => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  )
}

export default Categories