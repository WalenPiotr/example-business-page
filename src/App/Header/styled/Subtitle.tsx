import styled from "styled-components";
import { colors, fonts, minWidth, media } from "@theme";
const Subtitle = styled.div`
    /* dimensions */
    position: absolute;
    z-index: 3;
    top: 125px;
    left: 45px;
    font-size: calc(0.8 * ${fonts.size.medium});
    @media ${minWidth(media.tablet)} {
        font-size: ${fonts.size.medium};
        top: 132px;
    }
    color: ${colors.navbar.font};
    text-transform: uppercase;
    font-weight: 500;
`;
export default Subtitle;
