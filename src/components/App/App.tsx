import { useState } from 'react';
import Header from '../Header/Header';
import Keyboard from '../Keyboard/KeyboardArea';
import TextArea from '../TextArea/TextArea';
import styles from './App.module.scss';

function App() {
  const [input, setInput] = useState('');
  const [switchControl, setSwitchControl] = useState(false);
  return (
    <>
      <Header
        setSwitchControl={setSwitchControl}
        switchControl={switchControl}
      />
      <div className={styles.container}>
        <TextArea
          input={input}
          setInput={setInput}
        />
        <Keyboard 
          onChange={setInput}
          focus={switchControl}
        />
      </div>
    </>
  )
}

export default App