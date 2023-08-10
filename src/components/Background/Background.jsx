import { useState, useEffect } from 'react';
import { Container, Layers, LayersItem } from './Background.styled';

import picOne from './img/layer-1.jpg';
import picTwo from './img/layer-2.png';
import picFour from './img/layer-4.png';
import picFive from './img/layer-5.png';

export const Background = ({ children }) => {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = e => {
      setMousePos({
        x: `${(e.clientX - window.innerWidth / 2) * -0.005}deg`,
        y: `${(e.clientY - window.innerHeight / 2) * 0.01}deg`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <Layers>
      <Container posX={mousePos.x} posY={mousePos.y}>
        <LayersItem
          pic={picOne}
          tr={`translateZ(-55px) scale(1.06)`}
        ></LayersItem>
        <LayersItem
          pic={picTwo}
          tr={`translateZ(80px) scale(.88)`}
        ></LayersItem>
        <LayersItem tr={`translateZ(180px) scale(.8)`}>{children}</LayersItem>
        <LayersItem
          pic={picFour}
          tr={`translateZ(300px) scale(.9)`}
        ></LayersItem>
        <LayersItem pic={picFive} tr={`translateZ(380px)`}></LayersItem>
      </Container>
    </Layers>
  );
};
