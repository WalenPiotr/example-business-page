import * as React from "react";
import Box from "../styled/Box";
import Title from "../styled/Title";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
    return (
        <Box>
            <Title>About</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
            turpis lobortis, placerat arcu in, hendrerit elit. Vestibulum
            lobortis rhoncus eros, ac fringilla massa cursus vulputate. Sed eros
            risus, facilisis vel enim eget, ornare eleifend erat. Duis convallis
            leo ac lacinia viverra. In eu ligula sagittis, dictum velit et,
            fermentum metus. Fusce volutpat, libero et viverra facilisis, arcu
            odio congue justo, ut sodales ex tortor at diam. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum suscipit gravida metus sit amet placerat.
            Mauris sed tincidunt quam. Aliquam at molestie urna. Donec erat
            quam, sollicitudin quis libero quis, commodo ultrices velit. Integer
            aliquam nunc at quam hendrerit, semper imperdiet orci varius.
            Praesent ac dapibus risus, non consectetur erat. Proin ac luctus
            lorem. In aliquam auctor mi sed pharetra. Vestibulum ullamcorper
            sagittis odio, eu feugiat tortor tempus eu. Integer mollis sapien
            sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sed posuere dui, et gravida mi. Etiam ac turpis vitae
            arcu convallis efficitur.
        </Box>
    );
};

export default About;
