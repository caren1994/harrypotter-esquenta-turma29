import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

export default function Table() {
  const { data } = useContext(AppContext);

  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Name</th>

          <th>species</th>

          <th>gender</th>

          <th>house</th>

          <th>yearOfBirth</th>

          <th>alternate Names</th>

          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr
            key={ e.id }
          >
            <td>{ e.name }</td>
            <td>{e.species}</td>
            <td>{e.gender}</td>
            <td>{e.house}</td>
            <td>{e.yearOfBirth}</td>
            <td>
              {e.alternate_names?.map((w, index) => <span key={ index }>{w}</span>)}

            </td>
            <td>{e.image}</td>
          </tr>))}

      </tbody>
    </table>
  );
}
