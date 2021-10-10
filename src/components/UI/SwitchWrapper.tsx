import styled from 'styled-components';

const switchHeight = '3rem';
const switchSize = '1.5rem';

const SwitchWrapper = styled.div`

  &.switch {
    position: relative;
    width: ${switchHeight};
    height: ${switchSize};
    transition: background-color 100ms ease-out;
    z-index: 1;
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
      left: -0.6rem;
    }
    &:after {
      right: -0.6rem;
    }

    &.switch_is-off {
      background-color: #61039A;
    }
    
    &.switch_is-on {
      background-color: #E8958D;
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
        transform: translateX(-0.8rem)
      }
    
      &.toggle-button_position-right {
        transform: translateX(2.5rem)
      }
    }

    .switch-label{
      position: absolute;
      top: -0.08;
      line-height:1.5rem;
      z-index: 3;
      font-size: 0.75rem;
      &.toggle-button_position-left {

        color:#ccc;
        transform: translateX(1rem)
      }
    
      &.toggle-button_position-right {
        color:#3b3a3a;
      }
    }

  
  }

`;

export default SwitchWrapper;