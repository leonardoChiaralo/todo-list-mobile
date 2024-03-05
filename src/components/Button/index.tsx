import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  title: {
    color: '#f0f3f4',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
