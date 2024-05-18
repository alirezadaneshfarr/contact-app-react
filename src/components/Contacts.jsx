import { useState } from "react";
import ContactsList from "./ContactsList";
import inputsData from "../constants/inputs";
import { v4 } from "uuid";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.phone ||
      !contact.email
    ) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className="container mx-auto mt-14 ">
      <div
        className="flex flex-wrap w-[45%] p-[30px] justify-center items-center
       rounded-lg mx-auto shadow-[#304ffe25_0px_7px_29px_0px]">
        {inputsData.map((input, index) => (
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
            key={index}
            className="border-solid border-2 border-sky-500 rounded-md 
            mx-auto mr-14 mb-14 p-2 shadow-[#304ffe25_0px_7px_29px_0px] xl:w-full"
          />
        ))}

        <button
          onClick={addHandler}
          className="mx-auto bg-[#304ffe] w-[200px] py-3 rounded-lg text-[#bbdefb] font-medium">
          Add Contact
        </button>
      </div>
      <div
        className={
          alert
            ? "w-[70%] mx-auto text-center bg-red-300 py-1 text-white rounded-lg font-medium"
            : null
        }>
        {alert && <p>{alert}</p>}
      </div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Contacts;
