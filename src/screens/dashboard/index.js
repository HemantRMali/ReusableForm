import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';

import styles from './styles';

import Item from '../../components/ProductItem';

import Loader from '../../components/Loader';
import SegmentedControl from '../../components/SegmentControll';
import {TouchableOpacity} from 'react-native-gesture-handler';

const nearBy = require('../../mock-data/nearby.json');
const zomato = require('../../mock-data/zomato.json');
const swiggy = require('../../mock-data/swiggy.json');
/**
 * This component is used to get products from firebase and show in flatlist.
 * @param {*} props
 */
const Dashboard = (props) => {
  const [tabIndex, setTabIndex] = React.useState(1);
  const handleTabsChange = (index) => {
    setTabIndex(index);
    switch (index) {
      case 1:
        setProducts(swiggy.restaurants);
        break;
      case 2:
        setProducts(zomato.restaurants);
        break;
      default:
        setProducts(nearBy.restaurants);
        break;
    }
  };
  const [products, setProducts] = useState();
  // consider it as component did mount
  useEffect(() => {}, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Details');
      }}>
      <Item
        item={item}
        onPress={() => {
          props.navigation.navigate('Details');
        }}
      />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <Loader isTransparent={true} loading={isLoading} /> */}
        <SegmentedControl
          tabs={['Near by', 'Swiggy', 'Zomato']}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
          segmentedControlBackgroundColor="#86c4fd"
          activeSegmentBackgroundColor="#0482f7"
          activeTextColor="white"
          textColor="black"
          paddingVertical={18}
        />
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
