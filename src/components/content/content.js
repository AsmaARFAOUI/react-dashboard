import './content.css'
import Title from "../title/title";
import { faChartBar, faTable } from '@fortawesome/free-solid-svg-icons';
import Cards from '../cards/cards';
import Table from '../table/table';

export default function Content () {
     return(
        <div className="content">
            <Title title="dashboard" icon={faChartBar}/>
            <Cards />
            <Title title="products" icon={faTable}/>
            <Table />
        </div>
     )
}