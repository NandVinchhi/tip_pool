import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import LoanRow from './loanrow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const LoanList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item,amount }) => <LoanRow
                    name={item.name}
                    amount={item.amount}
                    
                />}
            />

    </View>
);

export default LoanList;