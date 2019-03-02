import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { colors, fonts, media, minWidth } from "@theme";
import Title from "./styled/Title";
import Box from "./styled/Box";
import { Cross } from "styled-icons/icomoon/Cross";
import { ChevronLeft } from "styled-icons/fa-solid/ChevronLeft";
import { ChevronRight } from "styled-icons/fa-solid/ChevronRight";
import { number } from "prop-types";

interface WrapperProps {
    width: number;
    height: number;
    outerMarginHorizontal: number;
    outerMarginVertical: number;
}
const Wrapper = styled.div`
    width: ${({ width }: WrapperProps) => `${width}px`};
    height: ${({ height }: WrapperProps) => `${height}px`};
    margin-top: ${({ outerMarginHorizontal }: WrapperProps) =>
        `${outerMarginHorizontal}px`};
    margin-bottom: ${({ outerMarginHorizontal }: WrapperProps) =>
        `${outerMarginHorizontal}px`};
    margin-left: ${({ outerMarginVertical }: WrapperProps) =>
        `${outerMarginVertical}px`};
    margin-right: ${({ outerMarginVertical }: WrapperProps) =>
        `${outerMarginVertical}px`};
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    background-color: transparent;
`;

const Bar = styled.div`
    text-align: justify;
    font-size: ${fonts.size.medium};
    color: ${colors.text.base};
    background-color: ${colors.products.background};
`;

interface ProductProps {
    index: number;
    isCurrent: boolean;
    rows: number;
    columns: number;
    firstRender: boolean;
    height: number;
    width: number;
    marginVertical: number;
    marginHorizontal: number;
    outerMarginVertical: number;
    outerMarginHorizontal: number;
    horizontalViewport: boolean;
}
const Product = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: ${({ horizontalViewport }: ProductProps) =>
        horizontalViewport ? "row" : "column"};
    box-shadow: 15px 15px 15px -4px rgba(0, 0, 0, 0.75);
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    transition: all 0.3s
        ${({
            index,
            isCurrent,
            width,
            height,
            columns,
            rows,
            marginHorizontal,
            marginVertical,
            outerMarginHorizontal,
            outerMarginVertical
        }: ProductProps) => {
            if (isCurrent) {
                return css`
                    z-index: 100;
                    top: ${`${-outerMarginVertical}px`};
                    left: ${`${-outerMarginHorizontal}px`};
                    width: ${`${width * columns +
                        (columns - 1) * marginHorizontal +
                        outerMarginHorizontal * 2}px`};
                    height: ${`${height * rows +
                        (rows - 1) * marginVertical +
                        outerMarginVertical * 2}px`};
                    transition-delay: 0.2s;
                `;
            }
            return css`
                z-index: 1;
                width: ${`${width}px`};
                height: ${`${height}px`};
                left: ${`${(index - columns * Math.floor(index / columns)) *
                    (width + marginHorizontal)}px`};
                top: ${`${Math.floor(index / columns) *
                    (height + marginVertical)}px`};
                transition-delay: 0.3s;
            `;
        }};
`;

interface DescriptionProps {
    isCurrent: boolean;
}
const Description = styled.div`
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;

    transition: flex-basis 0.3s linear;
    ${(props: DescriptionProps) =>
        props.isCurrent
            ? css`
                  flex-basis: 60%;
                  transition-delay: 0.3s;
                  z-index: 11;
              `
            : css`
                  flex-basis: 0%;
                  transition-delay: 0s;
                  z-index: 0;
              `};
`;
interface ImageProps {
    isCurrent: boolean;
}
const Image = styled.div`
    ::before {
        border-bottom-left-radius: 15px;
        border-top-right-radius: 15px;
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        transform: translate3d(0, 0, 0);
        background-image: linear-gradient(
            to right,
            rgba(120, 120, 120),
            rgba(220, 220, 220)
        );
        background-size: cover;
        filter: brightness(75%);
    }
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 15px;
    ::after {
        border-bottom-left-radius: 15px;
        border-top-right-radius: 15px;
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        transform: translate3d(0, 0, 0);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${(props: ImageProps) => {
        if (!props.isCurrent) {
            return css`
                :hover {
                    ::after {
                        transform: translate3d(0, 0, 0);
                        transition: background-color 0.3s linear 0s;
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                }
            `;
        }
        return css`
            cursor: default;
        `;
    }}
`;
interface CloseButtonProps {
    visible: boolean;
}
const CloseButton = styled.button`
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 120px;
    height: 50px;
    padding: 0;
    color: white;
    z-index: 11;
    ${(props: CloseButtonProps) =>
        props.visible
            ? css`
                  opacity: 1;
                  transition: opacity 0.3s linear 0.3s,
                      visibility 0.3s linear 0.3s;
                  visibility: visible;
              `
            : css`
                  transition: opacity 0.3s linear 0s, visibility 0.3s linear 0s;
                  opacity: 0;
                  visibility: hidden;
              `};
`;
interface CollapseButtonProps {
    visible: boolean;
    horizontalViewport: boolean;
}
const CollapseButton = styled.button`
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: transparent;
    box-shadow: none;
    position: absolute;
    width: 120px;
    height: 50px;
    padding: 0;
    left: ${({ horizontalViewport }: CollapseButtonProps) =>
        horizontalViewport ? "-120px" : "0"};
    top: ${({ horizontalViewport }: CollapseButtonProps) =>
        horizontalViewport ? "0" : "-95px"};
    color: white;
    ${(props: CollapseButtonProps) => {
        if (props.visible) {
            return css`
                opacity: 1;
                transition: opacity 0.3s linear 0.3s,
                    visibility 0.3s linear 0.3s;
                visibility: visible;
            `;
        }
        return css`
            opacity: 0;
            transition: opacity 0.3s linear 0s, visibility 0.3s linear 0s;
            visibility: hidden;
        `;
    }}
`;

const IconGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background-color 0.3s linear 0s;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
    :hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
    margin: 15px;
    padding: 5px;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
`;
const CrossIcon = styled(Cross)`
    margin-top: 4px;
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
`;
const ChevronRightIcon = styled(ChevronRight)`
    width: 40px;
    height: 40px;
`;
const ChevronLeftIcon = styled(ChevronLeft)`
    width: 40px;
    height: 40px;
`;
interface ProductNameProps {
    visible: boolean;
}
const ProductName = styled.div`
    text-transform: uppercase;
    @media ${minWidth(media.tablet)} {
        font-size: ${fonts.size.large};
    }
    font-size: ${`calc(0.75*${fonts.size.large})`};
    font-weight: ${fonts.weight.bold};
    color: ${colors.navbar.font};
    z-index: 20;
    cursor: pointer;
    ${(props: ProductNameProps) => {
        if (props.visible) {
            return css`
                opacity: 1;
                transition: opacity 0.2s linear 0.3s,
                    visibility 0.2s linear 0.3s;
                visibility: visible;
            `;
        }
        return css`
            opacity: 0;
            transition: opacity 0.2s linear 0s, visibility 0.2s linear 0s;
            visibility: hidden;
        `;
    }};
`;

interface DescriptionTitle {
    horizontalViewport: boolean;
}
const DescriptionTitle = styled.div`
    font-weight: ${fonts.weight.bold};
    color: ${colors.navbar.font};
    width: calc(100%-2 * 20px);
    overflow: hidden;
    text-overflow: clip;
    text-transform: uppercase;
    transform: translate3d(0, 0, 0);

    ${(props: ProductNameProps) => {
        if (props.visible) {
            return css`
                margin-left: 20px;
                margin-right: 20px;
                margin-top: 20px;
                margin-bottom: 10px;
                opacity: 1;
                transition: opacity 0.3s linear 0.71s,
                    visibility 0.3s linear 0.71s, font-size 0.01s linear 0.7s,
                    margin 0.01s linear 0.7s;
                visibility: visible;
                @media ${minWidth(media.tablet)} {
                    font-size: ${fonts.size.xlarge};
                }
                font-size: ${`calc(0.75*${fonts.size.xlarge})`};
            `;
        }
        return css`
            opacity: 0;
            font-size: 0;
            transition: opacity 0.3s linear 0.01s, visibility 0.3s linear 0.01s,
                font-size 0.01s, margin 0.01s linear 0.1s;
            visibility: hidden;
        `;
    }}
`;
const DescriptionText = styled.div`
    font-weight: ${fonts.weight.regular};
    color: ${colors.navbar.font};
    width: calc(100%-2 * 20px);
    overflow: hidden;
    text-overflow: clip;
    transform: translate3d(0, 0, 0);
    ${(props: ProductNameProps) => {
        if (props.visible) {
            return css`
                opacity: 1;
                transition: opacity 0.3s linear 0.71s,
                    visibility 0.3s linear 0.71s, font-size 0.01s linear 0.7s,
                    margin 0.01s linear 0.7s;
                visibility: visible;
                margin-left: 20px;
                margin-right: 20px;
                @media ${minWidth(media.tablet)} {
                    font-size: ${fonts.size.medium};
                }
                font-size: ${`calc(0.75*${fonts.size.medium})`};
            `;
        }
        return css`
            opacity: 0;
            font-size: 0;
            transition: opacity 0.2s linear 0s, visibility 0.2s linear 0s,
                font-size 0.01s, margin 0.01s linear 0.1s;
            visibility: hidden;
        `;
    }}
`;
export interface ProductsProps {}
interface ProductsState {
    current: number | null;
    lastCurrent: number | null;
    firstRender: boolean;
    boxWidth: number;
    descriptionVisible: boolean;
    viewportHeight: number;
    viewportWidth: number;
}
export default class Products extends React.Component<
    ProductsProps,
    ProductsState
> {
    state = {
        current: null,
        firstRender: true,
        lastCurrent: null,
        boxWidth: 0,
        descriptionVisible: true,
        viewportHeight: -1,
        viewportWidth: -1
    };
    boxRef = React.createRef<HTMLDivElement>();

    resizeHandler = () => {
        this.setState({
            viewportHeight: window.innerHeight,
            viewportWidth: window.innerWidth
        });
    };
    componentDidMount() {
        this.setState({
            firstRender: false,
            viewportHeight: window.innerHeight,
            viewportWidth: window.innerWidth
        });
        window.addEventListener("resize", this.resizeHandler);
    }
    select = (index: number) => (event: React.MouseEvent) => {
        event.stopPropagation();
        this.setState(
            (prevState: ProductsState): ProductsState => ({
                ...prevState,
                current: index === prevState.current ? null : index,
                descriptionVisible: true
            })
        );
    };
    toggleDescription = (event: React.MouseEvent) => {
        event.stopPropagation();
        this.setState(
            (prevState: ProductsState): ProductsState => ({
                ...prevState,
                descriptionVisible: !prevState.descriptionVisible
            })
        );
    };
    render() {
        const { viewportHeight, viewportWidth } = this.state;
        const horizontalViewport = viewportWidth / viewportHeight > 1;
        const ratio =
            viewportWidth > media.desktop
                ? 0.35
                : viewportWidth > media.laptopL
                ? 0.45
                : viewportWidth > media.laptop
                ? 0.6
                : viewportWidth > media.tablet
                ? 0.7
                : 0.85;
        const boxWidth = ratio * viewportWidth;
        const boxHeight = ratio * viewportHeight * 0.9;
        const columns = horizontalViewport ? 3 : 2;
        const base = [1, 2, 3, 4, 5, 6];
        const marginVertical = 15;
        const marginHorizontal = 15;
        const outerMarginHorizontal = 20;
        const outerMarginVertical = 20;
        const rows = Math.ceil(base.length / columns);
        const width =
            (boxWidth -
                marginHorizontal * (columns - 1) -
                2 * outerMarginHorizontal) /
            columns;
        const height =
            (boxHeight -
                marginVertical * (rows - 1) -
                2 * outerMarginVertical) /
            rows;
        console.log(width);
        const els = base.map((el: number, index: number) => (
            <Product
                key={index}
                index={index}
                isCurrent={index === this.state.current}
                firstRender={this.state.firstRender}
                rows={rows}
                columns={columns}
                width={width}
                height={height}
                marginVertical={marginVertical}
                marginHorizontal={marginHorizontal}
                outerMarginVertical={outerMarginVertical}
                outerMarginHorizontal={outerMarginHorizontal}
                horizontalViewport={horizontalViewport}
                onClick={
                    this.state.current === null ? this.select(index) : undefined
                }
            >
                <CloseButton
                    onClick={this.select(index)}
                    visible={this.state.current === index}
                >
                    <IconGroup>
                        <CrossIcon />
                        Close
                    </IconGroup>
                </CloseButton>
                <Image isCurrent={index === this.state.current}>
                    <ProductName visible={!(index === this.state.current)}>
                        Example Title
                    </ProductName>
                </Image>
                <Description
                    isCurrent={
                        index === this.state.current &&
                        this.state.descriptionVisible
                    }
                >
                    <CollapseButton
                        horizontalViewport={horizontalViewport}
                        onClick={this.toggleDescription}
                        visible={index === this.state.current}
                    >
                        {this.state.descriptionVisible ? (
                            <IconGroup>
                                <ChevronRightIcon />
                                Show
                            </IconGroup>
                        ) : (
                            <IconGroup>
                                <ChevronLeftIcon />
                                Hide
                            </IconGroup>
                        )}
                    </CollapseButton>
                    <DescriptionTitle
                        visible={
                            index === this.state.current &&
                            this.state.descriptionVisible
                        }
                    >
                        Example Title
                    </DescriptionTitle>
                    <DescriptionText
                        visible={
                            index === this.state.current &&
                            this.state.descriptionVisible
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris urna ligula, tristique nec accumsan sit amet,
                        rutrum eget arcu. Sed laoreet lorem at laoreet cursus.
                        Ut consequat mi et ullamcorper gravida. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Maecenas pellentesque nisl
                        enim, quis condimentum libero gravida vitae. Nam nisi
                        felis, ultrices quis nunc a, dictum egestas urna.
                    </DescriptionText>
                </Description>
            </Product>
        ));
        return (
            <Bar>
                <Box ref={this.boxRef}>
                    <Title>Products</Title>
                    <Wrapper
                        outerMarginHorizontal={outerMarginHorizontal}
                        outerMarginVertical={outerMarginVertical}
                        width={
                            columns * width + (columns - 1) * marginHorizontal
                        }
                        height={rows * height + (rows - 1) * marginVertical}
                    >
                        {els}
                    </Wrapper>
                </Box>
            </Bar>
        );
    }
}
