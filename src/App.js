import './App.css';
import Greeting from './components/Greeting.jsx';
import StudentInfo from './components/StudentInfo.jsx';

const student1 = {
  firstName: "Joe",
  lastName: "Graffeo",
  email: "fake@email.com",
  age: 25
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is props!</h1>
        <Greeting name="Joe" lastName="Graffeo" emoji="🥶"/>
        <StudentInfo student={student1}/>
        <Greeting name="Idan" lastName="Fisher" emoji=""/>
        <StudentInfo student={{firstName: "Idan", lastName: "Fisher", email: "fake@email.com", age: 18}}/>
      </header>
    </div>
  );
}

export default App;
