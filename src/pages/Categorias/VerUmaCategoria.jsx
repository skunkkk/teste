import React from 'react';
import "./VerCategoria.css";
export default function VerUmaCategoria() {
  return (
    <div className='container-verCategoria'>
    <div className='classInput'>
            <label>Categoria: </label>
            <input type="text" />
        </div>
        <div className='classInput'>
            <label>ID seção: </label>
            <input type="text" />
       </div>
       
  
        <button>apagar categoria</button>
</div>
)
}
