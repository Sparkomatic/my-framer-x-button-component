import * as React from "react";
import { Override, Data, PropertyControls, ControlType } from "framer";
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
    font-family: "Polaris";
    font-weight: 500;
    src: url(/code/fonts/Polaris-Book.woff) format("woff");
}
@font-face {
    font-family: "Polaris-Bold";
    font-weight: 700;
    src: url(/code/fonts/Polaris-Bold.woff) format("woff");
}
@font-face {
    font-family: "Montserrat";
    font-weight: 400;
    src: url(/code/fonts/Montserrat.woff) format("woff");
}
`;

const ButtonsContainer = styled<Props, any>("div")`
    color: ${props => props.color};
    font-family: ${props => props.fontFamily};
    font-size:  ${props => props.fontSize};
    padding: ${props => props.padding};
`;

const Button = styled<Props, any>("div")`
    font-family: ${props => props.fontFamily};
    font-size:  ${props => props.fontSize};
    padding: ${props => props.padding};
    width: ${props => props.buttonWidth};;
    height: ${props => props.buttonWidth};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
`;

// Define type of property
interface Props {
    text: string;
    backgroundColor: string;
    color: string;
    fontSize: string;
    fontFamily: string;
    padding: string;
    numberOfButtons: number;
    buttonWidth: string;
    buttonHeight: string;
    buttonColor: string;
}

export class My_Radio_Buttons extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        color: "purple",
        backgroundColor: "yellow",
        padding: "8px",
        fontSize: "1rem",
        fontFamily: "Polaris",
        numberOfButtons: 3,
        buttonWidth: "40px",
        buttonHeight: "18px",
        buttonColor: "pink",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        color: { type: ControlType.Color, title: "Colour" },
        padding: { type: ControlType.String, title: "Padding" },
        fontSize: { type: ControlType.String, title: "Font Size" },
        fontFamily: { type: ControlType.String, title: "Font Family" },
        numberOfButtons: { type: ControlType.Number, title: "Number Of Buttons" },
        buttonWidth:  { type: ControlType.String, title: "Button Width" },
        buttonHeight:  { type: ControlType.String, title: "Button Height" },
        buttonColor:  { type: ControlType.Color, title: "Button Color" },
    }

    //TRY NOT HAVING 2 STYLED COMPONENTS AND PUT IN ONE INSTANCE

    render() {
        return <ButtonsContainer color={this.props.color} backgroundColor={this.props.backgroundColor} padding={this.props.padding} fontFamily={this.props.fontFamily} fontSize={this.props.fontSize}>There are {this.props.numberOfButtons} Buttons
    and the padding property is {this.props.padding} and the font family is {this.props.fontFamily} and the button width is {this.props.buttonWidth} and the button height is {this.props.buttonHeight}<Button width="20px" height="20px" color={this.props.buttonColor} backgroundColor="yellow"></Button>></ButtonsContainer>;
    }
}
