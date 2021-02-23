import styled from 'styled-components/native';

import { Appearance } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Appearance.getColorScheme() === 'dark' ? '#000000' : '#FFFFFF'}
`;

export const Txt = styled.Text``;

export const BtnLottie = styled.TouchableOpacity`
  width: 150px;
  height: 100px;
  background-color: #FFFFFF;
`;

export const StatusBar = styled.StatusBar``;