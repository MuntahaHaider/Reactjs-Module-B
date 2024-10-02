import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Cards({ image, category, title, desc, price }) {
  return (
    <View style={styles.card}>
      <Image  style={styles.cardImage} source={image} />
      <Text style={styles.cardCategory}>Category: {category}</Text>
      <Text style={styles.cardTitle}>Title: {title}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>
      <Text style={styles.cardPrice}>Price : ${price}</Text>
      <TouchableOpacity >
        <Text style={styles.cardButton}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width:300,
        borderWidth: 1,         
        borderColor: 'green',    
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginLeft:30
  },
  cardImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  cardCategory: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'green',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  cardButton:{
    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor:'green',
    width:50,
    padding:3,
    borderRadius:5,
    margin:5
  },
})
