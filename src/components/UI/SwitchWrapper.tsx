import styled from 'styled-components';

const switchHeight = '4rem';
const switchSize = '2rem';
const postText = "Dark  ";

const SwitchWrapper = styled.div`

  &.switch {
    position: relative;
    width: ${switchHeight};
    height: ${switchSize};
    /* border-radius: 10%; */
    transition: background-color 100ms ease-out;
    z-index: 1;
    padding-right:10px;
    &:before,
    &:after{
      content: '';
      position: absolute;
      top: 0;
      background-color: inherit;
      border-radius: 50%;
      width: ${switchSize};
      height: ${switchSize};
      z-index: 2;
    }

    &:before {
      left: -1rem;
    }
    &:after {
      right: -1rem;
    }

    &.switch_is-off {
      background-color: #61039A;
      /* &:after{
        text-align:left;
        content: 'Dark';
        white-space: pre;
        line-height:${switchSize};
      } */
    }
    
    &.switch_is-on {
      background-color: #E8958D;
      /* &:before{
        text-align:right;
        line-height:${switchSize};
        content:'  Light';
        white-space: pre;
      } */
    }

    .toggle-button {
      position: absolute;
      width: ${switchSize};
      height: ${switchSize};
      background-color: #FCFFFF;
      border-radius: 50%;
      transition: transform 100ms ease-in-out;
      z-index: 3;
      border: 0.08 solid #353535;
      top: -0.08;
      &.toggle-button_position-left {
        transform: translateX(-1rem)
      }
    
      &.toggle-button_position-right {
        transform: translateX(3rem)
      }
    }

    .switch-label{
      position: absolute;
      top: -0.08;
      line-height:2.2rem;
      z-index: 3;
      font-size: 0.75rem;
      &.toggle-button_position-left {

        color:#ccc;
        transform: translateX(1.5rem)
      }
    
      &.toggle-button_position-right {
        color:#3b3a3a;
        transform: translateX(-0.5rem)
      }
    }

  
  }

`;

export default SwitchWrapper;