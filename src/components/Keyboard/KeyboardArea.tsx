import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useEffect } from 'react';
import Keyboard from 'simple-keyboard';
import layout from 'simple-keyboard-layouts/build/layouts/russian'
import 'simple-keyboard/build/css/index.css';

type Props = {
  onChange: (input: string) => void;
  focus: boolean
}

const KeyboardArea = ({ onChange, focus }: Props) => {

  useEffect(() => {
    let keyboard: any = new Keyboard({
      physicalKeyboardHighlight:true,
      ...layout
    })
  }, []);
  return (
    <div 
      style={focus?{
        display:'none',
      }:{}}
      className={'simple-keyboard'}
    >
    </div>
  )
}

export default KeyboardArea