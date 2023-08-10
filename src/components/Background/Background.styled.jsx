import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
  css`
    transform: rotateX(${props.posX}) rotateY(${props.posY});
  `;

const LayerTransform = props => css`
  transform: ${props.tr};
`;
const LayersPic = props => css`
  background-image: url(${props.pic});
`;

export const Layers = styled.section`
  perspective: 1000px;
  overflow: hidden;
`;

export const Container = styled.div`
  height: 100vh;
  min-height: 500px;
  transform-style: preserve-3d;
  ${dynamicStyle};
  will-change: transform;
  transition: transform 1.5s cubic-bezier(0.05, 0.5, 0, 1);
`;

export const LayersItem = styled.div`
  position: absolute;
  inset: -16vw;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${LayersPic};
  ${LayerTransform};
  :nth-child(n + 4) {
    pointer-events: none;
  }
  :nth-child(3) {
    position: fixed;
  }
`;
