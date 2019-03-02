import styled, { css } from "styled-components";
import { colors, fonts, minWidth, media } from "@theme";
interface LinkProps {
    current?: boolean;
}
const Link = styled.button`
    /* reset */
    text-decoration: none;
    border: none;
    background-color: transparent;
    /* theme */
    color: ${colors.navbar.font};
    font-family: ${fonts.fontFamily};
    /* dimensions */
    font-size: ${`calc(0.8*${fonts.size.medium})`};
    @media ${minWidth(media.tablet)} {
        font-size: ${fonts.size.medium};
    }
    height: 100%;
    width: 90px;
    /* props */
    ${({ current }: LinkProps) => {
        if (current) {
            return css`
                font-weight: ${fonts.weight.bold};
            `;
        }
        return css`
            font-weight: ${fonts.weight.regular};
        `;
    }}
`;
export default Link;
