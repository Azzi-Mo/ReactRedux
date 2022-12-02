import { useContext, useEffect, useState } from "react";

// function UI() {
//   const value = useContext(Dta);
//   return (
//     <>
//       <div className="box2_ch1">
//         <div className="sec_img_user">
//           <section className="img_sec">
//             <img className="avatar_url">{value.avatar_url}</img>
//           </section>
//           <section className="user_sec">{}</section>
//         </div>
//         <div>
//           <p className=""></p>
//         </div>
//       </div>

//       <div className="box2_ch2">
//         <div className="space"></div>
//       </div>
//     </>
//   );
// }
// export default UI;
import GetData from "./GetData";
import Comp1 from "./Component/comp1";
import Comp2 from "./Component/comp2";

function FileUIDesign() {
  return (
    <>
      <GetData>


        <Comp1/>
        <Comp2/>

      </GetData>
    </>
  );
}
export default FileUIDesign;
