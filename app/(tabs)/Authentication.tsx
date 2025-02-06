// Authentication.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Models/authSlice';
import { RootState } from '../Models/store';

const Authentication = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  const handleLogin = () => {
    dispatch(
      login({
        id: '1',
        name: 'John Doe',
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {authState.isAuthenticated ? (
        <>
          <Text style={styles.text}>Welcome, {authState.user?.name}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Please log in</Text>
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Authentication;
