import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';

const notList = [
  { id: 1, quote: 'Não caia no golpe!', author: 'Dj Guuga', profile: 'https://cdns-images.dzcdn.net/images/artist/1b8b8340ebadb58a84bceffe76fb2c49/500x500.jpg'},
  { id: 2, quote: 'Não mande mensagem para o/a ex!', author: 'Platão', profile: 'https://beduka.com/blog/wp-content/uploads/2018/08/principais-ideias-platao.jpg' },
  { id: 3, quote: 'Não esqueça comida na AirFryer!', author: 'lesimoes', profile: 'https://instagram.fjdf2-2.fna.fbcdn.net/v/t51.2885-15/e35/122659455_911069906090950_7315811562022135992_n.jpg?se=7&tp=1&_nc_ht=instagram.fjdf2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FuBPuxpWtREAX-T1Sjs&edm=AABBvjUAAAAA&ccb=7-4&oh=6c92d3a6b44a19f6e79ee978ab987103&oe=60A9D840&_nc_sid=83d603'},
  { id: 4, quote: 'Não responda stories bêbado!', author: 'lesimoes', profile: 'https://instagram.fjdf2-2.fna.fbcdn.net/v/t51.2885-15/e35/122659455_911069906090950_7315811562022135992_n.jpg?se=7&tp=1&_nc_ht=instagram.fjdf2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FuBPuxpWtREAX-T1Sjs&edm=AABBvjUAAAAA&ccb=7-4&oh=6c92d3a6b44a19f6e79ee978ab987103&oe=60A9D840&_nc_sid=83d603' },
  { id: 5, quote: 'Não deixe a roupa lavada na máquina!', author: 'lesimoes', profile: 'https://instagram.fjdf2-2.fna.fbcdn.net/v/t51.2885-15/e35/122659455_911069906090950_7315811562022135992_n.jpg?se=7&tp=1&_nc_ht=instagram.fjdf2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FuBPuxpWtREAX-T1Sjs&edm=AABBvjUAAAAA&ccb=7-4&oh=6c92d3a6b44a19f6e79ee978ab987103&oe=60A9D840&_nc_sid=83d603' },
  { id: 6, quote: 'Não deixe as coisas para ultima hora', author: 'lesimoes', profile: 'https://instagram.fjdf2-2.fna.fbcdn.net/v/t51.2885-15/e35/122659455_911069906090950_7315811562022135992_n.jpg?se=7&tp=1&_nc_ht=instagram.fjdf2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FuBPuxpWtREAX-T1Sjs&edm=AABBvjUAAAAA&ccb=7-4&oh=6c92d3a6b44a19f6e79ee978ab987103&oe=60A9D840&_nc_sid=83d603' },
  { id: 7, quote: 'Não esqueça a cerveja no congelador', author: 'lesimoes', profile: 'https://drive.google.com/file/d/1LJBKqK8b89_lyBGFA5bjg8NxQOo_vUi1/view?usp=sharing' },
]

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#c64242"
       />
      <FlatList
        data={notList}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote
            quote={item.quote}
            author={item.author}
            profileImg={item.profile}
          />
        }
      >

      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});