import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ITask} from '../../interfaces/task';
import styles from './styles';
import Description from '../Description';

interface IProps {
  task: ITask;
  deleteTask: (id: string) => Promise<void>;
  completeTask: (id: string) => Promise<void>;
  updateTask: (id: string, title: string, description: string) => Promise<void>;
}

function Item({task, deleteTask, completeTask, updateTask}: IProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.containerText}
        onPress={() => setShowModal(true)}>
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
      <Description
        task={task}
        showModal={showModal}
        setShowModal={setShowModal}
        updateTask={updateTask}
      />
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
