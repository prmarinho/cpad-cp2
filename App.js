import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (item.trim() === '') {
      return;
    }

    const novoItem = {
      id: Date.now().toString(),
      nome: item.trim(),
    };

    setLista([...lista, novoItem]);
    setItem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item"
          value={item}
          onChangeText={setItem}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>

      <FlatList
        data={lista}
        keyExtractor={(elemento) => elemento.id}
        renderItem={({ item: elemento }) => (
          <View style={styles.card}>
            <Text style={styles.textoItem}>{elemento.nome}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginRight: 10,
  },
  card: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  textoItem: {
    fontSize: 18,
  },
});
