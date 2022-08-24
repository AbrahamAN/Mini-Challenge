import React from "react";

const Persons = [
  {
    id: "1",
    nombre: "Pedro",
    edad: "20",
    carrera: "Ingeneria",
    hobbie: "Futbol",
  },
  {
    id: "2",
    nombre: "Rodrigo",
    edad: "22",
    carrera: "Arquitectura",
    hobbie: "Bajo Electrico",
  },
  {
    id: "3",
    nombre: "Romina",
    edad: "21",
    carrera: "Abogacia",
    hobbie: "Acrobacia",
  },
  {
    id: "4",
    nombre: "Ana",
    edad: "23",
    carrera: "Contadora",
    hobbie: "Astronomia",
  },
];

const Table = () => {
  return (
    <table className="  w-2/4  border-4 border-slate-900 my-10 mx-auto px-5 ">
      <thead className="border-b  border-slate-900">
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>hobbie</th>
        </tr>
      </thead>

      {Persons.map((person) => {
        return (
          <tbody key={person.id}>
            <tr>
              <td>{person.nombre}</td>
              <td>{person.edad}</td>
              <td>{person.carrera}</td>
              <td>{person.hobbie}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Table;
