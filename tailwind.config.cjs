/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "warna-utama-500": "#542E71",
                "warna-utama-400": "#6e3c95",
                "warna-utama-300": "#894db7",
                "warna-utama-200": "#a172c5",
                "warna-utama-100": "#8996d4",
                "succes-500": "#129C20",
                "succes-400": "#18C929",
                "succes-300": "#2DE640",
                "succes-200": "#5BEC69",
                "succes-100": "#88F193",
            },
        },
    },
    plugins: [],
};
