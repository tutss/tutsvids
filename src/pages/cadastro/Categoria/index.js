import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues); 

  function setValue(key, val) {
    setValues({
      ...values,
      [key]: val,
    })
  }

  function handleChange(eventInfo) {
    // const { getAttribute, value } = eventInfo.target;
    setValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  }

  return (
    <PageDefault> 
        <h1>Cadastro de categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(initialValues)
        }}>
        
        <FormField
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          name='descricao'
          label='Descrição'
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea 
              type='text'
              name='descricao'
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>   */}

        <FormField
          type='color'
          name='cor'
          label='Cor'
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type='color'
              name='cor'
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div> */}
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {
          categorias.map(
            (categoria, index) => {
            return (
              <li key={`${categoria}${index}`}>{categoria.nome}</li>
            )}
          )
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;