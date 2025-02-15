import './Container.css'
import MainContainer from "../MainContainer/MainContainer"
import TopContainer from '../TopComponent/TopContainer'
function Container() {
  return (
    <div className='container'>
      <TopContainer/>
      
      <MainContainer/> 
    </div>
  )
}

export default Container