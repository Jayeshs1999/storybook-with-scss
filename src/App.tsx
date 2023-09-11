import './App.css';
import { Button } from './stories/button/Button';
import Textfield from './stories/textField/Textfield';

function App() {
  return (
    <div className="App" style={{display:'flex', flexDirection: 'column', gap: '16px'}}>
      <div style={{fontSize:'30px'}}>
        Here are 2 basic component that i have created in storybook
      </div>
      <div>
        To view storybook run <strong>"npm run storybook"</strong>
      </div>
      <Textfield label='Name' placeholder='Enter your name' handleChange={(e)=>{console.log(e)}} />
      <Button label='Click me' backgroundColor='red' size='large' onClick={()=>{console.log('button clicked')}}/>
    </div>
  );
}

export default App;
