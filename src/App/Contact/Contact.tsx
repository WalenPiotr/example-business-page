import * as React from "react";
import Box from "../styled/Box";
import Title from "../styled/Title";
import Subtitle from "../styled/Subtitle";
import BaseText from "../styled/BaseText";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = props => {
    return (
        <Box>
            <Title>Contact</Title>
            <Subtitle>Full Company Name</Subtitle>
            <BaseText>221B Baker Street, London, England</BaseText>
            <BaseText>phone: 123 456 789</BaseText>
            <BaseText>email: mail@example.com</BaseText>
        </Box>
    );
};

export default Contact;
