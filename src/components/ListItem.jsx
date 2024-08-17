const ListItem = (props) => {
    return (
        <li className="flex flex-row items-center space-x-5">
            <div>
                {props.svg}
            </div>
            <div>
                <h1 className="font-normal text-[20px]/[36px] font-roboto">
                    {props.text}
                </h1>
            </div>
        </li>
    )
}

export default ListItem;