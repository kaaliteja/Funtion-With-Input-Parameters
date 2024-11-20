import "./App.css";

function App() {
  let prabhasTenthMarks = () => {
    let engMarks = 71;
    let telMarks = 72;
    let hindiMarks = 73;
    let mathsMarks = 74;
    let sciMarks = 75;
    let socMarks = 76;

    let passMarks = 35;

    if (
      engMarks >= passMarks &&
      telMarks >= passMarks &&
      hindiMarks >= passMarks &&
      mathsMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks
    ) {
      console.log("prabhas passed in tenth");
    } else {
      console.log("Prabhas failed in tenth");
    }
  };

  let maheshTenthMarks = () => {
    let engMarks = 81;
    let telMarks = 82;
    let hindiMarks = 83;
    let mathsMarks = 84;
    let sciMarks = 10;
    let socMarks = 86;

    let passMarks = 35;

    if (
      engMarks >= passMarks &&
      telMarks >= passMarks &&
      hindiMarks >= passMarks &&
      mathsMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks
    ) {
      console.log("Mahesh passed in Tenth");
    } else {
      console.log("Mahesh failed in Tenth");
    }
  };

  prabhasTenthMarks();

  maheshTenthMarks();

  let calculateTenthResult = (
    engMarks,
    telMarks,
    hindiMarks,
    mathsMarks,
    sciMarks,
    socMarks,
    studentName,
  ) => {
    let passMarks = 35;
    if(engMarks>=passMarks &&
      telMarks>=passMarks &&
      hindiMarks>=passMarks&&
      mathsMarks>=passMarks&&
      sciMarks>=passMarks&&
      socMarks>=passMarks
    ){
      console.log(`${studentName} passed in tenth`)
    }else{
      console.log(`${studentName} failed in tenth`)
    }
  };

  calculateTenthResult(90, 80, 70, 40, 50, 60,"Allu Arjun");

  calculateTenthResult(90, 80, 70, 40, 50, 60,"NTR");

  calculateTenthResult(90, 80, 70, 40, 50, 60,"Ram Charan");
  return (
    <div className="App">
      <h1>Funtions with Parameters</h1>
    </div>
  );
}

export default App;
