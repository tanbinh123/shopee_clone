import styled, { keyframes } from "styled-components"

export const PopoverEnterAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const Drawer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  will-change: transform;
  transform-origin: top right;
  animation: ${PopoverEnterAnimation} 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  opacity: 1;
  z-index: 400;
  border: 1px solid rgba(0, 0, 0, 0.09);
  ::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    height: 10px;
    opacity: 0;
    width: 100%;
  }
`
export const PopoverArow = styled.div`
  position: absolute;
  top: -10px;
  right: 6px;
  width: 0;
  height: 0;
  border-bottom: 10px solid #fff;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
`
export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.12rem 0 rgba(0 0 0/20%);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
`
