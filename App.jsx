import Student from "./Student"; 
function App() { 
  return ( 
    <div> 
      <h1>Student Information</h1> 
      <Student 
        name="Pragati Verma" 
        course="Computer Science" 
        marks="95" /> 
      <Student 
        name="Suryansh Banka" 
        course="Data Science" 
        marks="76"  /> 
      <Student 
        name="Aarohi Jalan" 
        course="Mechanics" 
        marks="82"  /> 
    </div> 
  ); 
} 
export default App; 