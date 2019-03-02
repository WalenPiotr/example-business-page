import * as React from "react";
import * as background from "@assets/top-background.svg";
import Background from "./Background";
import Box from "./styled/Box";
import BigLetter from "./styled/BigLetter";
import Name from "./styled/Name";
import Subtitle from "./styled/Subtitle";

export interface HeaderProps {}
export default class Header extends React.Component<HeaderProps, any> {
    public render() {
        return (
            <Box>
                <BigLetter>C</BigLetter>

                <Background />
                <Name>Company Name</Name>
                <Subtitle>sub company name</Subtitle>
            </Box>
        );
    }
}
