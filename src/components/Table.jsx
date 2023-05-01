import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import './Table.css';

export default function Table() {
  const { data, inputText } = useContext(AppContext);

  return (
    <div className="divmaster">
      <table className="tabela">
        <thead className="head">
          <tr className="tr">
            <th className="th">Name</th>

            <th className="th">species</th>

            <th className="th">gender</th>

            <th className="th">house</th>

            <th className="th">yearOfBirth</th>

            <th className="th">alternate Names</th>

            <th className="th">image</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((e) => (e.name.includes(inputText))).map((e) => (
            <tr
              className="tr"
              key={ e.id }
            >
              <td className="td">{ e.name }</td>
              <td>{e.species}</td>
              <td>{e.gender}</td>
              <td>{e.house}</td>
              <td>{e.yearOfBirth}</td>
              <td>
                {e.alternate_names.map((w, index) => <span key={ index }>{w}</span>)}

              </td>
              <td>{e.image}</td>
            </tr>))}

        </tbody>
      </table>
    </div>
  );
}
