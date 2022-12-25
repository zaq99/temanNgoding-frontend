const Button = (props) => {
    const { text, className } = props;

    return (
        <button
            className={`${className} py-1 px-2 text-xs font-semibold rounded-md text-warna-utama-500`}>
            {text}
        </button>
    );
};

export default Button;
