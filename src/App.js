import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { IdDelPredio: 1, NombreDelPredio: "Emerald Trade Center", AvaluoDelPredio:"$USD 15 millions" , UbicacionDelPredio:"Colombia→Cundinamarca→Bogota", PropietarioDelPredio:"ColEmerald Ltd.",PersonaDelPredio:"Juridica",NitoCcDelPredio:"8982524-2",RazonSocial:"Ltd",DatosDeContacto:"Tel: +852 2366 4855 info@colemerald.com www.colemerald.com",CantidadDeTerrenos:"1",DetallesDeTerrenos:"Edificio de mas de 20 pisos y 5 de sotano",CantidadDeConstrucciones:"1",DetallesDeConstrucciones:"edificio de areas amplias para oficinas y almacenamientos de recursos valioso"},
  { IdDelPredio: 2, NombreDelPredio: "Hotel Clinton Bocagrande", AvaluoDelPredio:"$USD 18 millions", UbicacionDelPredio:"Colombia→Bolivar→Cartagena", PropietarioDelPredio:"ColEmerald Ltd.",PersonaDelPredio:"Juridica",NitoCcDelPredio:"748522-3",RazonSocial:"Ltd",DatosDeContacto:"Teléfono: 57-5-6948000 Correo electrónico: ctghi_rm@hilton.com",CantidadDeTerrenos:"1",DetallesDeTerrenos:"Complejo hotelero con playa privada y edificio en la costa",CantidadDeConstrucciones:"1",DetallesDeConstrucciones:"hotel con agradables vistas y todas las comodidades "},
  { IdDelPredio: 3, NombreDelPredio: "Universidad EAFIT Medellin", AvaluoDelPredio:"$USD 12 millions", UbicacionDelPredio:"Colombia→Antioquia→Medellin", PropietarioDelPredio:"Univeridad EAFIT",PersonaDelPredio:"Juridica",NitoCcDelPredio:"890901389-5",RazonSocial:"Sin Animo De Lucro",DatosDeContacto:"Teléfono: 2619500 Dirección: Carrera 49, Cl. 7 Sur #50",CantidadDeTerrenos:"1",DetallesDeTerrenos:"Predio de amplia extension de area ,cercano a vias principales",CantidadDeConstrucciones:"4",DetallesDeConstrucciones:"serie de edificaciones destinadas a aulas de clase" },
  { IdDelPredio: 4, NombreDelPredio: "Clinica De Las Americas", AvaluoDelPredio:"$USD 10 millions",UbicacionDelPredio:"Colombia→Antioquia→Medellin", PropietarioDelPredio:"Clinica De Las Americas",PersonaDelPredio:"Juridica",NitoCcDelPredio:"4757579-5",RazonSocial:"Sin Animo De Lucro",DatosDeContacto:"Dirección: Diagonal 75B # 2 A - 80. Tercer Piso – Torre 3 Telefono: (604) 342-1010",CantidadDeTerrenos:"1",DetallesDeTerrenos:"Predio ubicado en zona centrica y con amplia area de extension",CantidadDeConstrucciones:"3",DetallesDeConstrucciones:"diversas edificaciones destinadas al servicio de la salud"},
  { IdDelPredio: 5, NombreDelPredio: "Sede Principal Marcopolo", AvaluoDelPredio:"$USD 8 millions",UbicacionDelPredio:"Colombia→Cundinamarca→Cota", PropietarioDelPredio:"Marcopolo S.A",PersonaDelPredio:"Juridica",NitoCcDelPredio:"221322339-4",RazonSocial:"S.A",DatosDeContacto:"teléfono: (571) 896 4200 / fax: (57 1) 896 4200 Ext. 299 pagina:www.superpolo.com.co",CantidadDeTerrenos:"1",DetallesDeTerrenos:"Terreno ubicado en zona industrial de facil acceso",CantidadDeConstrucciones:"3",DetallesDeConstrucciones:"parqueaderos ,taller y oficinas de una empresa de autobuses"},
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      IdDelPredio: "",
      NombreDelPredio: "",
      AvaluoDelPredio:"",
      UbicacionDelPredio:"",
      PropietarioDelPredio:"",
      PersonaDelPredio:"",
      NitoCcDelPredio:"",
      RazonSocial:"",
      DatosDeContacto:"",
      CantidadDeTerrenos:"",
      DetallesDeTerrenos:"",
      CantidadDeConstrucciones:"",
      DetallesDeConstrucciones:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.IdDelPredio == registro.IdDelPredio) {
        arreglo[contador].NombreDelPredio = dato.NombreDelPredio;
        arreglo[contador].AvaluoDelPredio = dato.AvaluoDelPredio;
        arreglo[contador].UbicacionDelPredio = dato.UbicacionDelPredio;
        arreglo[contador].PropietarioDelPredio = dato.PropietarioDelPredio;
        arreglo[contador].PersonaDelPredio = dato.PersonaDelPredio;
        arreglo[contador].NitoCcDelPredio = dato.NitoCcDelPredio;
        arreglo[contador].RazonSocial = dato.RazonSocial;
        arreglo[contador].DatosDeContacto = dato.DatosDeContacto;
        arreglo[contador].CantidadDeTerrenos = dato.CantidadDeTerrenos;
        arreglo[contador].DetallesDeTerrenos = dato.DetallesDeTerrenos;
        arreglo[contador].CantidadDeConstrucciones = dato.CantidadDeConstrucciones;
        arreglo[contador].DetallesDeConstrucciones = dato.DetallesDeConstrucciones;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.IdDelSegmento);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.IdDelPredio == registro.IdDelPredio) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.IdDelPredio=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
    this.setState({
      form: {
        
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Informacion De Predios</Button>
          <br /><br />
          <Table>
            <thead>
              <tr>
                <th>ID Del Predio</th>
                <th>Nombre Del Predio</th>
                <th>Avaluo Del Predio</th>
                <th>Ubicacion Del Predio</th>
                <th>Propietario Del Predio</th>
                <th>Persona Juridica o Natural</th>
                <th>Numero De Documento</th>
                <th>Razon Social Del Propietario</th>
                <th>Cantidad De Terrenos</th>
                <th>Detalles De Terrenos</th>
                <th>Cantidad De Construcciones </th>
                <th>Detalles De Construcciones </th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.IdDelPredio}>
                  <td>{dato.IdDelPredio}</td>
                  <td>{dato.NombreDelPredio}</td>
                  <td>{dato.AvaluoDelPredio}</td>
                  <td>{dato.UbicacionDelPredio}</td>
                  <td>{dato.PropietarioDelPredio}</td>
                  <td>{dato.PersonaDelPredio}</td>
                  <td>{dato.NitoCcDelPredio}</td>
                  <td>{dato.RazonSocial}</td>
                  <td>{dato.DatosDeContacto}</td>
                  <td>{dato.CantidadDeTerrenos}</td>
                  <td>{dato.DetallesDeTerrenos}</td>
                  <td>{dato.CantidadDeConstrucciones}</td>
                  <td>{dato.DetallesDeConstrucciones}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Informacion De Predios</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              Id Del Predio:
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.IdDelPredio}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Nombre Del Predio: 
              </label>
              <input
                placeholder="Ingrese Nombre Del Predio"
                className="form-control"
                name="NombreDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NombreDelPredio}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Avaluo Del Predio: 
              </label>
              <input
                placeholder="($) Ingrese Valor Del Predio"
                className="form-control"
                name="AvaluoDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.AvaluoDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Ubicacion Del Predio: 
              </label>
              <input
                placeholder="Departamento→Municipio"
                className="form-control"
                name="UbicacionDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.UbicacionDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Propietario Del Predio: 
              </label>
              <input
                placeholder="Nombre del Propietario"
                className="form-control"
                name="PropietarioDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.PropietarioDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label 
              for="Persona Natural o Juridica:"
              className="form-label">Persona Natural o Juridica: 
              </label>
              <select onChange={this.handleChange}
              value={this.state.value}
              className="form-control"
              type="text"
              class="form-select"
              id="Persona Natural o Juridica" required >
                <option value="">Natural</option>
                <option>Juridica</option>
              </select>
              
            </FormGroup>
            <FormGroup>
              <label>
              Numero De Documento: 
              </label>
              <input
                placeholder="N.I.T o C.C"
                className="form-control"
                name="NitoCcDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NitoCcDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Razon Social:
              </label>
              <input
                placeholder="(opcional) Indique Razon Social "
                className="form-control"
                name="RazonSocial"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.RazonSocial}
              />
            </FormGroup>
            <FormGroup>
              <label>
             Datos De Contacto: 
              </label>
              <input
                placeholder="Telefono→Correo Electronico→Direccion"
                className="form-control"
                name="DatosDeContacto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.DatosDeContacto}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Cantidad De Terrenos:
              </label>
              <input
                placeholder="Cantidad De Terrenos Dentro Del Predio"
                className="form-control"
                name="CantidadDeTerrenos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CantidadDeTerrenos}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Detalles De Terrenos:
              </label>
              <input
                placeholder="Area→Valor Comercial($)→etc"
                className="form-control"
                name="DetallesDeTerrenos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.DetallesDeTerrenos}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Cantidad De Construcciones: 
              </label>
              <input
                placeholder="Cantidad De Construcciones Dentro Del Predio"
                className="form-control"
                name="CantidadDeConstrucciones"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CantidadDeConstrucciones}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Detalles De Construcciones: 
              </label>
              <input
                placeholder="Area→Valor Comercial($)→etc"
                className="form-control"
                name="DetallesDeConstrucciones"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.DetallesDeConstrucciones}
              />
            </FormGroup>
            
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Informacion De Predios</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
              Id Del Predio:
              </label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.IdDelPredio}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Nombre Del Predio: 
              </label>
              <input
                placeholder="Ingrese Nombre Del Predio"
                className="form-control"
                name="NombreDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NombreDelPredio}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Avaluo Del Predio: 
              </label>
              <input
                placeholder="($) Ingrese Valor Del Predio"
                className="form-control"
                name="AvaluoDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.AvaluoDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Ubicacion Del Predio: 
              </label>
              <input
                placeholder="Departamento→Municipio"
                className="form-control"
                name="UbicacionDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.UbicacionDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Propietario Del Predio: 
              </label>
              <input
                placeholder="Nombre del Propietario"
                className="form-control"
                name="PropietarioDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.PropietarioDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label 
              for="Persona Natural o Juridica:"
              className="form-label">Persona Natural o Juridica: 
              </label>
              <select 
              className="form-control"
              type="text"
              class="form-select" >
              onchange={this.handleChange}
              value={this.state.form.PersonaDelPredio}
              
                <option value="">Natural</option>
                <option>Juridica</option>
              </select>
              
            </FormGroup>
            <FormGroup>
              <label>
              Numero De Documento: 
              </label>
              <input
                placeholder="N.I.T o C.C"
                className="form-control"
                name="NitoCcDelPredio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NitoCcDelPredio}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Razon Social:
              </label>
              <input
                placeholder="(opcional) Indique Razon Social "
                className="form-control"
                name="RazonSocial"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.RazonSocial}
              />
            </FormGroup>
            <FormGroup>
              <label>
             Datos De Contacto: 
              </label>
              <input
                placeholder="Telefono→Correo Electronico→Direccion"
                className="form-control"
                name="DatosDeContacto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.DatosDeContacto}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Cantidad De Terrenos:
              </label>
              <input
                placeholder="Cantidad De Terrenos Dentro Del Predio"
                className="form-control"
                name="CantidadDeTerrenos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CantidadDeTerrenos}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Detalles De Terrenos:
              </label>
              <input
                placeholder="Area→Valor Comercial($)→etc"
                className="form-control"
                name="DetallesDeTerrenos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.DetallesDeTerrenos}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Cantidad De Construcciones: 
              </label>
              <input
                placeholder="Cantidad De Construcciones Dentro Del Predio"
                className="form-control"
                name="CantidadDeConstrucciones"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CantidadDeConstrucciones}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Detalles De Construcciones: 
              </label>
              <input
                placeholder="Area→Valor Comercial($)→etc"
                className="form-control"
                name="DetallesDeConstrucciones"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.DetallesDeConstrucciones}
              />
            </FormGroup>
            
          </ModalBody>

          

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
