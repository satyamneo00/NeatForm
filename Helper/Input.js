
export function Input(name,type,value,placeholder,required,errorMessage){
            this.name=name;
            this.type=type;
            this.value=value;
            this.placeholder=placeholder;
            this.required=required;
            this.errorMessage=errorMessage;
            this.domEvents={
                onBlur:null,
                onChange:null,
                onFocus:null,
                onClick:null,
                onDoubleClick:null,
                onKeyDown:null,
                onKeyUp:null,
            }
}


export default Input;
