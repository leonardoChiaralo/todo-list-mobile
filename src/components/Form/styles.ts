import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    marginTop: 5,
    width: '100%',
    backgroundColor: '#5d6d7e',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    color: '#f0f3f4',
    fontWeight: 'bold',
  },
  textArea: {
    width: '80%',
    backgroundColor: '#283747',
    borderWidth: 1,
    borderColor: '#283747',
    borderRadius: 5,
    color: '#f0f3f4',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: '30%',
    height: 25,
    backgroundColor: '#283747',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#f0f3f4',
    fontFamily: 'RobotoCondensed-ExtraBold',
  },
});

export default styles;
