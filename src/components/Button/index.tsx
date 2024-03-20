import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Form from '../Form';

interface IProps {
  createTask: (title: string, description: string) => Promise<void>;
}

function Button({createTask}: IProps) {
  const [showForm, setShowForm] = useState(false);

  const showContainer = () => {
    setShowForm(!showForm);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showContainer}>
        <Text style={styles.title}>Criar Tarefa</Text>
      </TouchableOpacity>
      {showForm && (
        <Form
          showForm={showForm}
          setShowForm={setShowForm}
          createTask={createTask}
        />
      )}
    </View>
  );
}

export default Button;
