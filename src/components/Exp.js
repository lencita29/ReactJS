// file not components
// named export and default export

// named export

// individual exports
export const name="John";
export const number=58949740;

// create components called Imp.jsx
// any file we can export


//grouped exporting 
const address="Mangalore"
const pincode=568748

export {address,pincode}


// default export
const Hello=()=>{
    alert("this is default function call")
}
export default Hello
// cannot export multiple default functions, cannot use default keyword multiple components