import './App.css';
import CustomTable from './CustomTable.tsx';

function labelTag (value) {
    return (
      <h1>
        {value}
      </h1>
    )
} 

function App() {
  const inputData = [
    [labelTag('firdtName'), labelTag('lastName'), labelTag('year of birth')],
    ['Anshuman','Solanki', 1998],
    ['Somesh', 'Solanki', 2002]
  ]
  const columnConfig = {
    0 : {
      width: '200px',
    },    
    1 : { 
      width : '200px',
    },
    2 : {
      width: '200px',
    }
  }

  const rowConfig = {
    0: {
      borderBottom: '2px solid black',
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
