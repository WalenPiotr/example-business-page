import styled from "styled-components";
import { fonts, colors, minWidth, media } from "@theme";

const Box = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: justify;
    font-size: ${fonts.size.medium};
    color: ${colors.text.base};
    width: 85vw;
    @media ${minWidth(media.tablet)} {
        width: 70vw;
    }
    @media ${minWidth(media.laptop)} {
        width: 60vw;
    }
    @media ${minWidth(media.laptopL)} {
        width: 45vw;
    }
    @media ${minWidth(media.desktop)} {
        width: 35vw;
    }

    margin: 50px auto;
`;
export default Box;
