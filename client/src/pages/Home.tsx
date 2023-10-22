import React, { useState, useCallback } from 'react';
import AppLoading  from 'expo-app-loading';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useFonts } from 'expo-font';

export default function Home({ navigation }) {
  const handleNavigate = () => {
    navigation.navigate('Dashboard');
  };

  const [isLoaded] = useFonts({
    'mono-reg': require("./assets/fonts/AzeretMono_400Regular.ttf"),
    'mono-med': require("./assets/fonts/AzeretMono_500Medium.ttf"),
    'mono-bold': require("./assets/fonts/AzeretMono_700Bold.ttf"),
  });
  
  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Hi, welcome to</Text>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNavigate}
        >
          <View style={styles.customButton}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFECCC',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'mono-bold',
    lineHeight: 50,
    position: 'relative',
    top: -20,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Share Tech Mono Regular',
    lineHeight: 50,
    position: 'relative',
    top: -20,
  },
  image: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    marginTop: 20,
  },
  customButton: {
    width: 253,
    height: 62,
    backgroundColor: '#FFCB12',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});


