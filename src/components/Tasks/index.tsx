import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ITask} from '../../interfaces/task';
import styles from './styles';
import Item from '../Item';

interface IProps {
  tasks: ITask[];
  deleteTask: (id: string) => Promise<void>;
  completeTask: (id: string) => Promise<void>;
  updateTask: (id: string, title: string, description: string) => Promise<void>;
}

function Tasks({tasks, deleteTask, completeTask, updateTask}: IProps) {
  return (
    <View style={styles.tasks}>
      <Text style={styles.title}>Tarefas</Text>
      {tasks.map(task => (
        <Item
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          updateTask={updateTask}
        />
      ))}
    </View>
  );
}

export default Tasks;
