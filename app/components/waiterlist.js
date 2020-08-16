import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import WaiterRow from './waiterrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const WaiterList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <WaiterRow
                    name={item.name}
                    
                />}
            />

    </View>
);

export default WaiterList;