import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ListView, FlatList} from 'react-native';
import { useState } from 'react';
import { estiloTextos } from './misEstilos';

export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');

  const [listaAlumnos, setListaAlumnos] = useState([])

  const limpiarNombre = () => {
    setNombre('');
  };

  const obtenerEmoji = () => {
    const len = nombre.length;

    if (len === 0) return '';   
    if (len <= 5) return '🕸️'; 
    if (len <= 8) return '🎃';    
    if (len <= 10) return '👻';    
    return '🧟‍♂️';                
  };

  function agregarNombre(){
    setListaAlumnos([...listaAlumnos, nombre])
    setNombre('');
  }

  return (
    <View style={styles.container}>

      <Text style={estiloTextos.texto}>
        {nombre ? `Hola, ${nombre} ${obtenerEmoji()}` : `Bienvenido ${obtenerEmoji()}`}
      </Text>

      <TextInput
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <Button title="Agregar Alumno a la Lista" onPress={agregarNombre}></Button>
      <FlatList data={listaAlumnos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => 
      (<Text style={{ color: 'orange', fontSize: 16, marginTop: 5 }}>🧛 {item}</Text>)}/>

    


      <Text style={{ color: 'white', marginBottom: 8 }}>
        Caracteres: {nombre.length}
      </Text>

      <Button title="Limpiar" onPress={limpiarNombre} />

      {/*<Button
        title="Aumentar Contador"
        onPress={() => setContador(contador + 1)}
      />*/}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: 200,
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
});
