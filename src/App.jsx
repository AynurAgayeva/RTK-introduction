// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "./redux/counterSlice";

// function App() {
//   const count = useSelector((state) => state.counter.value)

//   const dispatch = useDispatch()
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Saygac</h1>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch(increment())}>Artir</button>
//       <button onClick={() => dispatch(decrement())}>Azalt</button>
//       <button onClick={() => dispatch(reset())}>Sifirla</button>

//     </div>


//   )



// }
// export default App;





import React  from "react";
import { AuthProvider } from "./context/authContext.jsx";
import Login from "./components/Login";
import Profile from "./components/Profile";



function App() {
  return (
    <AuthProvider>
      <Login />
      <Profile />
    </AuthProvider>
  );
}

export default App;
