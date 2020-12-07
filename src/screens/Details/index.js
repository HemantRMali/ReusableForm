import React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import {SharedElement} from 'react-navigation-shared-element';

const Details = (props) => {
  console.log('navigation.state.param:', props.navigation.state);
  const item = props.navigation.getParam('item');
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
          <SharedElement id={`item.${item.id}.photo`}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.productImage}
            />
          </SharedElement>
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

Details.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  console.log('Details:Item:', item);
  return [
    {
      id: `item.${item.id}.photo`,
      animation: 'fade',
      // resize: 'clip'
      // align: ''left-top'
    },
  ];
};
export default Details;
