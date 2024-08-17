const Rectangle = (props) => {
    return (
        <div className="absolute w-[60px] h-[60px] top-0 left-3">
            {props.rect}
        </div>
    )
}

export default Rectangle;