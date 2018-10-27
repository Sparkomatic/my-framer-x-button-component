import * as React from "react";
import { PropertyControls, ControlType, Frame } from "framer";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: ${(p: Partial<Props>) => p.border}
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  &:hover {
    background-color: ${(p: Partial<Props>) => p.hoverColor};
  }

`;

let defaultBackground = "black";
let defaultBorder = "1px solid black"
let defaultHoverColor = "grey";



// Define type of property
interface Props {
  text: string;
  hoverColor: string;
  backgroundColor: string;
  border: string;
  onClick: () => void;
  width: number;
  height: number;
  buttonState: "state1" | "state2"| "state3" | "state4";
  state1Background: string,
  state2Background: string,
  state3Background: string,
  state4Background: string,
  state1Border: string,
  state2Border: string,
  state3Border: string,
  state4Border: string,
  // stateBackgroundColor: {state1: string, state2: string}
  state1HoverColour: string,
  state2HoverColour: string,
  state3HoverColour: string,
  state4HoverColour: string,
}

interface State {
  isEnabled: boolean;
  status: "state1" | "state2" | "state3" | "state4";
}

export class Button extends React.Component<Props> {
  
 

  getBackgroundColour(state) {
    if (this.props.buttonState === "state1") {
      return this.props.state1Background
    }
    else if (this.props.buttonState === "state2") {
      return this.props.state2Background
    }
    else if (this.props.buttonState === "state3") {
      return this.props.state3Background
    }
    else {
      return this.props.state4Background
    }
  
  }

   // Set default properties

  static defaultProps = {
    text: "Hello World!",
    backgroundColor: defaultBackground,
    border: defaultBorder,
    hoverColor: defaultHoverColor,
    state1Background: defaultBackground,
    state2Background: "darkgrey",
    state3Background: "green",
    state4Background: "yellow",
    state1Border: defaultBorder,
    state2Border: "2px solid grey",
    state3Border: "2px solid grey",
    state4Border: "2px solid grey",
    state1HoverColour: defaultHoverColor,
    state2HoverColour: "lightgray",
    state3HoverColour: "purple",
    state4HoverColour: "orange",
    width: 160,
    height: 48,
    onClick: () => {},
    buttonState: "state1"
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    buttonState: {
      type: ControlType.Enum,
      options: ["state1", "state2", "state3", "state4"],
      optionTitles: ["Primary Enabled", "Primary Disabled", "Secondary Enabled", "Secondary Disabled"],
      title: "Button State",
    }
  
  };





  render() {

    // this.state.status {

    // }
    // var buttonBackground;



    return (
        <ButtonContainer
          onClick={this.props.onClick}
          backgroundColor={this.getBackgroundColour.bind(this)}
          border={this.props.buttonState === "state1" && this.props.state1Border || this.props.state2Border}
          hoverColor={this.props.buttonState === "state1" && this.props.state1HoverColour || this.props.state2HoverColour}
          height={this.props.height}
          width={this.props.width}
        >
          {this.props.text}
          {this.props.buttonState}
        </ButtonContainer>
    );
  }
}
