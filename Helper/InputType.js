export const InputType={
    text:{
        type:'text',
    },
    email:{
        type:'email',
        emailValidation:true
    },
    password:{
        type:'password',
        regex:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    },
    number:{
        type:'number',
        numberValidation:true
    },
    dropdown:{
        type:'dropdown',
        data:[{
            label:'Select',
            value:null
            }
        ]
    }
    
}