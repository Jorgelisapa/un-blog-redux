import React from 'react';

const App = () => {
  return (
    <div>
      <div>un blog/react y redux - @Jorgelisapa</div>
    <table>
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
        </tr>
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
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default App;