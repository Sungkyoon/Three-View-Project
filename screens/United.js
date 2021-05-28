import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
  Linking,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const options = [
  { label: 'Current', value: 'current' },
  { label: 'Past', value: 'past' },
  { label: 'Find a trip', value: 'trip' },
];

const United = () => {
  const [values, setValues] = useState('trip');
  const [confirmation, setConfirmation] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEnabled, setEnabled] = useState(false);

  const onSubmit = () => {
    console.log(confirmation, lastName);
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Trips</Text>
      </View>

      <SwitchSelector
        style={styles.switch}
        options={options}
        buttonColor={'#003366'}
        borderRadius={5}
        backgroundColor={'lightgrey'}
        hasPadding={true}
        valuePadding={1}
        initial={2}
        onPress={(value) => setValues(value)}
      />
      {values === 'trip' ? (
        <View style={styles.body}>
          <Text style={styles.text}> Find a trip </Text>
          <Text>Confirmation Number</Text>
          <TextInput
            style={styles.input}
            onChange={(val) => setConfirmation(val)}
            value={confirmation}
          />
          <Text>Last name</Text>
          <TextInput
            style={styles.input}
            onChange={(val) => setLastName(val)}
            value={lastName}
          />
          <View style={styles.addTrip}>
            <Text>Add to My Trips</Text>
            <Switch
              trackColor={{ false: 'white', true: '#003366' }}
              onValueChange={() => setEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              width: 420,
            }}
          />
          <View style={styles.button}>
            <Button title='Search' color='white' onPress={() => onSubmit} />
          </View>
          <Text>Looking for a travel credit?</Text>

          <Text
            style={styles.buttonTravel}
            onPress={() => Linking.openURL('https://google.com')}
          >
            Search travel credits
          </Text>
        </View>
      ) : (
        <View>
          <Text>You have no {values} trips.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: '-40%',
  },
  header: {
    backgroundColor: '#003366',
    width: '100%',
    height: '10%',
    top: '0%',
    position: 'absolute',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '13%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: '5%',
  },
  switch: {
    paddingTop: '5%',
    top: '10%',
    margin: '1.5%',
    position: 'absolute',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  addTrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '2%',
    paddingTop: '5%',
    paddingBottom: '1%',
  },
  button: {
    backgroundColor: '#290F6A',
    height: 45,
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  buttonTravel: {
    textDecorationLine: 'underline',
    color: '#0d47a1',
    marginTop: '2%',
  },
});

export default United;
