import React from 'react';
import './Table.css';

export default function Table() {
  // useEffect(() => {
  //   const requestApi = async () => {
  //     const response = await fetch('https://hp-api.onrender.com/api/characters');
  //     const result = await response.json();
  //   };
  //   requestApi();
  // }, []);
  return (
    <div className="divmaster">
      <table className="tabela">
        <thead className="head">
          <tr className="tr">
            <th className="th"> projeto</th>

          </tr>
        </thead>
        <tbody>

          <tr
            className="tr"

          >
            <td className="td">iniciando o projeto</td>

          </tr>

        </tbody>
      </table>
    </div>
  );
}
