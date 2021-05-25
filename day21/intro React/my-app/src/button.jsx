const Button = () => {

    const haverstData = (e) => {
        e.preventDefault();
        console.log("Harvesting data, selling data")
    }

    return <a href="https://www.facebook.com" onClick={haverstData}>
        Sign into Facebook
    </a>
}

export default Button;