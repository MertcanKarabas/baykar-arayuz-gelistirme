const SingleButton = (props) => {
    return (
        <button className={`${props.btnClassName}`} onClick={props.click}>
            <div className="container">
                <div
                    className={`flex flex-row items-center justify-center ${props.padding} ${props.svg && props.title ? 'space-x-2' : ''
                        }`}
                >
                    {props.svg && (
                        <div>
                            {props.svg}
                        </div>
                    )}
                    <h1 className={` ${props.textColor}`}>
                        {props.title}
                    </h1>
                </div>
            </div>
        </button>
    )
}

export default SingleButton;