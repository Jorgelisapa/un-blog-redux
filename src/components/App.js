import React, { Component } from 'react';

class App extends Component {

  ponerFilas = () => [
    <tr>
    <td>
      Jorge Salamanca
      </td>
    <td>
      jorgelisapa@gmail.com
      </td>
    <td>
      jorgesalamanca.com
    </td>
  </tr>,
  <tr>
    <td>
      emtibi
      </td>
    <td>
      hola@emtibi.com
      </td>
    <td>
      emtibi.com
    </td>
  </tr>,
  ];

  render() {
    return (
      <div className='margen' >
        <table className='tabla' >
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );
  }
  }

export default App;