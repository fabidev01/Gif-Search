import { useState } from "react";

export const Input = ({ onNewCategory }) => {

  const [categoria, setCategoria] = useState('')

  const onInputChange = ({ target }) => {
    setCategoria(target.value);
  }

  const onInputSubmit = (e) => {
    e.preventDefault();
    if( categoria.trim() === '' ) return;
    onNewCategory( categoria.trim() );
    setCategoria('');
  }

  return (
    <form onSubmit={ onInputSubmit }>
      <div className="form-control">
        <input 
          className="animate__animated animate__slideInLeft"
          required
          type="text" 
          onChange={ onInputChange }
          value = { categoria }
        />
        <label>
          <span style={{transitionDelay:"0ms"}}>B</span>
          <span style={{transitionDelay:"50ms"}}>U</span>
          <span style={{transitionDelay:"100ms"}}>S</span>
          <span style={{transitionDelay:"150ms"}}>C</span>
          <span style={{transitionDelay:"200ms"}}>A</span>
          <span style={{transitionDelay:"250ms"}}>R</span>
        </label>
      </div>
    </form>
  )
}
