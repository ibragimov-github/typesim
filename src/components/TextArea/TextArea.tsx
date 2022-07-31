import styles from './TextArea.module.scss';
import textData from '../../textData';
import { useEffect, useState } from 'react';
import { message } from 'antd';
type Props = {
  input:string,
  setInput:Function
}

const TextArea = ({input, setInput}: Props) => {
  const [style, setStyle] = useState({});
  const currentLanguage: string = 'russian'
  let [randomText, setRandomText] = useState(textData[currentLanguage as keyof typeof textData]
  [Math.floor(0 + Math.random() * (textData[currentLanguage as keyof typeof textData].length))])
  const randomTextGeneration = () => {
    setInput('')
    setRandomText(textData[currentLanguage as keyof typeof textData]
    [Math.floor(0 + Math.random() * (textData[currentLanguage as keyof typeof textData].length))])
  }
  const inputControl = (e: any) => {
    const currentText = input + e.target.value[e.target.value.length - 1];
    if (e.target.value[e.target.value.length - 1] === randomText[input.length] || e.target.value === '') {
      setInput(e.target.value)
    }
    else {
      setStyle({
        color: 'red'
      })
      setTimeout(()=> {
        setStyle({})
      }, 200)
    }
    if (currentText === randomText) {
      randomTextGeneration()
      message.success('Good!')
    }
  }
  useEffect(() => {
    randomTextGeneration()
  }, [currentLanguage])

  return (
    <div className={styles.container}>
      <textarea
        value={input}
        className={styles.input}
        rows={6}
        onChange={inputControl}
        style={style}
      />
      <p>{randomText}</p>
    </div>
  )
}

export default TextArea
