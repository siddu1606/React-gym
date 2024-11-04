import React, {useState} from "react";

function ExerciseCard(props){
    const {exercise, i} = props
    const [stesCompleted, setSetcomplete] = useState(0)

    function handleSetEvent(){
        setSetcomplete((stesCompleted + 1) % 5)
    }

    return(
        <div className="p-4 rounded-md flex flex-col gap-4 SectionWraper sm: flex-wrap" >
            <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-4" >
                <h4 className="text-3xl hidden sm:inline sm:text-4xl md: tex5xl text-blue-400 font-semibold" >
                    0{ i + 1}
                </h4>
                <h2 className="capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl  flex-1 sm:text-center" >{exercise.name.replaceAll('_', " ")}</h2>
                <p className="text-sm  text-blue-400 capitalize" >  {exercise.type} </p>
            </div>
            <div className="flex flex-col" >
                <h3 className="text-bl400 text-sm" >Muscle Group</h3>
                <p className="capitalize " > {exercise.muscles.join(' & ')}</p>
            </div>
            <div className="flex flex-col button gap-2" >
                {exercise.description.split('___').map((val) => {
                    return(
                        <div className="text-sm" >
                            {val}
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2" >
                {['reps', 'rest', 'tempo'].map(info => {
                    return(
                        <div key={info} className="flex flex-col  p-2 rounded border-[1.5px] border-solid  w-full" >
                            <h3 className="capitalize card text-sm" >{info ===  'reps' ? `${exercise.unit}` : info}</h3>
                            <p className="font-medium" > {exercise[info]} </p>
                        </div>
                    )
                })}
            <button onClick={handleSetEvent} className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-400 hover:border-blue-300 w-full " >
                <h3 className=" text-sm capitalize card " >Sets completed</h3>
                <p className="font-medium" > {stesCompleted} / 5 </p>
            </button>
            </div>
        </div>
    )
}

export default ExerciseCard;