import React from 'react';
import { Table,Button,Modal,Glyphicon,ButtonGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import {deleteOnce,close,open, addToTable} from '../actionCreators'
import FormCaudales from './formCaudales'

const TablaCaudales = ({responseData,ver,deleteOnce,showModal,close,open,addToTable,ky}) => {
    console.log(ver)
    console.log("este es el ky" +ky)


    return (
        <div>
        <Table  bordered hover responsive >
            <thead>
                <tr>
                    <th>Opciones</th>
                    <th>Dia</th>
                    <th>00:00</th>
                    <th>01:00</th>
                    <th>02:00</th>
                    <th>03:00</th>
                    <th>04:00</th>
                    <th>05:00</th>
                    <th>06:00</th>
                    <th>07:00</th>
                    <th>08:00</th>
                    <th>09:00</th>
                    <th>10:00</th>
                    <th>11:00</th>
                    <th>12:00</th>
                    <th>13:00</th>
                    <th>14:00</th>
                    <th>15:00</th>
                    <th>16:00</th>
                    <th>17:00</th>
                    <th>18:00</th>
                    <th>19:00</th>
                    <th>20:00</th>
                    <th>21:00</th>
                    <th>22:00</th>
                    <th>23:00</th>
                 

                    
                </tr>
            </thead>
            <tbody>
                {responseData.map((i,key)=>
                
                <tr key={key} >
                    <td  >
                <div >
                        <Button bsStyle="primary" onClick={()=>open(i.id,key)} block><Glyphicon glyph="pencil" /></Button>
                    
                    <Button bsStyle="danger"  onClick={() =>deleteOnce(i.id)} block><Glyphicon glyph="trash" /></Button>
                  </div>
                    </td>
                    <td>{key+1}</td>
                    <td>{i.h0}</td>
                    <td>{i.h1}</td>
                    <td>{i.h2}</td>
                    <td>{i.h3}</td>
                    <td>{i.h4}</td>
                    <td>{i.h5}</td>
                    <td>{i.h6}</td>
                    <td>{i.h7}</td>
                    <td>{i.h8}</td>
                    <td>{i.h9}</td>
                    <td>{i.h10}</td>
                    <td>{i.h11}</td>
                    <td>{i.h12}</td>
                    <td>{i.h13}</td>
                    <td>{i.h14}</td>
                    <td>{i.h15}</td>
                    <td>{i.h16}</td>
                    <td>{i.h17}</td>
                    <td>{i.h18}</td>
                    <td>{i.h19}</td>
                    <td>{i.h20}</td>
                    <td>{i.h21}</td>
                    <td>{i.h22}</td>
                    <td>{i.h23}</td>
                </tr>
                )}
            </tbody>
        </Table>

        <Modal  show={showModal}  onHide={close}>
            <Modal.Header closeButton>
            <Modal.Title>Registro de Caudales</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <FormCaudales onSubmit = {addToTable} clave={responseData[ky]}   />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Cerrar</Button>
          </Modal.Footer>

        </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        responseData : state.datos.data,
        showModal:state.datos.showModal,
        ky:state.datos.key,
        ver:state
       
    }
}

const mapDispathToProps = (dispatch) => {
    return {
      deleteOnce(key){
          dispatch(deleteOnce(key))
      },
      close(){
        dispatch(close())
    },
    open(key,key2){
        dispatch(open(key,key2))
    }, 
    addToTable(values){
        dispatch(addToTable(values))
       
      }
    }
}


export default connect(mapStateToProps,mapDispathToProps)(TablaCaudales);