import ContactItem from "./ContactItem";

const ContactsList = (props) => {
  const { contacts, deleteHandler } = props;
  return (
    <div className="container">
      <h3 className="text-[#304ffe] mb-6 font-bold text-2xl">Contacts List</h3>
      {contacts.length ? (
        <ul
          className="flex flex-col items-center bg-slate-100 py-3 px-4
         rounded-lg shadow-[#304ffe25_0px_7px_29px_0px]">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <h3
          className="bg-slate-100 shadow-[#304ffe25_0px_7px_29px_0px] py-3 px-4 rounded-lg 
        mx-auto text-center font-medium text-[#304ffe]">
          No Contacts!
        </h3>
      )}
    </div>
  );
};

export default ContactsList;
