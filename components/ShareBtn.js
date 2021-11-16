function shareBtn(props) {
    
    return (
        <a className="btn" target="_blank" rel="noreferrer" href={props.link}>
            <i className={props.icon}></i>{props.text}
        </a>
    );
}

export default shareBtn;