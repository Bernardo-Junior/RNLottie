import React, { useState, useEffect } from 'react';

import Lottie from 'lottie-react-native';

const like = require('../../../assets/icons/like.json');

import { Appearance } from 'react-native';

import {
  Container,
  Txt,
  BtnLottie,
  StatusBar
} from './styles';

import { IAnimationState } from '../../../data/protocols/Main';

const Main: React.FC = () => {
  const [isLiked, setLikeState] = useState<Boolean>(false);
  const [animationState, setAnimationState] = useState<IAnimationState>({
    isStopped: false,
    isPaused:false
  })
  const [statusColor, setColor] = useState<Boolean>(false);

  useEffect(() => {
    if(Appearance.getColorScheme() === 'dark') {
      setColor(false);
    } else {
      setColor(true);
    }
  }, [Appearance.getColorScheme()])

  
  return (
    <>
    <StatusBar 
      backgroundColor={statusColor === false ? '#000000' : '#FFFFFF'}
      barStyle={statusColor === false ? 'light-content' : 'dark-content'}
    />
    <Container>
      <BtnLottie onPress={() => {setLikeState(!isLiked)}}>
        <Lottie
          resizeMode="contain"
          source={like} 
          autoPlay={true}
          loop={true}
        />
      </BtnLottie>
    </Container>
    </>
  )
}

export default Main;