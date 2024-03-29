import {StyleSheet} from 'react-native';

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
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#5d6d7e',
    borderRadius: 10,
  },
  titleContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    width: '80%',
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
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
    fontFamily: 'RobotoCondensed-ExtraBold',
  },
  descriptionContainer: {
    width: '90%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  status: {
    fontSize: 15,
    fontWeight: 'bold',
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
    height: 40,
    padding: 5,
    fontFamily: 'Pacifico-Regular',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#283747',
    borderRadius: 5,
  },
  editDescription: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#283747',
    borderRadius: 5,
  },
});

export default styles;
