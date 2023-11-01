import './App.css';
import Table from './components/Table';
import { columnDefinitions, tableData as data } from './data/tableData';

function App() {
    return (
        <div className='App'>
            <Table columns={columnDefinitions} data={data} />
        </div>
    );
}

export default App;
