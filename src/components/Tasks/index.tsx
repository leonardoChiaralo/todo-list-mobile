import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ITask} from '../../interfaces/task';
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

const styles = StyleSheet.create({
  tasks: {
    backgroundColor: '#34495e',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});
