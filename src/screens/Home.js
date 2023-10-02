import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

export default function Home({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Home Screen</Text>
      <Text>Welcome to the Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={{color: 'blue'}}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20
  }
});