import styled from "styled-components";
import { fonts, colors } from "@theme";
const Title = styled.div`
    font-size: ${fonts.size.xlarge};
    color: ${colors.text.strong};
    font-weight: ${fonts.weight.bold};
    text-transform: uppercase;
    margin: 10px auto;
    padding-bottom: 10px;
    border-bottom: 3px solid grey;
`;
export default Title;
