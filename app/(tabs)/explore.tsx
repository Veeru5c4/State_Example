import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import useCartStore from '../Models/cartStore';

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartText}>
              {item.name} - ${item.price} x {item.quantity}
            </Text>
            <Button
              title="Remove"
              onPress={() => removeFromCart(item.id)}
            />
          </View>
        )}
      />
      {cart.length > 0 ? (
        <Button title="Clear Cart" onPress={clearCart} />
      ) : (
        <Text>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  cartText: {
    fontSize: 16,
  },
});

export default CartScreen;
