function Term(props) {
    return (
        <div className="term">
            <h3 className="term__title">{props.title}</h3>
            <p className="term__definition">{props.definition}</p>
        </div>
    );
};

export default Term