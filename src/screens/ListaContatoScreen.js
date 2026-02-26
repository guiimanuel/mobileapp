import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

function ListaContatoScreen({navigation}){
  const Dados_Contato = [
    {
      id:1,
      nome: 'Guilherme Manuel',
      telefone: '81 99616-7276'

    },
    {
      id:2,
      nome: 'Rodrigues Manuel',
      telefone: '81 99125-8743'
    },
    {
      id:3,
      nome: 'Luísa Lima',
      telefone: '81 99594-6713'
    }
  ];

  const Item = ({nome, telefone}) => (
    <TouchableOpacity style={{
      flexDirection:'row',
      backgroundColor: '#00000016',
      borderBottomWidth: 2,
      borderColor: '#0555ffaf',
      alignItems: 'left',
      padding:10
    }}
      onPress={() => {
          navigation.navigate('AlteracaoContato', { nome, telefone });
        }}>

      <Image
        style={{
          width:50,
          height:50,
          borderRadius:25,
          borderWidth:3,
          borderColor:'#0555ffaf'
        }}
        source={require('../../assets/images/fotoperfil.png')}
      />

      <View style={{
        flexDirection:'column',
        marginLeft:5,
      }}>
      <Text style={{fontSize:16, fontWeight:'600'}}>{nome}</Text>
      <Text style={{fontSize:14, fontWeight:'600', color:'#0080ff'}}>{telefone}</Text>
      </View>

    </TouchableOpacity>
  );

  return(
    <View>
        <StatusBar style="auto" />

      {/*Lista*/}
      <FlatList
        data={Dados_Contato}
        renderItem={({ item }) => <Item nome={item.nome} telefone={item.telefone}/>}
        keyExtractor={item => item.id.toString()}
      />


    </View>
  );
}
export default ListaContatoScreen;