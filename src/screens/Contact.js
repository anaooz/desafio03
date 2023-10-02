import { View, Text, StyleSheet } from 'react-native';

export default function Contact() {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Contact Screen</Text>
      <Text>Welcome to the Contact screen</Text>
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