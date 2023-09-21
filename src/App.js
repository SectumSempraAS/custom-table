import './App.css';
import CustomTable from './CustomTable.tsx';

function App() {
  const inputData = [
    ['Name', 'Birth', 'Place'],
    ['Anshuman','Solanki', 1998],
    ['Somesh', 'Solanki', 2002]
  ]
  const columnConfig = {
      0 : {
        width: '200px',
        textColor : 'white',
        backgroundColor: 'black',
      },    
      1 : { 
        width : '100px',
      },
      2 : {
        width: '100px',
        textColor : 'blue',
      }
    }

    const rowConfig = {
      0: {
        borderBottom: '2px solid white',
        fontWeight: '700'
      },
      1 : {
        borderBottom: '1px solid white'
      }
    }

  return (
    <div className="App">
      <div>
        <CustomTable data={inputData} columnConfig={columnConfig} rowConfig={rowConfig}/>
      </div>
    </div>
  );
}

export default App;
