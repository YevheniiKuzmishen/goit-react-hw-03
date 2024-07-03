import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div>
      <div>
        <IoPerson />
        <p>{name}</p>
      </div>
      <div>
        <FaPhone />
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
