import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C0NlbHXsMpd67_3fP8sauaf7Xy2cDkCNMVcN6imz158sgpE0eFyx_5xK&s=10'}}
      />
      <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 50}}>Ninja Dojo</Text>

      <View style={{marginBottom: 10}}>
        <Text>Seu nome: </Text>
        <TextInput
        placeholder='Digite aqui'
        style={styles.input}
        />
      </View>

      <View style={{marginBottom: 10}}>
        <Text>Sua idade: </Text>
        <TextInput
        keyboardType='numeric'
        placeholder='Digite aqui'
        style={styles.input}
        />
      </View>

      <View style={{marginBottom: 10}}>
        <Text>Seu email: </Text>
        <TextInput
        placeholder='Digite aqui'
        style={styles.input}
        />
      </View>

      <View style={{marginBottom: 10}}>
        <Text>Sua senha: </Text>
        <TextInput
        secureTextEntry={true}
        placeholder='***'
        style={styles.input}
        />
      </View>

      <View style={{marginBottom: 10}}>
        <Text>Confirmar senha: </Text>
        <TextInput
        secureTextEntry={true}
        placeholder='***'
        style={styles.input}
        />
      </View>
      

      <Pressable style={styles.botao_cadastro}>Cadastrar</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   logo: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 2
  },
  botao_cadastro: {
    width: 80,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: 'black',
    color: 'white'
  },
  input:{
    borderWidth: 1,
    borderRadius: 5,
    color: '#a0a0a0',
    padding: 3,
    width: 300
  },
});
