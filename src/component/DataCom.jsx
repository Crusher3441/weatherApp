import { useState } from "react"


const DataCom = ({city,region,condition,temp_c,temp_f}) => {
  let [isCelcius,setIscelcius] = useState(true)
  
  const tempFunction = () =>{
    setIscelcius((pre)=>!pre)
  }

  const temp = isCelcius? temp_c:temp_f
  const unit = isCelcius?  "°C" : "°F"
  const cloudimg = condition==="Partly cloudy"? "https://upload.wikimedia.org/wikipedia/commons/7/73/Cloudy_sky_%2826171935906%29.jpg":condition==="Mist"?"https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PzfE18BkPw6luo7YW7c9XQ.jpeg":"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div style={{height:'90%',width:'95%',marginLeft:'5px',padding:'2%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{height:'90%',width:'90%',padding:'2%',backgroundColor:'white',borderRadius:'10px',marginBottom:'18%'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <h1 style={{margin:'0px'}} >{city}</h1>
          <p style={{fontWeight:'300',fontSize:'20px',margin:'0px'}}>{region}</p>
          <p onClick={()=>tempFunction()}>{temp}{unit}</p>
        </div>
        <div>
          <img src={cloudimg} alt="" style={{height:'100px'}} />
          <div>{condition}</div>
          
        </div>
        
      </div>
    </div>
    
  )
}

export default DataCom
