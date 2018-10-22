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

const Button = styled<Props, any>("div")`
    font-family: ${props => props.fontFamily};
    font-size:  ${props => props.fontSize};
    width: ${props => props.buttonWidth};;
    height: ${props => props.buttonWidth};
    background-color: ${props => props.backgroundColor};
    text-align: ${props => props.buttonTextAlign};
`;

// Define type of property
interface Props {
    text: string;
    fontSize: string;
    fontFamily: string;
    width: string;
    height: string;
    backgroundColor: string;
    color: string;
    textAlign: string;
}

export class My_Radio_Buttons extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        text: "Hello World!",
        fontSize: "1rem",
        fontFamily: "Montserrat",
        width: "4rem",
        height: "1rem",
        backgroundColor: "yellow",
        numberOfButtons: 3,
        textAlign: "left",
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        fontFamily: { type: ControlType.String, title: "Font Family" },
        width:  { type: ControlType.String, title: "Button Width" },
        height:  { type: ControlType.String, title: "Button Height" },
        backgroundColor:  { type: ControlType.Color, title: "Button Color" },
        textAlign: { type: ControlType.String, title: "Text Align"},
    }

    render() {
        return <Button color={this.props.color} 
        fontSize={this.props.fontSize} fontFamily={this.props.fontFamily} 
        width={this.props.width} height={this.props.height} backgroundColor={this.props.backgroundColor} textAlign={this.props.textAlign}>{this.props.text}</Button>
}
}

