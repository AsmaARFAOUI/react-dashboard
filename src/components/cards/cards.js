import { faUser, faPen, faTable, faDollar } from "@fortawesome/free-solid-svg-icons";
import Card from "../card/card";
import "./cards.css";

export default function Cards() {

    return(
        <div className="cards">
           <Card icon={faUser} text="users" number="100"/>
           <Card icon={faPen} text="posts" number="765"/>
           <Card icon={faTable} text="products" number="34"/>
           <Card icon={faDollar} text="revenue" number="5126"/>
        </div>
    )
}