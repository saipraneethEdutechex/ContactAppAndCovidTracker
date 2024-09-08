import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  addContact,
  updateContact,
  deleteContact,
} from "../redux/contactsSlice";

const Contacts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [form, setForm] = useState({ id: "", name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateContact(form));
    } else {
      dispatch(addContact({ ...form, id: Date.now().toString() }));
    }
    setForm({ id: "", name: "", email: "", phone: "" });
  };

  const handleEdit = (contact: any) => {
    setForm(contact);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Contacts</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-medium mb-4 text-gray-700">
          {form.id ? "Update Contact" : "Add New Contact"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            {form.id ? "Update Contact" : "Add Contact"}
          </button>
        </form>
      </div>
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {contact.name}
              </h3>
              <p className="text-gray-600">{contact.email}</p>
              <p className="text-gray-600">{contact.phone}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(contact)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(contact.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
