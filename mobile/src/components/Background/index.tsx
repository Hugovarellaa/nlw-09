import { ImageBackground } from 'react-native';

import backgroundImg from "../../assets/background-galaxy.png"

import { styles } from './styles';

interface ImageProps {
  children: React.ReactNode
}

export function Background({children}:ImageProps) {
  return (
    <ImageBackground 
      style={styles.container} 
      source={backgroundImg} 
      defaultSource={backgroundImg}
    >
        {children}
    </ImageBackground>
  );
}