function shareBtn(props) {
    
    return (
        <a title={props.text} className="btn" target="_blank" rel="noreferrer" href={props.link}>
            <i className={props.icon}></i> {props.text}
        </a>
    );
}

export default shareBtn;