import * as React from "react";
import Navbar from "./Navbar/Navbar";
import styled, { createGlobalStyle } from "styled-components";
import { fonts } from "@theme";
import Header from "./Header/Header";
import ComponentBox from "./styled/ComponentBox";
import About from "./About/About";
import Products from "./Products";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const GlobalStyle = createGlobalStyle`
    body, html {
        /* style reset */
        margin: 0;
        padding: 0;
        font-family: ${fonts.fontFamily};
        scroll-behavior: smooth;
    }
`;

const linksToElements = new Map<string, React.ReactNode>([
    ["Main", <Header />],
    ["About", <About />],
    ["Products", <Products />],
    ["Contact", <Contact />]
]);

interface AppState {
    current: string;
    refs: Map<string, HTMLDivElement>;
}
export interface AppProps {}
export default class App extends React.Component<AppProps, AppState> {
    state = {
        current: Array.from(linksToElements.keys())[0],
        refs: new Map<string, HTMLDivElement>()
    };
    onLinkClick = (current: string) => () => {
        this.setState({ current });
        const ref = this.state.refs.get(current);
        if (ref) {
            window.scrollTo(0, ref.offsetTop - 50);
        }
    };
    public render() {
        return (
            <div>
                <GlobalStyle />
                <Navbar
                    links={Array.from(linksToElements.keys())}
                    current={this.state.current}
                    onLinkClick={this.onLinkClick}
                />
                {Array.from(linksToElements.entries()).map(
                    ([link, component]) => (
                        <ComponentBox
                            key={link}
                            ref={instance => {
                                if (instance !== null) {
                                    this.state.refs.set(link, instance);
                                }
                            }}
                        >
                            {component}
                        </ComponentBox>
                    )
                )}
                <Footer>Created by Piotr Walen</Footer>
            </div>
        );
    }
}
