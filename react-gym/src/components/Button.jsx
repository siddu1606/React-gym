

function Button(props){
    const {text, func} = props;
    return(
        <button onClick={func} className="px-8 mx-auto py-4 rounded-md  button border-solid border-2 border-blue-400 blueShadow duration-200" >
        <p className="text-white" > 
        {text}
        </p>
        </button>
    )
}

export default Button;