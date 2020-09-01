import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../RadioButton/styles';
const RadioButton = (props) => {
  const [checked, setChecked] = useState(0);
  const genderArray = ['Male', 'Female'];
  return (
    <View>
      <View style={styles.btn}>
        {genderArray.map((gender, key) => {
          return (
            <View key={gender}>
              {checked === key ? (
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../icons/check.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                    props.selectedGender(genderArray[key]);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../icons/un-check.png')}
                  />
                  <Text>{gender}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;
