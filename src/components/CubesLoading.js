import React from 'react';
import LottieView from 'lottie-react-native';

const CubesLoading = () => {
    return (
        <LottieView source={require('../lottieJson/93227-fading-cubes-loader-2.json')} autoPlay loop />
    );
};

export default CubesLoading;
