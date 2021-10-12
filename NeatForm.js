import { useEffect, useRef, useState } from 'react';
import FormItem from './Components/FormItem';
import './Components/NeatForm.css'
 import Input from './Helper/Input';
import { InputType } from './Helper/InputType';
export const formState=[];
const NeatForm=props=>{

    //Populating formState validity array
   useEffect(()=>{
    for(let i=0;i<props.formAttr.length;i++){
        let isValid=false;
        if(!props.formAttr[i].required){
            isValid=true;
        }
        formState.push({[props.formAttr[i].type.type]:isValid})
    }
   })

   //Holds the formState Array
   const[formValidStates,setFormValidStates]=useState(formState);


   const[isFormVald,setIsFormValid]=useState(false);



    
   //Creating Form Ref to read form while Submitting the Form
    const formRef=useRef();

    //Reading the form using Ref
    const formSubmitHandler=event=>{
        event.preventDefault();
        const formData={};
        for(let i=0;i<formRef.current.length-1;i++){
            formData[formRef.current[i].name]=formRef.current[i].value;
        }
        //console.log(formRef.current)
       props.formSubmit(formData);
    }


    //changing the formState array based on the value passed by FormItem.
    const formValidateHandler=(input,isValid)=>{
        const index=formState.findIndex(i=>i.hasOwnProperty(input));
        console.log(index)
        formState[index][input]=isValid;
        setFormValidStates(formState)
        console.log(formValidStates)  
        checkIsFormValid();
    }

    //Checking for overall validity of the form and updating the state.
    const checkIsFormValid=()=>{
        for(const state of formValidStates){
            for(const input in state){
                if(state[input]===false){
                    console.log(state[input])
                    setIsFormValid(false);
                    return;
                }
            }
        }
        setIsFormValid(true);
    }


    // Returns NeatForm Component.
    return(
   
        <div className="NFFormMain">
            <form ref={formRef} onSubmit={formSubmitHandler}>
                {props.formAttr.map(attr=>
                    <FormItem key={attr.name} formValidate={formValidateHandler}  attr={attr}/>
                )}
                <input className="NFSubmit"  type="submit" value={props.submitValue} disabled={!isFormVald}/>
            </form>
        </div>
   
    )
}
export {Input,InputType}
export default NeatForm;