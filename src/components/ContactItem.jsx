const ContactItem = ({ data, deleteHandler }) => {
  return (
    <>
      <li
        key={data.id}
        className="w-full flex flex-col justify-between align-center 
        xl:flex-row text-[#304ffe] font-medium mb-[20px] border-2 
        border-[#bbdefb] p-3 rounded-lg shadow-[#304ffe25_0px_7px_29px_0px]">
        <p>
          {data.name} {data.lastName}
        </p>
        <p>
          <span>📩</span> {data.email}
        </p>
        <p>
          <span>📞</span> {data.phone}
        </p>
        <button onClick={() => deleteHandler(data.id)}>🗑</button>
      </li>
    </>
  );
};

export default ContactItem;
