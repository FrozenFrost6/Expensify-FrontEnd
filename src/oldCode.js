// function App() {

//   const userData = {
//     name: "FrozenFrost",
//     age: 22,
//     location: 'here',
//     hobbies: ["Volleyball", "Games"]
//   }



//   const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     console.log(option)

//     if (option) {
//       userData.hobbies.push(option)
//       e.target.elements.option.value = '';
//       console.log(userData.hobbies)
//     }
//   }


//   function onRemoveAll() {
//     userData.hobbies = [];
//     console.log(userData.hobbies)
//   }


//   function chooseActivity() {
//     const randomNum = Math.floor(Math.random() * userData.hobbies.length)
//     alert(userData.hobbies[randomNum])
//   }

//   const template1 = (
//     <div className='App'>  
//       <h1>{ userData.name }</h1>

//       { userData.age >= 18 ?  <p> Age: { userData.age }</p> : null}

//       {getLocation(userData.location)}

//       <button onClick={onRemoveAll}>Remove all hobbies</button>
      
//       <form onSubmit={onFormSubmit}>
//         <input type='text' name="option"/>
//         <button>Add option</button>
//       </form>

//       <ol>
//         {
//           userData.hobbies.map((hobby) => {
//             return <li key={hobby}>{hobby}</li>
//           })
//         }
//       </ol>

//       <button disabled={userData.hobbies.length == 0} onClick={chooseActivity}>Choose Activity</button>
      


//     </div>
//   );

 
//   return template1;
// }

// function getLocation(location) {
//   if (location) {
//     return <p> Location: {location} </p>
//   } 
// }


 // let count = 0

  // function addOne() {
  //   count = count + 1; 
  //   console.log("Increment, Count = " + count);
    
  // }

  // function subOne() {
  //   count = count - 1; 
  //   console.log("Deccrement, Count = " + count);
  // }

  // function reset() {
  //   count = 0; 
  //   console.log("Reset, Count = " + count);
  // }


  // const template2 = (
  //   <div>
  //     <h1>Count: { count }</h1>
  //     <button onClick={ addOne }>Increment</button>
  //     <button onClick={ subOne }>Decrement</button>
  //     <button onClick={ reset }>Reset</button>
  //   </div>
  // );














// playground
// function App() {
//   const square = function(x) {
//     return x * x;
//   }

//   // const squareArrow = (x) => {
//   //   return x * x;
//   // }

//   const getFirstName = (name) => name.split(' ')[0];

//   return (
//     <div>
//       <p>{ square(9) }</p>
//       <p>{ getFirstName('frozen frost ') }</p>
//     </div>
//   );
// }



// // build it toggle visibility
// function App() {
  

//   function toggleVisibility() {
//     setToggledOn(toggledOn == 0? 1 : 0);
//   }

//   const [toggledOn, setToggledOn] = useState(0);

//   return (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>Toggle</button>

//       {toggledOn == 1 ? <p>yay</p> : null}
//     </div>
//   );
// }

