// import logo from './logo.svg';
import './App.css';
// import BasicButtons from './ui/BasicButton';
// import CheckboxesGroup from './ui/CheckboxesGroup';
// import { Container } from '@mui/material';
// import IconAvatars from './ui/IconAvatars';
// import ContinuousSlider from './ui/ContinuousSlider';
// import MenuAppBar from './ui/MenuAppBar';
// import Elevation from './ui/Elevation';
import ButtonAppBar from './components/ButtonAppBar';
import BasicTable from './components/BasicTable';
function App() {
  return (
    // <Container>
    //   <MenuAppBar />
    //   <BasicButtons />
    //   <CheckboxesGroup />
    //   <IconAvatars />
    //   <ContinuousSlider />
    //   <Elevation />
    //</Container>
    <div>
      <ButtonAppBar/>
      <br/>
      <BasicTable/>
    </div>
  );
}

export default App;
