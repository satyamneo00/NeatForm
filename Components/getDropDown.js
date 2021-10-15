export const dropDown=(props)=>{
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