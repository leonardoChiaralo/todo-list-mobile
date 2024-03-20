import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  title: {
    color: '#f0f3f4',
    fontFamily: 'RobotoCondensed-ExtraBold',
    fontSize: 15,
  },
});

export default styles;
