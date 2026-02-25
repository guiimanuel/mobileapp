import * as React from 'react';
import { StyleSheet, TextInput, View, Text, Button, onChangeText, text, showAlert, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { StackScreen } from 'react-native-screens';


function LoginScreen({navigation, route}) {
return (
  <View>
    <StatusBar style="auto" />


    {/*Foto perfil*/}
    <View
    style={{
      margin: '0 auto'
    }}>
      <Image
      style={{
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
      }}
      source={require('./assets/images/fotoperfil.png')}
      />
    </View>


    {/*Login*/}
    <View
    style={{
      display:'flex',
      gap:5
    }}>


      <Text>
        Email
      </Text>
      <TextInput
        style={{
          borderWidth:1,
          padding:10,
          width:330,
          marginBottom:15
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder='Digite seu email...'/>
    </View>


    {/*Senha*/}
    <View
    style={{display:'flex',
      gap:5
    }}>
      <Text>
        Senha
      </Text>
      <TextInput
        style={{
          borderWidth:1,
          padding:10,
          width:330,
          marginBottom:15
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder='Digite sua senha...'
        />
    </View>


    {/*Buttons*/}
    <View>
      <Button
        style={{
          width:330,
          height:50,
          marginTop:10
        }}
        title='Login'
        onPress={() => showAlert('Botao login pressionado')}
      />
    </View>


    <View>
      <Button
      style={{
          width:330,
          height:50
        }}
      title='Cadastre-se'
      onPress={() => showAlert('Botao cadastre-se pressionado')}
      />
    </View>


  </View>
);
}


function ListaContatoScreen({navigation}){
  return(
    <ScrollView>
      <StatusBar style="auto" />


      {/* Header*/}
      <View style={{backgroundColor: '#006aff'}}>
        <Text>Lista de Contatos</Text>
      </View>


      {/*Lista*/}
      <View>


      </View>


    </ScrollView>
  );
}


function CadastroUsuarioScreen({navigation}){
 
}


function CadastroContatoScreen({navigation}){
 
}


function AlteracaoContatoScreen({navigation}){
 
}


const Stack = createNativeStackNavigator();


function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen}/>
<Stack.Screen name="ListaContato" component={ListaContatoScreen}/>
<Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen}/>
<Stack.Screen name="CadastroContato" component={CadastroContatoScreen}/>
<Stack.Screen name="AlteracaoContato" component= {AlteracaoContatoScreen}/>
</Stack.Navigator>
</NavigationContainer>
);
}


export default App;

