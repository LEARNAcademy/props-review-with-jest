import React from 'react';

class InputForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        movie: '',
      }
    }
  }
  
  handleChange = (e)=>{
    const{form} = this.state 
    debugger
    form[e.target.name] = e.target.value
    this.setState({ form })
  }
  
  handleLocalSubmit = ()=>{
    const{ handleSubmit } = this.props
    const{ form } = this.state
    handleSubmit(form)
  }
  render(){
    return (
      <div className="App">
        <h3>Enter Values</h3>
        <input
          id="name-input"
          name="name"
          value={ this.state.form.name }
          onChange={ this.handleChange }
        />
        <input
          id="movie-input"
          name="movie"
          value={ this.state.form.movie }
          onChange={ this.handleChange }
        />
        
        <button 
          id='submit-button'
          onClick={ this.handleLocalSubmit }
        >
          Submit
        </button>
      </div>
    );
  }
}

export default InputForm;
