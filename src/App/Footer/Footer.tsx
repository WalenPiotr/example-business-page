import styled from "styled-components";
import { colors, fonts } from "@theme";
const Footer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    padding-left: 10px;
    height: 40px;
    background-color: ${colors.navbar.background};
    color: ${colors.navbar.font};
    display: flex;
    align-items: center;
    font-size: ${fonts.size.small};
    font-weight: ${fonts.weight.light};
`;
export default Footer;
