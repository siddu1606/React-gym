import ExerciseCard from "./ExerciseCard";
import SectionWraper from "./SectionWraper";

function WorkOut(props){
    const {workout} = props;
    return(
        <div>
            <SectionWraper header = {"WELCOME TO"} id = {'work'} title = {['THE', 'DANGER', 'ZONE']}>     
                <div className="flex flex-col gap-4" >
                    {workout && workout.map((exercise, i) => {
                        return(
                            <ExerciseCard i = {i} exercise = {exercise} key = {i} />
                        )
                    })}
                </div>
            </SectionWraper>
        </div>
    )
}
export default WorkOut

// import React from 'react'
// import SectionWraper from './SectionWraper'
// import ExerciseCard from './ExerciseCard'

// export default function Workout(props) {
//     const { workout } = props
//     return (
//         <SectionWraper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
//             <div className='flex flex-col gap-4'>
//                 { workout.map((exercise, i) => {
//                     return (
//                         <ExerciseCard  exercise={exercise} key={i} />
//                     )
//                 })}
//             </div>
//         </SectionWraper>
//     )
// }
