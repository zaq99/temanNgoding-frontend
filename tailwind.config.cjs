/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        gradients: {
            "custom-gradient": {
                colors: ["#fedd86", "#6e3c95"],
                directons: ["to bottom", "to top"],
            },
        },
        extend: {
            colors: {
                "warna-utama-500": "#542E71",
                "warna-utama-400": "#6e3c95",
                "warna-utama-300": "#894db7",
                "warna-utama-200": "#a172c5",
                "warna-utama-100": "#b996d4",
                "succes-500": "#129C20",
                "succes-400": "#18C929",
                "succes-300": "#2DE640",
                "succes-200": "#5BEC69",
                "succes-100": "#88F193",
                "kuning-500": "#fdca40",
                "kuning-400": "#fdd25d",
                "kuning-300": "#fedd86",
                "kuning-200": "#fee6a4",
                "kuning-100": "#feeec3",
                "danger-500": "#fb3640",
                "danger-400": "#fc5059",
                "danger-300": "#fc6970",
                "danger-200": "#fd8288",
                "danger-100": "#fd98a0",
                "aksen-500": "#8e7ba2",
                "aksen-400": "#a799b7",
                "aksen-300": "#c1b7cc",
                "aksen-200": "#dbd5e1",
                "aksen-100": "#f5f3f7",
            },
            fontSize: {
                "display-size": "96px",
            },
        },
    },
    plugins: [],
};
