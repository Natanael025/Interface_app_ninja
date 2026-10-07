// Natanael Vieira Guilherme

import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image 
        style={styles.logo}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C0NlbHXsMpd67_3fP8sauaf7Xy2cDkCNMVcN6imz158sgpE0eFyx_5xK&s=10'}}
        />
        <Text style={styles.title}>Ninja Dojo</Text>
        <Text style={styles.paragraph1}>Onde grandes mestres são moldados...</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.paragraph2}>v1.0 - Natanael Vieira</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f14',
  },
  body: {
    flex:6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: 'gray'
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5
  },
  paragraph1: {
    color: '#fff',
    fontSize: 12
  },
  paragraph2: {
    color: '#888',
  }
});
