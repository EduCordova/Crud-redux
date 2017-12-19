import React, { Component } from 'react';
import { Panel, Button,Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

import FormCaudales from '../Components/formCaudales'
import TablaCaudales from '../Components/tablaCaudales'
import { addNewRow, deleteAll } from '../actionCreators'
import Workbook from 'react-excel-workbook'






const Caudales = ({ addNewRow, deleteAll,dataToExcel }) => {

  return (
    <div>
      <br/>
      
        <Button bsStyle="success" onClick={addNewRow}>Agregar Dia</Button>
        {' '}
        <Button bsStyle="danger" onClick={deleteAll}><Glyphicon glyph="trash" /> Borrar Todo</Button>
       
      <br/><br/>
      <TablaCaudales />
      <br/>
      
      <Workbook filename="archivo.xlsx" element={<Button >Descargar Excel</Button>}>
      <Workbook.Sheet data={dataToExcel} name="Caudales">
        <Workbook.Column label="Dias/Horas" value="id"/>
        <Workbook.Column label="00:00" value="h0"/>
        <Workbook.Column label="01:00" value="h1"/>
        <Workbook.Column label="02:00" value="h2"/>
        <Workbook.Column label="03:00" value="h3"/>
        <Workbook.Column label="04:00" value="h4"/>
        <Workbook.Column label="05:00" value="h5"/>
        <Workbook.Column label="06:00" value="h6"/>
        <Workbook.Column label="07:00" value="h7"/>
        <Workbook.Column label="08:00" value="h8"/>
        <Workbook.Column label="09:00" value="h9"/>
        <Workbook.Column label="10:00" value="h10"/>
        <Workbook.Column label="11:00" value="h11"/>
        <Workbook.Column label="12:00" value="h12"/>
        <Workbook.Column label="13:00" value="h13"/>
        <Workbook.Column label="14:00" value="h14"/>
        <Workbook.Column label="15:00" value="h15"/>
        <Workbook.Column label="16:00" value="h16"/>
        <Workbook.Column label="17:00" value="h17"/>
        <Workbook.Column label="18:00" value="h18"/>
        <Workbook.Column label="19:00" value="h19"/>
        <Workbook.Column label="20:00" value="h20"/>
        <Workbook.Column label="21:00" value="h21"/>
        <Workbook.Column label="22:00" value="h22"/>
        <Workbook.Column label="23:00" value="h23"/>
      </Workbook.Sheet>
    </Workbook>
      

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataToExcel:state.datos.data
  }
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
