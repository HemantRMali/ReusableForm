import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const Item = ({item}) => {
  console.log('item:', item);
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.productImage}
      />
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
  );
};

export default Item;
