import {StyleSheet} from 'react-native';

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

export default styles;
