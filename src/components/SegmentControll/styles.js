import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width - 32;

export default StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    //width: width,
    margin: 20,
    marginVertical: 20,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
  },
  textStyles: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
