import "./title.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Title(props) {

    return(
        <div className="title-info">
            <p>{props.title}</p>
            <FontAwesomeIcon icon={props.icon} />
        </div>
    )
}