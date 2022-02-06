import React from 'react';
import LottieView from 'lottie-react-native';

const BackgroundAnimation = () => {
    return (
        <LottieView source={require('../../assets/lottieJson/75758-background-sparkles.json')} autoPlay loop />
    );
};

export default BackgroundAnimation;
