import {React, useState} from 'react'
import Conter from '../../components/Conter'
import { ButtonAction } from '../../components/ButtonAction'
import "./index.css"

const Home = () => {

  //crio uma referencia iniciada no valor 0
  //para que seja modificada nas funçoes
  const [cont, setCont] = useState(0)
  
  //funçao de adicionar ela pega o valor de 
  //contref e adiciona sempre +1
  function Incremet(){

    setCont((prev)=> prev +1)
    
    

  }
  //funçao de decrementar ela pega o valor atual
  //de contref e subtrai 1 desse valor
  //se o valor for igual a 0 não há oque decrementar
  function Decrement(){
    if(cont === 0){
      setCont((prev)=> prev = 0)

    }else{
      setCont((prev)=> prev - 1)

    }
  }

  //reseta o valor da referencia para 0
  function Reset(){
    setCont(0)

  }

 

  return (
    <div className='conter'>
      <h2>Contador</h2>
      <Conter  Number={cont}/>
      <div className='action_buttons'>
      <ButtonAction name='Prev' lefunction={Decrement}/>
      <ButtonAction name="Reset" lefunction={Reset}/>
      <ButtonAction name="Next" lefunction={Incremet}/>


      </div>
     

    
    </div>
  )
}

export default Home