
export function Input(name,type,value,placeholder,required,errorMessage){
    this.name=name;
    this.type=type;
    this.value=value;
    this.placeholder=placeholder;
    this.required=required;
    this.errorMessage=errorMessage;
    this.data=[{
        label:'Select',
        value:null
        }
    ];
    this.regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    this.rangeMin=0;
    this.rangeMax=100;
    this.radioGroupData={
        name:'',
        values:[]
    }
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
