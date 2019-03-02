export const colors = {
    navbar: {
        background: "rgb(50, 50, 50)",
        font: "rgb(250, 250, 250)"
    },
    text: {
        weak: "rgb(50, 50, 50)",
        base: "rgb(30, 30, 30)",
        strong: "rgb(10, 10, 10)"
    },
    border: "rgb(150, 150, 150)",
    shadow: "rgba(150, 150, 150, 0.25)",
    bigLetter: "rgba(250, 250, 250, 0.1)",
    products: {
        background: "rgb(240, 240, 240)"
    }
};
export const fonts = {
    size: {
        small: "12px",
        medium: "16px",
        large: "24px",
        xlarge: "32px",
        xxlarge: "48px"
    },
    weight: {
        light: 300,
        regular: 400,
        bold: 500
    },
    fontFamily: "'Poppins', sans-serif;"
};
export const media = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

export const minWidth = (size: number) => `(min-width: ${size}px)`;
