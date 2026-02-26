import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { onChangeText, text } from 'react-native';

function CadastroUsuarioScreen({navigation}){
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
        value={text}
        placeholder='Digite seu nome...'/>
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
          CPF
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
        placeholder='Digite seu CPF...'/>
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
        placeholder='Digite seu email...'/>
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
          Senha
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
        placeholder='Digite sua senha...'/>
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
            padding:10
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={{
            color:'white',
            textAlign:'center',
            fontSize:16,
            fontWeight:'600'
          }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
export default CadastroUsuarioScreen;