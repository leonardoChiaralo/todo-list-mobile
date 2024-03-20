import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

interface IProps {
  showForm: boolean;
  setShowForm: (boolean: boolean) => void;
  createTask: (title: string, description: string) => void;
}

function Form({setShowForm, createTask}: IProps) {
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
