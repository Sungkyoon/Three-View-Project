import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Switch } from 'react-native';

// Just for presenation
let dresses = [
  {
    company: 'A.I.C.',
    name: 'Emilia Dress',
    price: '$60 - $75 | $495 Retail',
    imgUrl: 'https://taylorannart.com/shop/dresses/6',
  },
  {
    company: 'La Maison Talulah',
    name: 'Remember Me Mini Dress',
    price: '$30 | $206 Retail',
    imgUrl: 'https://taylorannart.com/shop/dresses',
  },
];

const AllHearts = () => {
  // Was going to do New List interaction but running out of time
  const [newList, setNewList] = useState(false);
  const [num, setNum] = useState(0);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hearts</Text>
        <Text style={styles.newList} onPress={() => setNewList(true)}>
          New List
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
          width: 420,
          top: '10%',
        }}
      />
      {num > 0 ? (
        <>
          <View style={styles.Hearts}>
            {dresses.map((dress) => (
              <>
                <Image source={{ uri: dress.imgUrl }} />
              </>
            ))}
            <View style={styles.heartsText}>
              <Text>All Hearts</Text>
              <Text>{dresses.length} styles</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.text}> Have something coming up?</Text>
            <Text> Organize your hearts by event, season and more. </Text>
            <View style={styles.button}>
              <Button title='CREATE A SHORTLIST' color='white' />
            </View>
          </View>
        </>
      ) : (
        <View>
          <View style={styles.body}>
            <Text style={styles.text}> Have to wear it? </Text>
            <Text style={{ paddingLeft: '8%', paddingRight: '8%' }}>
              {' '}
              Tap the ♡ to keep track of your favorites. The more you heart, the
              easier it is to shop{' '}
            </Text>
            <View style={styles.button}>
              <Button title='SPREAD THE LOVE' color='white' />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    top: '0%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    paddingTop: '13%',
    paddingLeft: '35%',
  },
  newList: {
    color: '#D4AF37',
    paddingTop: '13%',
    marginLeft: '25%',
  },
  Hearts: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartsText: {
    paddingBottom: '10%',
    justifyContent: 'space-around',
  },
  body: {
    backgroundColor: 'lightgrey',
    width: 430,
    height: 525,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    margin: '7%',
  },
  button: {
    backgroundColor: 'black',
    margin: '5%',
    fontSize: 5,
    width: 300,
  },
});

export default AllHearts;
