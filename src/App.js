  import React, { Component } from 'react';
  import ListadeNotas from './components/ListadeNotas';
  import FormCadastro from './components/FormCadastro';
class App extends Component{
  render(){
  return (
    <section>
      <FormCadastro/>
      <ListadeNotas/>
    </section>
  );
  }
}

export default App;
