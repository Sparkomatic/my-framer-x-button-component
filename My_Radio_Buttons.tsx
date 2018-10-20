import * as React from "react";
import { Override, Data, PropertyControls, ControlType } from "framer";
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
    font-family: "Montserrat";
    font-weight: 400;
    src: url(/code/fonts/Montserrat.woff) format("woff");
}
`;

const ButtonsContainer = styled<Props, any>("div")`
    color: ${props => props.color};
    font-family: ${props => props.fontFamily};
    padding: ${props => props.padding};
    text-align: ${props => props.buttonTextAlign};
`;

const Button = styled<Props, any>("div")`
    font-family: ${props => props.fontFamily};
    font-size:  ${props => props.fontSize};
    padding: ${props => props.padding};
    width: ${props => props.buttonWidth};;
    height: ${props => props.buttonWidth};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    text-align: ${props => props.buttonTextAlign};
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
    buttonTextAlign: string;
}

export class My_Radio_Buttons extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        color: "purple",
        backgroundColor: "yellow",
        padding: "8px",
        fontSize: "1rem",
        fontFamily: "Montserrat",
        numberOfButtons: 3,
        buttonWidth: "3rem",
        buttonHeight: "1rem",
        buttonColor: "pink",
        buttonTextAlign: "left",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        padding: { type: ControlType.String, title: "Padding" },
        fontFamily: { type: ControlType.String, title: "Font Family" },
        buttonWidth:  { type: ControlType.String, title: "Button Width" },
        buttonHeight:  { type: ControlType.String, title: "Button Height" },
        buttonColor:  { type: ControlType.Color, title: "Button Color" },
        buttonTextAlign: { type: ControlType.String, title: "Button Text Align"}
    }

    render() {
        return <ButtonsContainer color={this.props.color} 
        padding={this.props.padding} fontFamily={this.props.fontFamily} fontSize={this.props.fontSize} 
        textAlign={this.props.buttonTextAlign}>There are {this.props.numberOfButtons} Buttons.>
        <Button width={this.props.buttonWidth}
        height={this.props.buttonHeight} backgroundColor={this.props.buttonColor} 
        textAlign={this.props.buttonTextAlign}>Continue</Button>
        </ButtonsContainer>;
    }
}
