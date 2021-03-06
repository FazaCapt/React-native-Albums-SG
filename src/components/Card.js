import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    constainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadawRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export default Card;