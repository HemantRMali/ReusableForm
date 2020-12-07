import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {SharedElement} from 'react-navigation-shared-element';

const ListScreen = ({item, navigation, tabIndex}) => {
  let style0Index = styles.itemRow;
  let style1Index = styles.itemColumn;
  let style2Index = styles.itemRowReverse;
  let selectedStyle;
  let selectedImageStyle;
  console.log('tabIndex:', tabIndex);

  switch (tabIndex) {
    case 0:
      selectedStyle = style0Index;
      selectedImageStyle = styles.productImage;
      break;
    case 1:
      selectedStyle = style1Index;
      selectedImageStyle = styles.productImageFull;
      break;
    case 2:
      selectedStyle = style2Index;
      selectedImageStyle = styles.productImage;
      break;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('navigation:', navigation);
        navigation.push('Details', {item});
      }}>
      <View style={selectedStyle}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={selectedImageStyle}
          />
        </SharedElement>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subTitle}>{item.address}</Text>
          <View style={styles.bottomTitle}>
            <Text style={{color: 'white'}}>
              Neighborhood: {item.neighborhood}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListScreen;
