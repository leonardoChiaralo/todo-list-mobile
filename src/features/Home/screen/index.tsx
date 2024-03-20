import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ITask} from '../../../interfaces/task';
import styles from './styles';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Header from '../../../components/Header';
import Tasks from '../../../components/Tasks';
import Button from '../../../components/Button';

function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    readTasks();
  }, []);

  const createTask = async (title: string, description: string) => {
    const newTask = {
      title,
      description,
      isCompleted: false,
    };

    try {
      await axios.post('http://192.168.170.31:3030/tasks', newTask);
      Toast.show({
        type: 'success',
        text1: 'Tarefa criada com sucesso!',
      });
      readTasks();
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível criar a tarefa.',
      });
    }
  };

  const readTasks = async () => {
    try {
      const response = await axios.get('http://192.168.170.31:3030/tasks');
      setTasks(response.data);
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível encontrar suas tarefas.',
      });
    }
  };

  const updateTask = async (id: string, title: string, description: string) => {
    try {
      await axios.put(`http://192.168.170.31:3030/tasks/${id}`, {
        title,
        description,
      });
      readTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://192.168.170.31:3030/tasks/${id}`);
      Toast.show({
        type: 'success',
        text1: 'Tarefa removida com sucesso!',
      });
      readTasks();
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Não possível remover a tarefa.',
      });
    }
  };

  const completeTask = async (id: string) => {
    try {
      await axios.patch(`http://192.168.170.31:3030/tasks/${id}`);
      setTasks(tasksAntigas =>
        tasksAntigas.map(task => ({
          ...task,
          isCompleted: task._id === id ? !task.isCompleted : task.isCompleted,
        })),
      );
      Toast.show({
        type: 'success',
        text1: 'Tarefa atualizada com sucesso!',
      });
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Não possível atualizar a tarefa.',
      });
    }
  };

  return (
    <View style={styles.display}>
      <Toast />
      <Header />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        updateTask={updateTask}
      />
      <Button createTask={createTask} />
    </View>
  );
}

export default Home;
