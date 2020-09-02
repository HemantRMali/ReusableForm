import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
  },
  productImage: {
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  scrollViewContentContainerStyle: {flexGrow: 1, justifyContent: 'center'},
  title: {fontSize: 20, fontWeight: '700', marginBottom: 10},
  subtitle: {fontWeight: '500'},
  detailsContainer: {
    margin: 20,
  },
});
