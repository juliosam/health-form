import { useState } from "react";
import FormInput from "./components/FormInput";

export default function App() {
  const[values, setValues] = useState({
    username: "",
    email:"",
    birthday:"",
    weight: "",
    height: "",
    restHours: "",
    meatMeals: "",
    beerWeek: "",
    dessertWeek: "",
    glucose: "",
    cholesterol: "",
  })

  const inputs = [
    {
      id:1, 
      name:"username",
      type:"text", 
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters",
      label: "Username", 
      pattern: "^[a-zA-Z0-9]{3,16}$", 
      required: true
    },
    {
      id:2, 
      name:"email",
      type:"email", 
      placeholder: "Email",
      errorMessage: "Valid Email needed",
      label: "Email", 
      required: true
    },
    {
      id:3, 
      name:"birthday",
      type:"date", 
      placeholder: "Birthday",
      label: "Birthday", 
      required: true
    },
    {
      id:4, 
      name:"weight",
      type:"text", 
      placeholder: "Weight",
      label: "Weight in kg", 
      errorMessage: "Please enter number between 20 and 600",
      pattern: "^([2-9][0-9]|[1-5][0-9][0-9]|600)$",
      required: true
    },
    {
      id:5, 
      name:"height",
      type:"text", 
      placeholder: "Height",
      label: "Height in centimeters", 
      errorMessage: "Please enter number between 50 and 300",
      pattern: "^([5-9][0-9]|[1-2][0-9][0-9]|270)$",
      required: true
    },
    {
      id:6, 
      name:"restHours",
      type:"text", 
      placeholder: "Rest Hours",
      label: "Your average daily sleep time", 
      errorMessage: "Please enter number between 2 and 16",
      pattern: "^([2-9]|[1][0-5]|16)$",
      required: true
    },
    {
      id:7, 
      name:"meatMeals",
      type:"text", 
      placeholder: "Weekly meat meals",
      label: "Your average meals with meat a week", 
      errorMessage: "Please enter number between 0 and 30",
      pattern: "^([0-9]|[1-2][0-9]|30)$$",
      required: true
    },
    {
      id:8, 
      name:"beerWeek",
      type:"text", 
      placeholder: "Beers per week ",
      label: "Your average beers a week (or equivalent)", 
      errorMessage: "Please enter number between 0 and 100",
      pattern: "^([0-9]|[0-9][0-9]|100)$",
      required: true
    },
    {
      id:9, 
      name:"dessertWeek",
      type:"text", 
      placeholder: "Desserts per week ",
      label: "Your average desserts a week (or equivalent)", 
      errorMessage: "Please enter number between 0 and 30",
      pattern: "^([0-9]|[1-2][0-9]|30)$",
      required: true
    },
    {
      id:10, 
      name:"glucose",
      type:"number", 
      placeholder: "Glucose level",
      label: "Your glucose level (50-200) *Optional", 
    },
    {
      id:11, 
      name:"cholesterol",
      type:"number", 
      placeholder: "Cholesterol level",
      label: "Your cholesterol level (100-500) *Optional", 
    }
  ]
  const handleSubmit = (e)=>{
     e.preventDefault()
  }
  const onChange = (e)=>{
    setValues({...values , [e.target.name]: e.target.value})
 }
 console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Fill this form and we will contact you by email</h2>
        <div className="input-container">
          {inputs.map(input=>(
            <FormInput
            key={input.id}
            {...input}
            value = {values[input.name]}
            onChange={onChange}/>
          ))}
          <p>*Based on this data we'll send to your email a starting plan suit to your profile</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

