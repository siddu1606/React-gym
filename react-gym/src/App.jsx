import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import WorkOut from './components/WorkOut'
import {generateWorkout} from './utils/Functions'

function App() {

  const [workout, setWorkOut] = useState('')
  const [poision, setPoision] = useState('bro_split')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout(){
    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({muscles, poision, goal})
    console.log('newWorkout',newWorkout)
    setWorkOut(newWorkout)
    window.location.href = '#work'
  }

  return (
    //  <main className= {`min-h-screen flex flex-col bg-gradient-to-b from-emerald-600 to-black text-sm sm:text-base text-white `} >

    <main className={`min-h-screen flex flex-col  text-sm sm:text-base text-white main`}>

      <Hero/>
      <Generator poision ={poision}
      setPoision = {setPoision}
      muscles = {muscles}
      setMuscles = {setMuscles}
      goal = {goal}
      setGoal = {setGoal}
      updateWorkout = {updateWorkout}
      />
      {workout && (<WorkOut workout={workout} />)}
      </main>
  )
}

export default App
