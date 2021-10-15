import {  useReducer } from 'react';
import { InputType } from '../Helper/InputType';
import { getRadioGroup } from './getRadioGroup';
import './NeatForm.css'

//Reducer Function for managing Input state.
function validateInput(state, action) {
    switch (action.type) {
      case 'FOCUS':
        return {value:state.value,isValid:action.isValid,errorMessage:action.errorMessage};
      case 'INPUT':
        return {value:action.value,isValid:true,errorMessage:null};
      case 'EMPTY':
        return {value:state.value,isValid:action.isValid,errorMessage:action.errorMessage};
      case 'EMAIL':
        return {value:state.value,isValid:action.isValid,errorMessage:action.errorMessage};
      case 'PASSWORD':
        return {value:state.value,isValid:action.isValid,errorMessage:action.errorMessage};
      case 'NUMBER':
        return {value:state.value,isValid:action.isValid,errorMessage:action.errorMessage};  
      case 'DROPDOWN':
        return {value:state.value,isValid:action.isValid,errorMessage:action.errorMessage};  
      default:
        throw new Error();
    }
  }
const FormItem = props => {
    // Initial State
    const inputState={
        value:props.attr.value,
        isValid:true,
        errorMessage:null
    }

    
    const[input,dispatch]=useReducer(validateInput,inputState);
    

    /* All the event handlers First execute the validation 
    logic if it is to be applied then, execute the event handler passed 
    on to it by the user at the end.

    props.formValidate(props.attr.type.type,false);  is a function on NeatForm.js

    It manages the overall validity of the form and we are calling it for every Input Type 
    to change the validity of that particular type.

    */
   
   //onChangeHandler
    const inputChangeHandler=event=>{
        dispatch({type:'INPUT',value:event.target.value});
        if(props.attr.domEvents.onChange){
            props.attr.domEvents.onChange(event);
        }
    }


    //onBlur Handler
    // Checking for every input type and checking for validation as per the Input type.
    const inputBlurHandler=event=>{
        //Will run for all required field
        if(props.attr.required){
            if(input.value===''){
                dispatch({type:'EMPTY',isValid:false,errorMessage:props.attr.errorMessage})
                props.formValidate(props.attr.name,false);
            }
            else{
                dispatch({type:'EMPTY',isValid:true,errorMessage:''})
                props.formValidate(props.attr.name,true);
            }
            
        }

        //Email Validation
         if(props.attr.type===InputType.email){
            if(props.attr.type.emailValidation){
                if(!input.value.includes('@')){
                    dispatch({type:'EMAIL',isValid:false,errorMessage:props.attr.errorMessage});
                    props.formValidate(props.attr.name,false);
                    
                }
                else{
                    dispatch({type:'EMAIL',isValid:true,errorMessage:''});
                    props.formValidate(props.attr.name,true);
                }
            }
            
            
        }

        // Password Validation
         if(props.attr.type===InputType.password)
         {
            
            if(!props.attr.regex.test(input.value)){
                dispatch({type:'PASSWORD',isValid:false,errorMessage:props.attr.errorMessage})
                props.formValidate(props.attr.name,false);
            }
            else{
                console.log('in else');
                dispatch({type:'PASSWORD',isValid:true,errorMessage:''})
                
                props.formValidate(props.attr.name,true);
            }
        }

        //Number Validation
         if(props.attr.type===InputType.number){
           
            if(isNaN(input.value)){
                dispatch({type:'NUMBER',isValid:false,errorMessage:props.attr.errorMessage})
                props.formValidate(props.attr.name,false);
            }
            else{
                dispatch({type:'NUMBER',isValid:true,errorMessage:''})
                props.formValidate(props.attr.name,true);  
            }
        }

        //Dropdown Required Validation
        if(props.attr.type===InputType.dropdown){
            if(props.attr.required){
                if(input.value==='Select'){
                    dispatch({type:'DROPDOWN',isValid:false,errorMessage:props.attr.errorMessage})
                    props.formValidate(props.attr.name,false);
                }
                else{
                    dispatch({type:'DROPDOWN',isValid:true,errorMessage:props.attr.errorMessage})
                    props.formValidate(props.attr.name,true);
                }
            }
        }

        if(props.attr.domEvents.onBlur){
            props.attr.domEvents.onBlur(event);
        }
    }

    
    //onFocus Handler
    const inputFocusHandler=event=>{
        dispatch({type:'FOCUS',isValid:true,errorMessage:null})
        if(props.attr.domEvents.onFocus){
            props.attr.domEvents.onFocus(event);
        }
    }

    //onClick Handler
    const inputClickHandler=event=>{
        if(props.attr.domEvents.onClick){
            props.attr.domEvents.onClick(event);
        }
    }

    //onDoubleClick Handler
    const inputDbClickHandler=event=>{
        if(props.attr.domEvents.onDoubleClick){
            props.attr.domEvents.onDoubleClick(event);
        }
    }

    // onKeyDown Handler 
    const inputKeyDownHandler=event=>{
        if(props.attr.domEvents.onKeyDown){
            props.attr.domEvents.onKeyDown(event);
        }
    }

    //onKeyUp Handler
    const inputKeyUpHandler=event=>{
        if(props.attr.domEvents.onKeyUp){
            props.attr.domEvents.onKeyUp(event);
        }
    }



    //Creating dropdown Component, will only be rendered if input type is dropdown
    const dropDown=()=>{
        if(props.attr.type===InputType.dropdown){
            return (
                <div className="NFselect">
                <select name={props.attr.name} key={props.attr.name} className={!input.isValid ? 'NFInputInvalid':undefined} onChange={inputChangeHandler} onBlur={inputBlurHandler} onFocus={inputFocusHandler} required={props.attr.required}>
                    {props.attr.data.map((item)=>
                        <option  key={item.value} value={item.value}>{item.label}</option>
                    )}
                </select>
                </div>
            )
        }
        return null;
    }

    //returns the FormItem Component.
    return (
        <div className="NFFormItem">
            {props.attr.type!==InputType.hidden && <label>{
                props.attr.name
            }</label>}
            <br/>
            {props.attr.type===InputType.dropdown && 
                dropDown()
            }
            {props.attr.type===InputType.radioGroup && 
                getRadioGroup(props.attr
                    )
            }
            {props.attr.type===InputType.range && <span>{input.value}</span>}
            {props.attr.type!==InputType.dropdown && props.attr.type!==InputType.radioGroup && <input  className={!input.isValid ? 'NFInputInvalid':undefined} onClick={inputClickHandler} onDoubleClick={inputDbClickHandler} 
            onFocus={inputFocusHandler} onBlur={inputBlurHandler} onChange={inputChangeHandler} onKeyDown={inputKeyDownHandler}
            onKeyUp={inputKeyUpHandler}
            key={props.attr.name}
             name={
                    props.attr.name
                }
                type={
                    props.attr.type
                }
                placeholder={
                    props.attr.placeholder
                }
                value={
                    input.value
                }
                
                min={props.attr.rangeMin}
                max={props.attr.rangeMax}
                
                required={
                    props.attr.required
                }/>}
                {!input.isValid && <span style={{color:'red'}}>{input.errorMessage}</span>}
        </div>
    )
}
export default FormItem;
