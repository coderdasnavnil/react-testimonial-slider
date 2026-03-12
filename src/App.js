import {useState} from 'react';
import people from './Data';
import Usercard from './Usercard';

function App() {

  const [index, setIndex] = useState(0);

  function handleNextUserBtn(){
    if(index === people.length-1){
      setIndex(0);
      return;
    }
    setIndex(prev=>prev+1);
    console.log(index);
  }
  function handlePrevUserBtn(){
    if(index === 0){
      setIndex(people.length-1);
      return;
    }
    setIndex(prev=>prev-1);
    console.log(index-1);
  }
  
  return (
    <>
      <h2 className="app-heading">Reviews</h2>
      <Usercard key={people[index].id}
                    image={people[index].image}
                    name={people[index].name}
                    title={people[index].title}
                    quote={people[index].quote}
                    handleNextUserBtn={handleNextUserBtn}
                    handlePrevUserBtn={handlePrevUserBtn}/>
    </>
  );
}

export default App;
