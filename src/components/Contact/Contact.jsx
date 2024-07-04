import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <p className={css.name}>
        <IoPerson className={css.icon} />
        {name}
      </p>
      <p className={css.number}>
        <FaPhone className={css.icon} />
        {number}
      </p>

      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
