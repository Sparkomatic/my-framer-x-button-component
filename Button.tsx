import * as React from "react";
import { PropertyControls, ControlType, Frame } from "framer";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  /* width: 100%; */
  width: 10rem;
  /* height: 100%; */
  height: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(p: Partial<Props>) => p.backgroundColor};
  &:hover {
    background-color: ${(p: Partial<Props>) => p.hoverColor};
  }
`;

// Define type of property
interface Props {
  text: string;
  backgroundColor: string;
  hoverColor: string;
  onClick: () => void;
  width: string;
  height: string;
}

export class Button extends React.Component<Props> {
  
  
  // Set default properties

  static defaultProps = {
    text: "Hello World!",
    backgroundColor: "red",
    hoverColor: "pink",
    width: 280,
    height: 60,
    onClick: () => {}
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    backgroundColor: { type: ControlType.Color, title: "Background Colour" },
    hoverColor: { type: ControlType.Color, title: "Hover Colour" }
  };

  render() {
    return (
        <ButtonContainer
          onClick={this.props.onClick}
          backgroundColor={this.props.backgroundColor}
          hoverColor={this.props.hoverColor}
          height={this.props.height}
          width={this.props.width}
        >
          {this.props.text}
        </ButtonContainer>
    );
  }
}
