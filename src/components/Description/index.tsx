import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ITask} from '../../interfaces/task';
import styles from './styles';
import Toast from 'react-native-toast-message';

interface IProps {
  task: ITask;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateTask: (id: string, title: string, description: string) => Promise<void>;
}

function Description({task, showModal, setShowModal, updateTask}: IProps) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    editing ? setEditing(false) : setEditing(true);
  };

  const handleSave = () => {
    try {
      updateTask(task._id, title, description);
      setEditing(false);
      Toast.show({
        type: 'success',
        text1: 'Tarefa editada com sucesso!',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Não foi possóvel editar a tarefa.',
      });
    }
  };

  const status = task.isCompleted ? 'Completa' : 'A Fazer';

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.background}>
          <Toast />
          <View style={styles.modal}>
            <View style={styles.titleContainer}>
              {editing ? (
                <TextInput
                  style={styles.editTitle}
                  value={title}
                  onChangeText={setTitle}
                />
              ) : (
                <Text style={styles.title}>{task.title}</Text>
              )}
              <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                <Text style={styles.edit}>Editar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.status}>{status}</Text>
              {editing ? (
                <TextInput
                  style={styles.editDescription}
                  value={description}
                  multiline
                  numberOfLines={6}
                  onChangeText={setDescription}
                />
              ) : (
                <Text style={styles.description}>{task.description}</Text>
              )}
            </View>
            {editing ? (
              <TouchableOpacity style={styles.editButton} onPress={handleSave}>
                <Text style={styles.edit}>Salvar</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default Description;
