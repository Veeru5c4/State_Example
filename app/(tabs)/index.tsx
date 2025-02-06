import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import useCartStore from '../Models/cartStore';
import { SafeAreaView } from 'react-native-safe-area-context';

const products = [
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 20 },
];

const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <SafeAreaView>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.productItem}>
          <Text style={styles.productText}>{item.name} - ${item.price}</Text>
          <Button title="Add to Cart" onPress={() => addToCart(item)} />
        </View>
      )}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  productText: {
    fontSize: 16,
  },
});

export default ProductList;
