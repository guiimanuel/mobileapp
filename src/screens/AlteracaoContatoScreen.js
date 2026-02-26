import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
    onChangeText,
    text
} from 'react-native';

function AlteracaoContatoScreen({navigation}){
  const route = useRoute();
  const { nome, telefone } = route.params;
  return(
    <View>
      <StatusBar style="auto" />
      
      <View
      style={{
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        alignItems: 'left',
        gap:3,
      }}>
        <Text
        style={{
          fontSize:16,
          textAlign:'left',
          fontWeight:'600'
        }}>
          Nome
          </Text>
        <TextInput
        style={{
          fontSize:14,
          height: 50,
          backgroundColor:'#00000018',
          borderWidth:3,
          borderRadius:10,
          borderColor:'#0080ff',
          fontWeight:500
        }}
        onChangeText={onChangeText}
        value={nome}
        placeholder='Digite o nome do contato...'/>
      </View>
      
      <View
      style={{
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        alignItems: 'left',
        gap:3,
      }}>
        <Text
        style={{
          fontSize:16,
          textAlign:'left',
          fontWeight:'600'
        }}>
          Email
          </Text>
        <TextInput
        style={{
          fontSize:14,
          height: 50,
          backgroundColor:'#00000018',
          borderWidth:3,
          borderRadius:10,
          borderColor:'#0080ff',
          fontWeight:500
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder='Digite o Email do contato...'/>  
        </View>
      <View
      style={{
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        alignItems: 'left',
        gap:3,
      }}>
        <Text
        style={{
          fontSize:16,
          textAlign:'left',
          fontWeight:'600'
        }}>
          Telefone
          </Text>
        <TextInput
        style={{
          fontSize:14,
          height: 50,
          backgroundColor:'#00000018',
          borderWidth:3,
          borderRadius:10,
          borderColor:'#0080ff',
          fontWeight:500
        }}
        onChangeText={onChangeText}
        value={telefone}
        placeholder='Digite o telefone do contato...'/>
      </View>

      <View
        style={{
          cursor: 'pointer',
          marginTop: 15,
          marginLeft: 110,
          marginRight: 110,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor:'#0080ff',
            borderRadius:10,
            padding:10,
          }}
          onPress={() => {
            navigation.navigate('ListaContato');
          }}
        >
          <Text style={{
            color:'white',
            textAlign:'center',
            fontSize:16,
            fontWeight:'600'
          }}>
            Alterar
          </Text>
        </TouchableOpacity>
      </View>
      
      <View
      style={{
        cursor: 'pointer',
        marginTop: 5,
        marginLeft: 110,
        marginRight: 110,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor:'#fb2626b6',
            borderRadius:10,
            padding:10,
          }}
          onPress={() => {
            navigation.navigate('ListaContato');
          }}
        >
          <Text style={{
            color:'white',
            textAlign:'center',
            fontSize:16,
            fontWeight:'600'
          }}>
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AlteracaoContatoScreen;