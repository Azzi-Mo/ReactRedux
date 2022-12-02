import { createContext, useState } from "react";
import UI from "./FileUIDesign";
// import "./GetData.scss";
// export const Dta = createContext();
// function GetData() {
//   const [elemet, setElemet] = useState("");
//   const [urle, setUrle] = useState("");

//   const sh = (e) => {
//     e.preventDefault();

//     fetch(`https://api.github.com/users/${elemet}`.replace(/ /g, ""))
//       .then((res) => res.json())
//       .then((data) => {
//         setUrle(data);
//       });
//   };

//   return (
//     <>
//       <section style={{ height: window.innerHeight }} className="sec_contain">
//         <Dta.Provider value={urle}>
//           <div className="Box">

//             <section className="ch_box1">
//               <form onSubmit={sh}>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//                 <input placeholder="search githup username" onChange={(e) => setElemet(e.target.value)}></input>

//                 <button>Search</button>
//               </form>
//             </section>

//             <section className="ch_box2">
//               <UI />
//             </section>

//           </div>
//         </Dta.Provider>
//       </section>
//     </>
//   );
// }
// export default GetData;

export const Pcontext = createContext();

function GetData(props) {

  const [prd, setPrd] = useState([])

  fetch("https://api.github.com/users/azzi-mo")
    .then((res) => res.json())
    .then((data) => setPrd(data));

  return (
    <>
      <Pcontext.Provider value={prd}>
          {props.children}
      </Pcontext.Provider>
    </>
  );
}
export default GetData