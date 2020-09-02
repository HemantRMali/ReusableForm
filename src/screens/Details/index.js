import React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';

const Details = (props) => {
  const item = props.route.params.item;
  const objectArray = Object.entries(item.operating_hours);
  objectArray.forEach(([key, value]) => {
    console.log(key);
    console.log(value);
  });

  const renderTitleSubtitle = (title, subtitle) => {
    return (
      <Text style={styles.title}>
        {title} <Text style={styles.subtitle}>{subtitle}</Text>
      </Text>
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.productImage}
          />
          <View style={styles.detailsContainer}>
            {renderTitleSubtitle('Name:', item.name)}
            {renderTitleSubtitle('Neighborhood:', item.neighborhood)}
            {renderTitleSubtitle('Address:', item.address)}
            {renderTitleSubtitle('Cuisine Type:', item.cuisine_type)}
            <Text style={styles.title}>Working hours:</Text>
            {objectArray.map((item0, index) => {
              return (
                <Text key={String(index)} style={{marginBottom: 20}}>
                  {item0}
                </Text>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
