import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';
import {ITask} from './src/interfaces/task';
import Header from './src/components/Header';
import Tasks from './src/components/Tasks';
import Button from './src/components/Button';

function App() {
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
      readTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const readTasks = async () => {
    try {
      const response = await axios.get('http://192.168.170.31:3030/tasks');
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://192.168.170.31:3030/tasks/${id}`);
      readTasks();
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.display}>
      <Header />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
      <Button createTask={createTask} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#283747',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
