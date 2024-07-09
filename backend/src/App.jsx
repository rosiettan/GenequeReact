// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [surveys, setSurveys] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/viewing')
//       .then(response => setSurveys(response.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//       <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
//           <div className="w-50">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Age</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                     surveys.map(survey, index) => (
//                         <tr key={index}>
//                           <td>{survey.name}</td>
//                           <td>{survey.email}</td>
//                           <td>{survey.age}</td>
//                         </tr>
//                     })
//                 }
//               </tbody>
//             </table>
//           </div>
//       </div>
//     );
// }

// export default App;
