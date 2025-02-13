import React from 'react'
import Cella from './Cella'



export default function JatekTer(props) {
    function katt(adat){
        props.katt(adat)
    }
  return (
    <>
        {
            props.lista.map( (elem, index)=>{
                return (<Cella jel={elem} key={index} index={index} katt={katt}/>)
            })
        }
    </>
  )
}
