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
import {
  isValidName,
  isValidEmail,
  isValidMobileNumber,
  isValidPassword,
} from '../../methods';
import ScreenTitle from '../../components/ScreenTitle';
import Loader from '../../components/Loader';

import {constant} from '../../contants';
import RadioButton from '../../components/RadioButton';
import ModalDropdown from '../../components/ModalDropdown';

/**
 * This component is used to handled user registration and validations activity.
 * @param {*} props
 */

export const showAlert = (message) => {
  setTimeout(() => {
    Alert.alert(message);
  }, 500);
};

const Signup = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumner, setMobileNumber] = useState('');
  const [gender, setGender] = useState('Male');
  const [country, setCountry] = useState('India');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const registerUser = () => {
    setLoading(true);

    let user = {
      firstName,
      lastName,
      email,
      mobileNumner,
      gender,
      password,
    };

    console.log('user:', user);

    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     setLoading(false);
    //     props.navigation.navigate('Dashboard');
    //   })
    //   .catch((error) => {
    //     console.log('error:', error);
    //     if (error.code === 'auth/email-already-in-use') {
    //       showAlert('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       showAlert('That email address is invalid!');
    //     }
    //     if (error.code === 'auth/weak-password') {
    //       showAlert('The given password is invalid');
    //     }
    //     setLoading(false);
    //   });
  };

  const checkValidationThenRegister = ({
    firstNameValidation,
    lastNameValidation,
    emailValidation,
    mobileNumberValidation,
    passwordValidation,
  }) => {
    let message = '';
    if (!firstNameValidation.isValid) {
      message = firstNameValidation.message;
    } else if (!lastNameValidation.isValid) {
      message = lastNameValidation.message;
    } else if (!emailValidation.isValid) {
      message = emailValidation.message;
    } else if (!mobileNumberValidation.isValid) {
      message = mobileNumberValidation.message;
    } else if (!passwordValidation.isValid) {
      message = passwordValidation.message;
    }
    message.length > 0 ? Alert.alert(message) : registerUser();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Loader isTransparent={true} loading={isLoading} />
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainerStyle}>
          <ScreenTitle title="Register" />
          <FBARNTextInput
            label={constant.firstName}
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
          />
          <FBARNTextInput
            label={constant.lastName}
            value={lastName}
            onChangeText={(value) => setLastName(value)}
          />
          <FBARNTextInput
            label={constant.email}
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
          <FBARNTextInput
            label={constant.mobileNumber}
            value={mobileNumner}
            keyboardType="phone-pad"
            onChangeText={(value) => setMobileNumber(value)}
          />
          <Text style={{marginBottom: 10}}>Select Gender</Text>
          <RadioButton
            selectedGender={(selectedGender) => {
              setGender(selectedGender);
            }}
          />

          <Text style={{marginBottom: 10}}>Select Country</Text>

          <ModalDropdown
            onSelect={(index, value) => setCountry(value)}
            defaultValue="India"
            textStyle={{fontSize: 15, marginBottom: 20}}
            options={['India', 'Indonesia', 'Japan', 'Philippines', 'Vietnam']}
          />

          <FBARNTextInput
            label={constant.password}
            value={password}
            isSecure={true}
            onChangeText={(value) => setPassword(value)}
          />
          <FBARNButton
            title="Sign Up"
            onPress={() => {
              const firstNameValidation = isValidName({
                name: firstName,
                nameType: 'first name',
              });

              const lastNameValidation = isValidName({
                name: lastName,
                nameType: 'last name',
              });

              const emailValidation = isValidEmail(email);

              const mobileNumberValidation = isValidMobileNumber(mobileNumner);

              const passwordValidation = isValidPassword(password);

              checkValidationThenRegister({
                firstNameValidation,
                lastNameValidation,
                emailValidation,
                mobileNumberValidation,
                passwordValidation,
              });
            }}
          />
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.noAccount}>Already have account? Sign In</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
