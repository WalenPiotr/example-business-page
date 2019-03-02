import styled from "styled-components";
import { colors, fonts, minWidth, media } from "@theme";
const Name = styled.div`
    /* dimensions */
    position: absolute;
    z-index: 3;
    top: 90px;
    left: 35px;
    color: ${colors.navbar.font};
    font-weight: 700;

    font-size: calc(0.8 * ${fonts.size.xlarge});
    @media ${minWidth(media.tablet)} {
        font-size: ${fonts.size.xlarge};
    }
`;
export default Name;
