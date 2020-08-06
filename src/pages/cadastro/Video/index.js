import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({

  });

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        history.push('/');
      }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />
      </form>

      <Button type="submit">
        Cadastrar
      </Button>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
