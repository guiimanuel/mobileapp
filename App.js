import * as React from 'react';
import { TextInput, View, Text, onChangeText, text, showAlert, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';


function LoginScreen({navigation, route}) {
return (
  <View>
    <StatusBar style="auto" />

    <View>
      <Text
      style={{
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#0080ff'
      }}>
        Seja, Bem-Vindo!
      </Text>
    </View>
    {/*Foto perfil*/}
    <View
    style={{
      margin: 'auto',
      marginTop:50,
      marginBottom:70
    }}>
      <Image
      style={{
        width:100,
        height:100,
        borderRadius:50
      }}
      source={require('./assets/images/fotoperfil.png')}
      />
    </View>


    {/*Login*/}
    <View
    style={{
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 15,
      alignItems: 'left',
      gap:3,
    }}>


      <Text
      style={{ fontSize:16,
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


    {/*Senha*/}
    <View
    style={{
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 15,
      alignItems: 'left',
      gap:3,
    }}>
      <Text 
      style={{ fontSize:16,
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
        placeholder='Digite sua senha...'
        />
    </View>


    {/*Buttons*/}
    <View style={{
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
        }}>

      <Text style={{
          color:'white',
          textAlign:'center',
          fontSize:16,
          fontWeight:'600'
      }}>
          Login
      </Text>

      </TouchableOpacity>

    </View>

    <View
    style={{
      cursor: 'pointer',
      marginLeft: 110,
      marginRight: 110,
      marginBottom: 15,
    }}>
      
      <TouchableOpacity
        style={{
          backgroundColor:'#0080ff',
          borderRadius:10,
          padding:10,
        }}
        onPress={() => {
          navigation.navigate('CadastroUsuario')
        }}
      >
        
      <Text style={{
          color:'white',
          textAlign:'center',
          fontSize:16,
          fontWeight:'600'
      }}>
          Cadastre-se
      </Text>

      </TouchableOpacity>
    </View>


  </View>
);
}


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
        source={require('./assets/images/fotoperfil.png')}
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

      {/*Lista*/}
      <FlatList
        data={Dados_Contato}
        renderItem={({ item }) => <Item nome={item.nome} telefone={item.telefone}/>}
        keyExtractor={item => item.id.toString()}
      />


    </View>
  );
}


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


function CadastroContatoScreen({navigation}){
  return(
    <View
    style={{
    }}>
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
          borderColor:'#0080ff'
        }}
        onChangeText={onChangeText}
        value={text}
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
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


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


const Stack = createNativeStackNavigator();


function App(){
return (
<NavigationContainer>

<Stack.Navigator>

<Stack.Screen 
  name="Login" 
  component={LoginScreen}
  options={{
    title: 'Login', 
    headerTitleAlign: 'center',
    headerTitleStyle:{fontWeight:'bold'},
    headerTintColor: '#ffffff',
    headerStyle:{backgroundColor: '#0080ff'},
  }}/>

<Stack.Screen 
  name="ListaContato"
  component={ListaContatoScreen}
  options={({navigation}) => ({
    title: 'Lista de Contatos', 
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('CadastroContato')}>
        <Text style={{color: '#ffffff', fontSize: 32, marginRight: 15}}>+</Text>
      </TouchableOpacity>
    ),
    headerTitleStyle:{fontWeight:'bold'},
    headerTintColor: '#ffffff',
    headerStyle:{backgroundColor: '#0080ff'},
    headerBackVisible: false
})}/>

<Stack.Screen 
  name="CadastroUsuario" 
  component={CadastroUsuarioScreen} 
  options={{
    title: 'Cadastro de Usuário', 
    headerTitleAlign: 'center',
    headerTitleStyle:{fontWeight:'bold'},
    headerTintColor: '#ffffff',
    headerStyle:{backgroundColor: '#0080ff'},
  }}
/>

<Stack.Screen 
name="CadastroContato" 
component={CadastroContatoScreen}
options={{
  title: 'Cadastro de Contato',
  headerTitleAlign: 'center',
  headerTitleStyle:{fontWeight:'bold'},
  headerTintColor: '#ffffff',
  headerStyle:{backgroundColor: '#0080ff'},
}}/>

<Stack.Screen name="AlteracaoContato"
component= {AlteracaoContatoScreen}
options={{
  title: 'Alteração de Contato',
  headerTitleAlign: 'center',
  headerTitleStyle:{fontWeight:'bold'},
  headerTintColor: '#ffffff',
  headerStyle:{backgroundColor: '#0080ff'},
}}/>

</Stack.Navigator>

</NavigationContainer>
);
}

export default App;