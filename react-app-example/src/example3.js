import React, { useState } from 'react';
import './example3.css';

function Ejemplo3() {
  const [contactValues, setContactValues] = useState({});
  const [contactsList, setContactsList] = useState([]);

  const onChange = (e) => {
    setContactValues({
      ...contactValues,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setContactsList((contacts) => [...contacts, contactValues]);
    setContactValues({});
    document.getElementById('contactForm').reset();
  };

  const deleteContact = (index) => {
    const contacts = [...contactsList];
    contacts.splice(index, 1);
    setContactsList(contacts);
  };

  return (
    <div className="container">
      <h1>Registro de Contactos</h1>
      <br />
      <div className="grid">
        <div className="col-4 col-s-12">
          <h3>Ingresar datos de contacto</h3>
          <form id="contactForm" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="firstName">Nombre</label>
              <input
                type="text"
                className="input"
                placeholder="ej. Ciudad"
                name="firstName"
                id="firstName"
                required
                onChange={onChange}
              />
            </div>
            <div className="field">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                className="input"
                placeholder="ej. Ciudad"
                name="lastName"
                id="lastName"
                required
                onChange={onChange}
              />
            </div>
            <div className="field">
              <label htmlFor="phoneNumber">Número de teléfono</label>
              <input
                type="number"
                className="input"
                placeholder="ej. Ciudad"
                name="phoneNumber"
                id="phoneNumber"
                required
                onChange={onChange}
              />
            </div>
            <br />
            <button type="submit" id="addContactButton">
              Agregar Contacto
            </button>
          </form>
        </div>
        <div className="col-8 col-s-12">
          <table id="contactsList">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Contacto</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {contactsList.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>
                    <span
                      className="underline-button"
                      onClick={() => deleteContact(index)}
                    >
                      borrar
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ejemplo3;
