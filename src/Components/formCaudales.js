import React from 'react';
import { reduxForm, Field,reset } from 'redux-form'
import {close} from '../actionCreators'
import { Form, Button ,FormControl, FormGroup} from 'react-bootstrap'
import  './input.css'
import {connect} from 'react-redux'



let FormCaudales = (props) => {
  

 

      const { handleSubmit, pristine, submitting,change,close,clave} = props
    console.log(clave.id)
    


      
    return (
 
        <Form inline onSubmit={handleSubmit} >

     
              
              <Field  className="campo"
                  name="h0"
                  type="number"
                  component="input"
                    placeholder="hora"
                    value={clave.id}
                  
          />
              {' '}
              <Field className="campo"
                  name="h1"
                  type="number"
                  component='input'
                  placeholder="hora"
              />
              {' '}
             
              <Field className="campo"
                  name="h2"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h3"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h4"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h5"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h6"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h7"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h8"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h9"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h10"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h11"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h2"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h13"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h14"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h15"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h16"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h17"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h18"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h19"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h20"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h21"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h22"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}
              <Field className="campo"
                  name="h23"
                  type="number"
                  component='input'
                 placeholder="hora"
                 
                  />
              {' '}

            <br/>
              <Button bsStyle="success" type="submit" disabled={pristine || submitting}   >
                  Registrar
              </Button>
          
          </Form>
    );
  }

  const luegoDeEnviar =(result,dispatch) =>{
    dispatch(reset('simple'))
    dispatch(close())
    }

    function mapStateToProps(state, ownProps) {
        return {
          initialValues: {
            h0:ownProps.clave.h0,
            h1:ownProps.clave.h1,
            h2:ownProps.clave.h2,
            h3:ownProps.clave.h3,
            h4:ownProps.clave.h4,
            h5:ownProps.clave.h5,
            h6:ownProps.clave.h6,
            h7:ownProps.clave.h7,
            h8:ownProps.clave.h8,
            h9:ownProps.clave.h9,
            h10:ownProps.clave.h10,
            h11:ownProps.clave.h11,
            h12:ownProps.clave.h12,
            h13:ownProps.clave.h13,
            h14:ownProps.clave.h14,
            h15:ownProps.clave.h15,
            h16:ownProps.clave.h16,
            h17:ownProps.clave.h17,
            h18:ownProps.clave.h18,
            h19:ownProps.clave.h19,
            h20:ownProps.clave.h20,
            h21:ownProps.clave.h21,
            h22:ownProps.clave.h22,
            h23:ownProps.clave.h23,
           
          }
      }
    }

    
 FormCaudales = reduxForm({
    form:'simple',
    onSubmitSuccess: luegoDeEnviar,   
 })(FormCaudales);

  FormCaudales = connect((state,ownProps)=>({
 }),mapStateToProps)(FormCaudales)

export default FormCaudales
//  className="campo"