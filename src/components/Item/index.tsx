import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ITask} from '../../interfaces/task';

interface IProps {
  task: ITask;
  deleteTask: (id: string) => Promise<void>;
  completeTask: (id: string) => Promise<void>;
}

function Item({task, deleteTask, completeTask}: IProps) {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.containerText}>
        <Text
          style={[
            styles.itemText,
            {
              textDecorationLine: task.isCompleted ? 'line-through' : 'none',
            },
          ]}
          numberOfLines={3}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonComplete}
          onPress={() => completeTask(task._id)}>
          <Text style={styles.buttonsText}>Completar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRemove}
          onPress={() => deleteTask(task._id)}>
          <Text style={styles.buttonsText}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#5d6d7e',
    width: '100%',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerText: {
    width: '50%',
  },
  itemText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonComplete: {
    backgroundColor: '#5cb85c',
    padding: 5,
    borderRadius: 5,
  },
  buttonRemove: {
    backgroundColor: '#d9534f',
    padding: 5,
    borderRadius: 5,
  },
  buttonsText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
