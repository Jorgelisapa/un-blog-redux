import React from 'react';

const App = () => {

  const ponerFilas = () => [
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
          { ponerFilas() }
        </tbody>
      </table>
    </div>
  );
}

export default App;