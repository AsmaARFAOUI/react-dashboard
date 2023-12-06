import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props) {

    return(
        <div className="card">
          <FontAwesomeIcon icon={props.icon} className="card-icon"/>
          <div>
            <p>{props.text}</p>
            <span>{props.number}</span>
          </div>
        </div>
    )
}