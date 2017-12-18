import React, { Component } from 'react';
import { Panel, Button,Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

import FormCaudales from '../Components/formCaudales'
import TablaCaudales from '../Components/tablaCaudales'
import { addNewRow, deleteAll } from '../actionCreators'



const Caudales = ({ addNewRow, deleteAll }) => {

  return (
    <div>
      <br/>
      
        <Button bsStyle="success" onClick={addNewRow}>Agregar Dia</Button>
        {' '}
        <Button bsStyle="danger" onClick={deleteAll}><Glyphicon glyph="trash" /> Borrar Todo</Button>
       
      <br/><br/>
      <TablaCaudales />
   
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewRow() {
      dispatch(addNewRow())
    },
    deleteAll() {
      dispatch(deleteAll())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Caudales);
