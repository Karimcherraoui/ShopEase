import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Data from '../data/Data'
import Card from '../components/Cards/Card'

const Catalogue = () => {
    const course = useSelector((state) => state.Course.courses);  
    const panierItems = course.filter((item) => item.selected === false);

  return (
    <FlatList data={panierItems} keyExtractor={(item) => item.id}
    renderItem={({item}) => <Card course={item}  />
    }
    />
  )
}

export default Catalogue