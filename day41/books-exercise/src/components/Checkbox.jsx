function Checkbox(props) {

    const changeRead = () => {
        props.setStatus(!props.status);
    }

    return (

        <input type="checkbox"
            id="readStatus"
            checked={props.readStatus}
            onChange={changeRead}
        />

    )
}

export default Checkbox;