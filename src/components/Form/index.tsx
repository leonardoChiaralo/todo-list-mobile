import React, {FormEvent, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

interface IProps {
  showForm: boolean;
  setShowForm: (boolean: boolean) => void;
  createTask: (title: string, description: string) => void;
}

function Form({showForm, setShowForm, createTask}: IProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    if (!title) return;
    createTask(title, description);
    setTitle('');
    setDescription('');
    setShowForm(false);
  }

  function handleCancel() {
    setShowForm(false);
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Escreva sua tarefa aqui!"
        placeholderTextColor={'#ffffff3a'}
      />
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
        value={description}
        placeholder="Descreva sua tarefa aqui!"
        placeholderTextColor={'#ffffff3a'}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  form: {
    marginTop: 5,
    width: '100%',
    backgroundColor: '#5d6d7e',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    color: '#f0f3f4',
    fontWeight: 'bold',
  },
  textArea: {
    width: '80%',
    backgroundColor: '#283747',
    borderWidth: 1,
    borderColor: '#283747',
    borderRadius: 5,
    color: '#f0f3f4',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: '30%',
    height: 25,
    backgroundColor: '#283747',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f0f3f4',
    fontWeight: 'bold',
  },
});
