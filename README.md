
NeatForm provides a resuable Form component. You can use NeatForm to quickly create different kind of forms without having to worry about writing JSX, 
CSS and managing Form states for Form Validation.
Neat Form comes with built in basic form validations for Email, Password, Number and required fields.

NeatForm currenty supports five field types:
1. text
2. email
3. password
4. number
5. Select Option
6. color
7. file
8. date
9. datetime-local
10. time
11. radio group
12. checkbox
13. range
14. month
15. url
16. week
17. hidden


<h2>How to use NeatForm?</h2>

Using NeatForm is fairly simple, follow the step by step guide to create your first NeatForm:

<h3>Installing NeatForm</h3>

In your project folder run 

```npm install neat-forms```

<h3>Importing NeatForm<h3>

Import the below in the components where you want to use NeatForm
```
import NeatForm ,{Input,InputType} from 'neat-forms'
```

<h3>Input</h3>

By creating an object of Input you create a new instance of Input field. Input constructor takes 6 parameters:

-> <b>name,type(from InputType object),value,placeholder,required(true/false),errorMessage</b> . More about InputType in Input Type section.

Additionally Input object has a propery <b>domEvents</b> which you can use to pass different event handler functions. The list of events supported is as follows:

1. onBlur
2. onChange
3. onFocus
4. onClick
5. onDoubleClick
6. onKeyDown
7. onKeyUp

More about domEvent in 'Adding domEvents section'

Input has few more properties regex, data, minRange,maxRange,radioGroupData, they will be covered in relevant sections.


<h4>Example</h4>

```
const inputField=new Input('Email',InputType.email,'','Email',true,'Email is not Valid');
```

In the above code snippet we are creating a new inputField of type InputType.email, value is ''(empty), placeholder is 'Email', required is true and errorMessage
'Email is not Valid'

Similarlly you can create different field objects as shown below in code snippet.


```
const inputField=new Input('Email',InputType.email,'','Email',true,'Email is not Valid');
const passwordField=new Input('Password',InputType.password,'','Password',true,'Password must be 6-16 characters long and must contain a number and a special character');
```

<h3>Input Type</h3>

Shown in above code, we pass InputType.email or InputType.password in Input constructor. There are other input types that you can use:

1. InputType.text
2. InputType.email
3. InputType.password
4. InputType.number
5. InputType.dropdown (More in creating dropdown section)
6. InputType.checkbox
7. InputType.color
8. InputType.date
9. InputType.datetimeLocal
10. InputType.file
11. InputType.radioGroup
12. InputType.month
13. InputType.range
14. InputType.time
15. InputType.url
16. InputType.week


<h3>Adding domEvents to Input</h3>

Please see the below code to understand how to add domEvents to input fields:
 ```
 const inputField=new Input('Email',InputType.email,'','Email',true,'Email is not Valid');
 
  inputField.domEvents.onBlur=(event)=>{
       console.log(event.target.value)
       }
       
 ```
 
 <h3>Adding Regex to Input</h3>
 
 Regex is only helpful in password fields, use regex to define the complexity of password validation as follows:
 
 ```
  const passwordField=new Input('Password',InputType.password,'','Password',true,'Password must be 6-16 characters long and must contain a number and a special character');
  passwordField.regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
 ```
 
 <h3>Adding Data to input</h3>
 
 data is also not a mandatory property, use it only in case of dropdown to pass an array of key value pair as shown below
 
 ```
  const dropdownField=new Input('Fruit',InputType.dropdown,'','',false,'You must select an item');
  dropdownField.data=[{label:'Apple',value:'Apple'}];
 ```
 
<h3>Adding minRange and maxRange to input</h3>
 
 these properties are only relevnant for range type input and also not a mandatory property.

 ```
   const rangeInput=new Input('Range',InputType.range,'','',false,'');
    rangeInput.rangeMin=200;
    rangeInput.rangeMax=500;
 ```

 <h3>Adding radioGroupData to input</h3>
 
 Set this property to use radioGroup. See below example:

 ```
    const radioGroupInput=new Input('Gender',InputType.radioGroup,'','',true,'Required Field');
    radioGroupInput.radioGroup.name='Gender'
    radioGroupInput.radioGroup.values=['Male','Female'];
 ```
 

 <h3>Adding input fields to Form Attributes</h3>
 
 Create an array as shown below
 
 ```
  const formAttr=[inputField,passwordField,dropdownField,........]
 ```
 Note: ..... is just representation that many more input fields can be added to the array.
 <h3>Rendering Neat Form</h3>
 
 ```
 return(
        <NeatForm formAttr={formAttr} formSubmit={submitHandler}  submitValue='Save'/>
    )
  ```
  
  We passed the formAttr as props to NeatForm, also there are two more props NeatForm expects and they are manadatory in order for NeatForm to behave as expected.
  
  <h3>Passing formSubmit Prop</h3>
  
  Passing formSubmit is manadatory because when the form is submitted by the user, it returns the form data in the form of an object to the Parent Component.
  
  Refer to below example:
  
  ```
  const submitHandler=(formData)=>{
        console.log(formData);
    }
 ```
 
 Pass this submitHandler as formSubmit prop in NeatForm component:
 
 ```
<NeatForm formAttr={formAttr} formSubmit={submitHandler}  submitValue='Login'/>
```

formData will be in below format,just a javaScript object:

```
{Email: 'admin@admin.com', Password: 'kskdhkdh@1212', Fruit: 'Apple', Remember: '', Color: '#9d5353', …}
Color: "#9d5353"
DateTime: "2021-10-07T01:40"
Email: "admin@admin.com"
File: "C:\\fakepath\\bootstrap.css"
Fruit: "Apple"
Gender: "Female"
Month: "2021-06"
Password: "kskdhkdh@1212"
Range: "436"
Remember: ""
Time: "01:42"
URL: "https://google.com"
date: "2021-10-07"
hidden: "this is hidden value"
[[Prototype]]: Object
```
<h3>Passing submitValue prop</h3>

In the above code snippet we are pass submitValue prop, it is the text that you will see on submit button.


<h3>Complete Code Example</h3>

Refer to the below code example, the below code example cover mostly all the types of input fields and their usage in neat-forms

```

import NeatForm ,{Input,InputType} from 'neat-forms'
const Test=()=>{
    //creating email field
    const inputField=new Input('Email',InputType.email,'','Email',true,'Email is not Valid');
    // passing domEvent onBlur to inputField
    inputField.domEvents.onBlur=(event)=>{
        console.log(event.target.value);
        
    }
    
    //creating passwordField
    const passwordField=new Input('Password',InputType.password,'','Password',true,'Password must be 6-16 characters long and must contain a number and a special character');
    //adding regex to password
    passwordField.regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    //creating dropdown field
    const dropdownField=new Input('Fruit',InputType.dropdown,'','',false,'You must select an item');

    //adding data to dropdownfield
    dropdownField.data=[{label:'Apple',value:'Apple'}];

    //creating other fields
    const checkBox=new Input('Remember',InputType.checkbox,'','',false,'');
    const colorInput=new Input('Color',InputType.color,'','',false,'');
    const dateInput=new Input('date',InputType.date,'','',false,'');
    const dateTimeInput=new Input('DateTime',InputType.datetimeLocal,'','',true,'Required Field');
    const timeInput=new Input('Time',InputType.time,'','',true,'Required Field');
    const urlInput=new Input('URL',InputType.url,'','',false,'');
    const fileInput=new Input('File',InputType.file,'','',false,'');
    const monthInput=new Input('Month',InputType.month,'','',false,'');
    //range field
    const rangeInput=new Input('Range',InputType.range,'','',false,'');
    //adding range
    rangeInput.rangeMin=200;
    rangeInput.rangeMax=500;

    //radioGroup
    const radioGroupInput=new Input('Gender',InputType.radioGroup,'','',true,'Required Field');
    //setting radioGroupData properties..
    radioGroupInput.radioGroupData.name='Gender'
    radioGroupInput.radioGroupData.values=['Male','Female'];

    //hidden field
    const hiddenInput=new Input('hidden',InputType.hidden,'this is hidden value','',false,'');

    const formAttr=[inputField,passwordField,dropdownField,checkBox,colorInput,dateInput,dateTimeInput,timeInput,urlInput,fileInput,monthInput,rangeInput,radioGroupInput,hiddenInput]
    
    const submitHandler=(formData)=>{
        console.log(formData);
    }
   
    return(
        <NeatForm formAttr={formAttr} formSubmit={submitHandler}  submitValue='Save'/>
    )
}
export default Test;

```
Note: It is recommended that you use unique name for each Input field as names are passed as keys in input and they should be unique.
<h3>Output</h3>

The above code will generate a form with three fields and the Login button will be disabled by default, because few fields are required.
Each field will be checked for basic validations such as required, email and password length and will show error accordingly when the input field becomes blur.

Submit button will remain disabled until all the required fields are valid.


<h3>Styling of Form</h3>

Form generated by NeatForm is simple and sober. However, if you want to change the look and field of the form, you can do that by directly modfying the css of 
classed used in NeatForm in your own app.

List of classes used in NeatForm are:


- NFFormMain : The outer div that conatins the form.
- NFFormMain form : use this to modify form css.
- NFInputInvalid : use this to modify invalid field css.
- NFSubmit: use to modify submit button.

You can always refer to Developer tools or GitHub  and update the css accordingly in your own project.


I hope you enjoy using NeatForm and it makes your life easy. In case you face any issue, feel free to raise an issue or email me @ satyam.neo@outlook.com

Also if you feel like we could add something to neat-forms, please feel free to drop your suggestions.

Namaste _/\_






