import * as React from "react";
import Box from "./styled/Box";
import Link from "./styled/Link";
export interface NavbarProps {
    links: string[];
    onLinkClick: (index: string) => () => void;
    current: string;
}
export default class Navbar extends React.Component<NavbarProps, any> {
    public static defaultProps = {
        links: ["Home", "About", "Contact"],
        current: "Home",
        onLinkClick: (index: string) => () => {
            return;
        }
    };
    public render() {
        const links = this.props.links.map((title: string) => (
            <Link
                current={title == this.props.current}
                key={title}
                onClick={this.props.onLinkClick(title)}
            >
                {title}
            </Link>
        ));
        return <Box>{links}</Box>;
    }
}
