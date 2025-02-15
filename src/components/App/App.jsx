import './App.css';
import { Menu } from "../DashboardComponent/MenuComponent/Menu";
import Container from '../DashboardComponent/ContainerComponent/Container.jsX';
// import {ViewProvider} from "../../context/ViewContext/ViewProvider";
function App() {
  return (
    
    <div className="App">
      {/* <ViewProvider> */}
        <Menu></Menu>

        <Container></Container>
        {/* </ViewProvider> */}
    </div>
    
  );
}

export default App;
