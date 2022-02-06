import './home.css';
import { Campaigns } from '../../Campaigns/Campaigns.jsx';
import { Chart } from '../../../components/Charts/Chart.jsx';
import { userData } from '../../../dummyData.js';

function Home() {


    return (
        <div className='home'>
            <Campaigns />
            <Chart
                data={userData}
                title={'Empleados por Mes'}
                grid dataKey='month'
                activeuser='active_user'
            />
        </div>
    )
}

export { Home };
