import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Switch } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const options = [
  { label: 'Your', value: 'yours' },
  { label: 'Team', value: 'team' },
];

const ADP = () => {
  const [values, setValues] = useState('yours');
  const [task, setTask] = useState(0);
  const [overDue, setOverDue] = useState(0);
  return (
    <>
      <View style={styles.header}>
        <Text>Menu Button</Text>
        <Text>Dashboard</Text>
        <Text>Page up Button</Text>
      </View>
      <View style={styles.body}>
        <SwitchSelector
          style={styles.switch}
          options={options}
          buttonColor={'#41B3D6'}
          borderRadius={5}
          borderColor={'#41B3D6'}
          hasPadding={true}
          valuePadding={1}
          initial={0}
          onPress={(value) => setValues(value)}
        />
        <View style={styles.tasks}>
          <Text style={styles.toDoText}>THINGS TO DO</Text>
          <Text style={{ fontWeight: 'bold', paddingLeft: '5%' }}>
            {task} Tasks{' '}
          </Text>
          <Text style={{ paddingLeft: '2%', paddingRight: '2%' }}> | </Text>
          <Text style={{ fontWeight: 'bold', color: 'red' }}>
            {overDue} Overdue{' '}
          </Text>
          <View style={{ paddingLeft: '10%' }}>
            <Button title='>' />
          </View>
        </View>
        <View style={styles.clockBody}>
          <View style={styles.clock}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Clock</Text>
            <Button title='>' />
          </View>
          <View
            style={{
              position: 'absolute',
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              width: 420,
              marginTop: '10%',
            }}
          />
          <View>
            <Text>Time</Text>
            <Text>Date</Text>
            <View>
              <Button title='CLOCK IN' />
            </View>
            <View>
              <Button title='TRANSFER' />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: '0%',
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: 'lightgrey',
    marginTop: '15%',
    height: '80%',
    width: '100%',
  },
  switch: {
    top: '5%',
    width: '95%',
    paddingLeft: '5%',
  },
  tasks: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: '10%',
    width: '90%',
    marginLeft: '5%',
    height: 60,
    alignItems: 'center',
  },
  toDoText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: '5%',
    color: '#41B3D6',
  },
  clockBody: {
    marginTop: '10%',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    alignItems: 'center',
  },
  clock: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default ADP;
