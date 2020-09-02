import React from 'react'
import { Animated, Dimensions, YellowBox } from 'react-native'

class FadeIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            positionLeft: new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
        Animated.spring(
            this.state.positionLeft,
            {
                toValue: 0
            }
        ).start()
    }

    render() {
        return (
            <Animated.View
                style={{ left: this.state.positionLeft }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeIn