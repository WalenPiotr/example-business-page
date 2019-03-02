import styled from "styled-components";
import { colors, fonts } from "@theme";
const Box = styled.div`
    /* dimensions */
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: 50px;
    padding-left: 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    /* theme */
    background-color: ${colors.navbar.background};
    color: ${colors.navbar.font};
    font-size: ${fonts.size.large};
    font-weight: ${fonts.weight.bold};
`;
export default Box;
