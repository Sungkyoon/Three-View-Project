import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import IconFeather from 'react-native-vector-icons/Feather';

const options = [
  { label: 'Your', value: 'yours' },
  { label: 'Team', value: 'team' },
];

var month = new Array();
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';

const ADP = () => {
  const [values, setValues] = useState('yours');
  const [task, setTask] = useState(0);
  const [overDue, setOverDue] = useState(0);
  const [currDate, setCurrDate] = useState('');
  const [currTime, setCurrTime] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    var date = new Date().getDate(); // current Date
    var monthName = month[new Date().getMonth()]; // current Month
    var year = new Date().getFullYear(); // current year
    var hours = new Date().getUTCHours(); // current hours
    var min = new Date().getMinutes(); // current minutes
    var seconds = new Date().getSeconds(); // current seconds
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    setCurrDate(monthName + ' ' + date + ',' + ' ' + year);
    setCurrTime(hours + ':' + min + ':' + seconds + ' ' + ampm);
    return () => {};
  }, []);

  return (
    <>
      <View style={styles.header}>
        <IconFeather
          name={'menu'}
          style={{ paddingLeft: '2%', fontSize: 30, color: '#41B3D6' }}
          onPress={() => setModalOpen(true)}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Dashboard</Text>
        <IconFeather
          name={'upload'}
          style={{ marginRight: '5%', fontSize: 30, color: 'lightgrey' }}
        />
      </View>
      {modalOpen ? (
        <>
          <IconFeather
            name={'chevron-left'}
            style={styles.modalBack}
            onPress={() => setModalOpen(false)}
          />
          <View style={styles.itemBody}>
            <Text style={styles.menuItem}>Menu Item</Text>
            <Text style={styles.menuItem}>Menu Item</Text>
            <Text style={styles.menuItem}>Menu Item</Text>
            <Text style={styles.menuItem}>Menu Item</Text>
            <Text style={styles.menuItem}>Menu Item</Text>
          </View>
        </>
      ) : (
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
                borderBottomWidth: 2,
                width: '90%',
                marginTop: '10%',
              }}
            />
            <View style={styles.clockBody2}>
              <Text style={{ fontSize: 25, marginTop: '10%' }}>{currTime}</Text>
              <Text style={{ marginTop: '2%', marginBottom: '2%' }}>
                {currDate}
              </Text>

              <View style={styles.button}>
                <Button color='white' title='CLOCK IN' />
              </View>
              <View style={styles.button}>
                <Button color='white' title='TRANSFER' />
              </View>
            </View>
          </View>
          <View style={styles.payBody}>
            <View style={styles.pay}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Pay</Text>
              <Button title='>' />
            </View>
            <View
              style={{
                position: 'absolute',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
                width: '90%',
                marginTop: '10%',
              }}
            />
            <View style={styles.compensation}>
              <Text>COMPENSATION</Text>

              <Image
                source={require('../assets/show.png')}
                style={styles.payImg}
              />
              <Text style={{ color: '#336699', fontSize: 12 }}> SHOW</Text>
            </View>
            <View style={styles.chart}>
              <Image
                source={require('../assets/Donut_Chart.png')}
                style={{ width: 150, height: 150 }}
              />
              <View style={styles.chartInfo}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  Mar 15, 2019
                </Text>
                <Text style={styles.chartText}>TAKE HOME</Text>
                <Text style={{ color: 'green', fontSize: 25 }}>$X,XXX.XX</Text>
                <Text style={styles.chartText}>GROSS PAY</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                  $X,XXX.XX
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.payBody}>
            <View style={styles.pay}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Timecard</Text>
              <Button title='>' />
            </View>
            <View
              style={{
                position: 'absolute',
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 2,
                width: '90%',
                marginTop: '10%',
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: '6%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: 'lightgrey',
    marginTop: '3%',
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
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 1,
    },
  },
  toDoText: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: '5%',
    color: '#41B3D6',
  },
  clockBody: {
    marginTop: '3%',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: 270,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 1,
    },
  },
  clockBody2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clock: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    marginTop: '8%',
  },
  button: {
    backgroundColor: '#336699',
    borderRadius: 20,
    marginTop: '4%',
    width: 120,
  },
  payBody: {
    marginTop: '3%',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    height: 270,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 4,
      width: 1,
    },
  },
  pay: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  compensation: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
  },
  payImg: {
    width: 15,
    height: 15,
    marginRight: '-55%',
    color: '#336699',
  },
  chart: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: '2%',
    marginTop: '3%',
  },
  chartInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: '8%',
  },
  chartText: { color: 'grey', fontWeight: 'bold' },
  modalBack: {
    fontSize: 40,
    color: '#41B3D6',
    marginTop: '-90%',
    marginLeft: '-80%',
  },
  itemBody: {
    flexDirection: 'column',
    marginTop: '10%',
  },
  menuItem: {
    marginTop: '5%',
    fontSize: 20,
  },
});

export default ADP;
