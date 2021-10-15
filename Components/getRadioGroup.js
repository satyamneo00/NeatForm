export const getRadioGroup=(radio)=>{
    return (
        <>
        {radio.radioGroupData.values.map((val)=>
            <>
             <input type="radio" value={val} name={radio.name}/> <span className="radiotext">{val}</span><br/>
             </>
        )}
       
        </>
    )
}