import Search from './Search'
import DataCom from './DataCom'
import Api from './WeatherApi'

const UI = () => {
  return (
    <div style={{height:'100vh',width:'100vw',backgroundColor:'#62a9d9',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div  style={{height:'80vh',width:'30vw',backgroundColor:'#1a65bbff',borderRadius:'5%'}}>
          <Search onChange={(e)=>e.target.value} />
          <Api/>
        </div>      
    </div>
  )
}

export default UI
