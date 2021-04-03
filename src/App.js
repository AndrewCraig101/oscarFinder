import React, { Profiler } from 'react'
import firebase from './firebase';
// import Footer from './Footer.js';
import Selection from './Selection.js';
import DisplayWinners from './DisplayWinners.js'
import Statue from './assets/statue.png';

import { useEffect, useState } from 'react';

function App() {

  const [allProfiles, setAllProfiles] = useState([]);

  const [yearChoice, setYearChoice] = useState('placeholder')

  const [userSelectedYear, setUserSelectedYear] = useState([])

  const [newState, setNewState] = useState([])

  const [finalWinners, setFinalWinners] = useState([]);

  useEffect(() => {
  
    const dbRef = firebase.database().ref();

    const copyArray = []

    dbRef.on('value', (response) => {

      const data = response.val();
      
      for (let index in data) {
        copyArray.push(data[index])
      }
      
    });
    
    setAllProfiles(copyArray);

    },[])

  const handleChange = (event) => {
    setYearChoice(event.target.value);
  }

  const handleSubmit = (e) => {
    console.clear()
    e.preventDefault();

    const yearArr = [];

    for (let i of allProfiles) {

      if (i.year == yearChoice && i.winner === true) {
        yearArr.push(i);
      }
    }
    console.log(yearArr)

    setFinalWinners(yearArr)

    console.log(finalWinners)
  }

  
  return (
    <div className="wrapper">
      <div className='containerMain'>

        <img src={Statue} className="fade-in" alt="Oscar statue" />
        <div className="containerData">
        <h1>Welcome To Oscar Finder</h1>
        <Selection yearChoice={yearChoice} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <DisplayWinners allProfiles={allProfiles} finalWinners={finalWinners}  />
        </div>

        <img src={Statue} alt="Oscar statue" />
      </div>
    </div>
  )
};
  
    
export default App;













// function App() {
//  const [allProfiles, setAllProfiles] = useState([]);
//   useEffect(() => {
//     axios({
//       url: "https://api.unsplash.com/search/photos",
//       method: "GET",
//       dataResponse: "json",
//       params: {
//         client_id: "SPWoYE3TRrK7rkvIR2uFqa0RuCJ-tfaeJvWqFzdyd-w",
//         // query: 
//         per_page: 30,
//       },
//     }).then((res) => {
//     const profiles = res.data.results.map((profile) => {
//       // let photo = img
//       // let title = title
//       // let category = category

//     return {...profile};

//       console.log(profile);
//       })

//     setAllProfiles() 
//     }
//   )}, [])

//   return (
//     <div className="App">
//       <div className='HeaderDiv'>
//         <Header />
//         <Selection />
//       </div>
      
//       <DisplayMovies profiles={allProfiles} />   
//       <Footer />
//     </div>
//   );
// }


