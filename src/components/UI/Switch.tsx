import React, { PropsWithChildren } from 'react';
import SwitchWrapper from './SwitchWrapper';


interface ToggleButtonProps extends React.Props<any> {
  isOn: boolean;
}

const ToggleButton = (props: PropsWithChildren<ToggleButtonProps>) => {
  let classNames = ["toggle-button", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
  return (<div className={classNames}></div>);
};

interface SwitchProps extends ToggleButtonProps {
  isOn: boolean;
  handleToggle: React.MouseEventHandler<HTMLDivElement>;
}

const Switch = (props: PropsWithChildren<SwitchProps>) => {
  let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
  const labelClasses = ["switch-label", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");

  // const labelClasses = ["switch-label", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ")
  return (
    <SwitchWrapper className={classNames} onClick={props.handleToggle}>
      <ToggleButton
        isOn={props.isOn}
      />
      <label className={labelClasses}>{props.isOn ? 'LIGHT' : 'DARK'}</label>
    </SwitchWrapper>
  );
}

export default Switch;