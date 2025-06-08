// Standard react native view component

import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme() // Always returns light or dark. It can be null in rare occasions
    const theme = Colors[colorScheme] ?? Colors.dark

    return (
        <View
            style={[{
                backgroundColor: theme.background
            }, style]} {...props} />

    )
}

export default ThemedView

