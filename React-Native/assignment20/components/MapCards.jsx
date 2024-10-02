import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function MapCards() {
  const [products, setProducts] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json() 
      setProducts(data) 
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View>
      {
        products.map((product, index) => {
          return (
            <View key={index} style={styles.cardContainer}>
              <Cards
                id={product.id}
                category={product.category} 
                title={product.title}
                image={{ uri: product.image }} 
                desc={product.description}
                price={product.price}
              />
            </View>
          )
        } 
    )
    }
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20, // Add some spacing between cards
  },
})
