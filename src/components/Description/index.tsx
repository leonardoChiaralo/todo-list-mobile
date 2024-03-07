import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ITask} from '../../interfaces/task';

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
    updateTask(task._id, title, description);
    setEditing(false);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#000000e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    minHeight: '40%',
    maxHeight: '80%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#5d6d7e',
    borderRadius: 10,
  },
  titleContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  editButton: {
    backgroundColor: '#283747',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  edit: {
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    width: '90%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  status: {
    fontSize: 15,
    color: '#ffffff8f',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  editTitle: {
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#283747',
    borderRadius: 5,
  },
  editDescription: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#283747',
    borderRadius: 5,
  },
});
