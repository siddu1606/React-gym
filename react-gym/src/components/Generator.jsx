import React, {useState}  from "react"
import { SCHEMES, TRAINING } from "../utils/Quick"
import SectionWraper from "./SectionWraper"
import Button from "./Button"
//thsi is child component

function Header(props){
    const  {index, title, description} = props
    return(
        <div className="flex flex-col gap-4" >
            <div className="flex items-center justify-center gap-2" >
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-300" > {index} </p>
                <h4 className="text-xl sm:text-2xl md:text-3xl " >{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto" >{description}</p>
        </div>
    ) 
}

function Generator(props){
    const {poision, setPoision, muscles , setMuscles, goal, setGoal,updateWorkout} = props

    const [showModal, setShowModal] = useState(false)


    //let showModal = false;

    function toggelModal(){
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup){

        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup ))   //2:36
            return
        }

        if(muscles.length > 2){
            return
        }
        if(poision !== 'individual'){
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        
        setMuscles([...muscles, muscleGroup])
        if(muscles.length === 2){
            setShowModal(false)
        }
    }

    return(
        <>
        <SectionWraper id = {'generate'} header = {"Generate Your Workout"} title = {['It\'s', 'Huge', 'o\'clock']} > 
            <Header index = {'01'} title = {'Pick your poision'} description = {'Select the workout.'} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" >
            {Object.keys(TRAINING).map((type, typeIndex)=>{
                return(
                    <button onClick={() => {
                        setMuscles([])
                        setPoision(type)
                    }} className={"button border px-4 border-blue-400 duration-200 hover:border-blue-600 py-4 rounded-lg " + (type === poision ? 'border-blue-400' : 'border-blue-600')} key={typeIndex}>
                        <p className="capitalize" >{type.replaceAll('_', " ")}</p>
                    </button>
                )
            })}
            </div>

            <Header index = {'02'} title = {'Lock On'} description = {'Select the muscles you want to train.'} />
            <div className="button border border-solid border-blue-400 rounded-lg flex flex-col" >
            <button onClick={toggelModal} className="relative flex item justify-center  p-3" >
                <p className="capitalize " >{muscles.length == 0 ? 'Select Muscle Group' : muscles.join(", ")}</p>
                <div className="text-xl absolute right-2 bottom-3 -translate-y-1/2 " >
                    &darr;
                </div>
            </button>{showModal && (
                    <div className="flex flex-col p-3" >
                        {(poision === 'individual' ? TRAINING[poision] : Object.keys(TRAINING[poision])).map((muscleGroup, muscleGroupIndex) => {
                                return(
                                    <button onClick={() => {
                                        updateMuscles(muscleGroup)
                                    }} key={muscleGroupIndex} className={'hover:text-blue-300 duration-200' + (muscles.includes(muscleGroup) ? 'text-blue-900' : '')}>
                                    <p className="uppercase" >{muscleGroup.replace('_'," ")}</p>
                                </button>
                            )
                        }) }
                    </div>
                )}
            </div>
           
            <Header index = {'03'} title = {'Become Something Great'} description = {'Select your life objective.'} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" >
            {Object.keys(SCHEMES).map((scheme, schemeIndex)=>{
                return(
                    <button onClick={() => {
                        setGoal(scheme)
                    }} className={"button border border-blue-400 duration-200 hover:border-blue-600 py-4 rounded-lg px-4 " + (scheme === goal ? 'border-blue-400' : 'border-blue-600')} key={schemeIndex}>
                        <p className="capitalize" > {scheme.replaceAll('_', " ")} </p>
                    </button>
                )
            })}
            </div>
        <Button func = {updateWorkout} text = {'Frmulate'} ></Button>
        </SectionWraper>
        </>
    )
}
export default Generator
