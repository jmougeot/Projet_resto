import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Bienvenue sur l'écran d'accueil du service</Text>
            <Link href="service/statistique">View stat</Link>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });