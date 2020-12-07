import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  itemRow: {
    flex: 1,
    backgroundColor: '#595856',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 10,
  },
  itemRowReverse: {
    flex: 1,
    backgroundColor: '#595856',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row-reverse',
    borderRadius: 10,
  },
  itemColumn: {
    flex: 1,
    backgroundColor: '#595856',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
    marginLeft: 10,
  },
  bottomTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  productImage: {
    aspectRatio: 1,
    width: Dimensions.get('screen').width * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  productImageFull: {
    aspectRatio: 1,
    // width: Dimensions.get('screen').width * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titlesContainer: {
    width: '70%',
  },
});
