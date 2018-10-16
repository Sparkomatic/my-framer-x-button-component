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
`;

const ButtonsContainer = styled<Props, any>("div")`
    background-color: ${props => props.color};
    font-family: ${props => props.fontFamily};
    font-size:  ${props => props.fontSize};
    padding: ${props => props.padding};
`

// Define type of property
interface Props {
    text: string;
    color: string;
    fontSize: string;
    fontFamily: string;
    padding: string;
}

export class My_Radio_Buttons extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    text: "Hello World!",
    color: "blue",
    padding: "8px",
    fontSize: "6em",
    fontFamily: "Polaris"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    color: { type: ControlType.Color, title: "Colour"},
    padding: { type: ControlType.String, title: "Padding" },
    fontSize: { type: ControlType.String, title: "Font Size" },
    fontFamily: { type: ControlType.String, title: "Font Family" },
    }

    render() {
    return <ButtonsContainer color={this.props.color} padding={this.props.padding} font-family={this.props.fontFamily} font-size={this.props.fontSize}><div>There are {this.props.numberOfButtons} Buttons
    and the padding property is {this.props.padding} and the font family is {this.props.fontFamily}</div></ButtonsContainer>;
    }
}
