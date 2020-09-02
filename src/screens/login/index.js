import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

import FBARNTextInput from '../../components/TextInput';
import FBARNButton from '../../components/Button';
import {isValidMobileNumber, isValidPassword} from '../../methods';
import ScreenTitle from '../../components/ScreenTitle';
import Loader from '../../components/Loader';
import {constant} from '../../contants';
import {getRegisteredUser} from '../../storage/reduxStore';

/**
 * This component is used to handled user login and validations activity.
 * @param {*} props
 */

export const showAlert = (message) => {
  setTimeout(() => {
    Alert.alert(message);
  }, 500);
};

const Login = (props) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const loginUser = () => {
    const existingUsers = getRegisteredUser();
    const userExists = existingUsers.some((user) => {
      return user.mobileNumber === mobileNumber && user.password === password;
    });
    if (userExists) {
      props.navigation.navigate('Dashboard');
    } else {
      Alert.alert('Email or password does not match..!');
    }
  };

  const checkValidationThenLogin = ({
    mobileNumberValidation,
    passwordValidation,
  }) => {
    let message = '';
    if (!mobileNumberValidation.isValid) {
      message = mobileNumberValidation.message;
    } else if (!passwordValidation.isValid) {
      message = passwordValidation.message;
    }
    message.length > 0 ? Alert.alert(message) : loginUser();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Loader isTransparent={true} loading={isLoading} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <ScreenTitle title="Login" />
          <FBARNTextInput
            label={constant.mobileNumber}
            value={mobileNumber}
            keyboardType="phone-pad"
            onChangeText={(value) => setMobileNumber(value)}
          />
          <FBARNTextInput
            label={constant.password}
            value={password}
            isSecure={true}
            onChangeText={(value) => setPassword(value)}
          />
          <FBARNButton
            title={constant.login}
            onPress={() => {
              const mobileNumberValidation = isValidMobileNumber(mobileNumber);

              const passwordValidation = isValidPassword(password);

              checkValidationThenLogin({
                mobileNumberValidation,
                passwordValidation,
              });
            }}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.noAccount}>No account yet? Create one</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
