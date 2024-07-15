import styles from "./Card.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 

function Card({ titulo,  capa }) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.card}/>
            <section className={styles.container_card}>
                    <div className={styles.actionItem}>
                        <FaTrashAlt />
                        <span>Eliminar</span>
                    </div>
                    <div className={styles.actionItem}>
                        <FaEdit />
                        <span>Editar</span>
                    </div>
                    
                </section>

        </div>
    );
}
export default Card;
