import React, { useEffect, useRef, useState }  from 'react';
import './MelonForm.css'

const MelonForm = ({onSearch}) => {    
    const textRef = useRef(null)
    const [text, setText] = useState('')

    const inputChange = (e) => {
        const {value} = e.target 
        setText(value)
    }

    useEffect( () => {
        onSearch(text)
    },[text])

    const onSubmit = (e) => {
        e.preventDefault() 
        onSearch(text)
        setText('')
        textRef.current.focus()
    }
    return (
        <div className="MelonForm">
              <form onSubmit={onSubmit}>
                  <input type="text" placeholder="음악명을 입력하세요" 
                  ref={textRef} onChange={inputChange} />
                  <button type="submit">검색</button>
              </form> 
        </div>
    );
};

export default MelonForm;