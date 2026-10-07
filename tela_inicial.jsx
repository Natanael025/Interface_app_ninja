import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function App() {
  return (
    <View style={style_geral.container}>
      <View style={style_section.head}>
        <Text style={style_texto.title}>NINJA DOJO</Text>
        <Image 
        style={style_geral.logo}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C0NlbHXsMpd67_3fP8sauaf7Xy2cDkCNMVcN6imz158sgpE0eFyx_5xK&s=10'}}
        />
      </View>

      <View style={style_section.body}>
        <ScrollView style={{padding: 15}}>
          <View style={style_geral.perfilContainer}>
            <Image 
              style={style_geral.avatar}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpaHPtv0wpHdN6zCYfPK3eMIfnrX9P9x7PJnhfOMniZg&s=10'}}
            />
            <View>
              <Text style={style_texto.perfilNome}>Shinobi Aprendiz</Text>
              <Text style={style_texto.perfilRank}>Faixa: Branca | Nível: 1</Text>
            </View>
          </View>

          <Pressable style={style_components.card}>
            <Image 
              style={style_components.cardImage}
              source={{uri: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=200'}}
            />
            <View style={style_components.cardTextContainer}>
              <Text style={style_texto.cardTitle}>Arte da Furtividade</Text>
              <Text style={style_texto.cardDesc}>Aprenda a mover-se pelas sombras sem ser detectado.</Text>
            </View>
          </Pressable>

          <Pressable style={style_components.card}>
            <Image 
              style={style_components.cardImage}
              source={{uri: 'https://niten.org.br/uploads/rei/31841/banner_iai-landscape600.jpg'}}
            />
            <View style={style_components.cardTextContainer}>
              <Text style={style_texto.cardTitle}>Manejo de Katana</Text>
              <Text style={style_texto.cardDesc}>
              Fundamentos do combate corpo a corpo com espadas.
              </Text>
            </View>
          </Pressable>

          <Pressable style={style_components.card}>
            <Image 
              style={style_components.cardImage}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_-Q0hgl7kPCOpCCrdVXyLVVvqWY3xB6aA5oXr3nYkA&s=10'}}
            />
            <View style={style_components.cardTextContainer}>
              <Text style={style_texto.cardTitle}>Meditação</Text>
              <Text style={style_texto.cardDesc}>Controle sua mente, foco e respiração antes da batalha.</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

      <View style={style_section.footer}>
          <Pressable style={style_components.tab}>
            <Text style={style_texto.tabTextActive}>Treino</Text>
          </Pressable>
          <Pressable style={style_components.tab}>
            <Text style={style_texto.tabText}>Missões</Text>
          </Pressable>
          <Pressable style={style_components.tab}>
            <Text style={style_texto.tabText}>Dojo</Text>
          </Pressable>
      </View>
      
      <StatusBar style={'light'}/>
    </View>
  );
}

const style_geral = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f14',
    maxWidth: 400,
  },
  logo: {
    width: 45, height: 45, borderRadius: 3, marginRight: 5
  },
  perfilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a24',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderColor: '#d32f2f',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: '#333'
  }
});

const style_texto = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginLeft: 15,
    letterSpacing: 2,
  },
  perfilNome: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  perfilRank: {
    color: '#a0a0a0',
    fontSize: 14,
    marginTop: 2,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDesc: {
    color: '#a0a0a0',
    fontSize: 13,
  },
  tabText: {
    color: '#a0a0a0',
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#d32f2f',
    fontSize: 14,
    fontWeight: 'bold',
  }
});

const style_section = StyleSheet.create({
  head: {
    borderBottomWidth: 1,
    borderColor: '#a0a0a0',
    justifyContent:'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flex:1.5
  },
  body: {
    borderColor: 'white',
    flex:9
  },
  footer: {
    borderTopWidth: 2,
    borderColor: '#a0a0a0',
    flex:1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#14141c',
  },
});

const style_components = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a24',
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardTextContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  tab: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
