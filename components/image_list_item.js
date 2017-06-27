import React from 'react';
import {
        Image,
        Text,
        View,
        StyleSheet
} from 'react-native';

const ImageListItem = ({ item }) => {
    return (
        <View style = {styles.item}>
            <Image 
                source={{ uri:item.thumbnailUrl }}
                style={styles.imagem}
            />
            <Text> {item.name} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderWidth: 2,
        padding: 16, 
        marginBottom: 16
    },
    imagem: {
        marginRight: 6,
        width: 64,
        height: 64
    }
});

export default ImageListItem;