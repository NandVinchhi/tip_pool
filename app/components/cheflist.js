import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import ChefRow from './chefrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const Cheflist = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <ChefRow
                    name={item.name}
                    
                />}
            />

    </View>
);

export default Cheflist;