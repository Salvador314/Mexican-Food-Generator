import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, Image, } from 'react-native';

const App: React.FC = () => {
//Put behavior logic here 
const dishes = [
  { name: 'Chalaquiles', image: require('./assets/pizza.jpg') },
  { name: 'Barbacoa', image: require('./assets/sushi.jpg') },
  { name: 'Consome', image: require('./assets/burger.jpg') },
  { name: 'Tacos', image: require('./assets/salad.jpg') },
  { name: 'Huevos con Salchicha', image: require('./assets/pasta.jpg') },
  { name: 'Tamales', image: require('./assets/pizza.jpg') },
  { name: 'Chile Relleno', image: require('./assets/sushi.jpg') },
  { name: 'Menudo', image: require('./assets/burger.jpg') },
  { name: 'Enchiladas', image: require('./assets/salad.jpg') },
  { name: 'Pozole', image: require('./assets/pasta.jpg') },
];
const [currentDish, setCurrentDish] = useState(dishes[0]);

const generateRandomDish = () => {
  const randomIndex = Math.floor(Math.random() * dishes.length);
  setCurrentDish(dishes[randomIndex]);
};
  return (
    //render UI here 
    <View style={styles.container}>
    <Image source={currentDish.image} style={styles.image} />
    <Text style={styles.foodName}>{currentDish.name}</Text>
    <Button title="Generate" onPress={generateRandomDish} />
  </View>
  );
};

//Page styling goes here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
