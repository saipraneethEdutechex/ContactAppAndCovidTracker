import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addContact, deleteContact } from "../redux/contactSlice";

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  const handleAddContact = () => {
    if (newContact.name && newContact.email) {
      dispatch(addContact({ ...newContact, id: Date.now().toString() }));
      setNewContact({ name: "", email: "" });
    }
  };

  return (
    <div className="contacts">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
          className="p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleAddContact}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Contact
        </button>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="flex justify-between items-center p-2 border-b border-gray-300"
          >
            <div>
              <p className="font-bold">{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <div>
              <button className="bg-yellow-500 text-white p-1 rounded mr-2">
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteContact(contact.id))}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
