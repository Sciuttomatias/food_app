import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return <View style={styles.container}>
        <Image 
            source={{ uri: result.image_url }}
            style={styles.image}
        />
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        marginBottom: 5,
    },
});

export default ResultsDetail;