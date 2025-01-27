// todo list 
// import React, { useState } from "react";

// function MyButton() {
//   return <button>I'm a button</button>;
// }

// export default function MyApp() {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleCheckboxChange = (event) => {
//     const value = event.target.value;
//     setSelectedOptions((prev) =>
//       prev.includes(value)
//         ? prev.filter((option) => option !== value)
//         : [...prev, value]
//     );
//   };

//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//       <h2>Select Your Preferences:</h2>
//       <form>
//         <label>
//           <input
//             type="checkbox"
//             value="Option 1"
//             onChange={handleCheckboxChange}
//           />{" "}
//           Option 1
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             value="Option 2"
//             onChange={handleCheckboxChange}
//           />{" "}
//           Option 2
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             value="Option 3"
//             onChange={handleCheckboxChange}
//           />{" "}
//           Option 3
//         </label>
//       </form>
//       <p>Selected Options: {selectedOptions.join(", ") || "None"}</p>
//     </div>
//   );
// }

// profile 
// import React from 'react';

// const Profile = ({ user }) => {
//   return (
//     <div style={styles.container}>
//       <img
//         src={user.profilePicture || "https://via.placeholder.com/150"}
//         alt="Profile"
//         style={styles.profileImage}
//       />
//       <h2 style={styles.name}>{user.name}</h2>
//       <p style={styles.email}>{user.email}</p>
//       <p style={styles.bio}>{user.bio || "No bio available."}</p>
//     </div>
//   );
// };

// // Sample styles (you can use CSS instead of inline styles)
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '20px',
//     maxWidth: '300px',
//     margin: '20px auto',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//   },
//   profileImage: {
//     width: '150px',
//     height: '150px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     marginBottom: '15px',
//   },
//   name: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   email: {
//     fontSize: '16px',
//     color: '#555',
//     marginBottom: '10px',
//   },
//   bio: {
//     fontSize: '14px',
//     color: '#777',
//     textAlign: 'center',
//   },
// };

// // Sample usage
// const App = () => {
//   const user = {
//     name: "shiv gupta ",
//     email: "shiv@example.com",
//     profilePicture: "https://image.tensorartassets.com/cdn-cgi/image/anim=true,plain=false,w=2048,f=jpeg,q=85/posts/images/685876019399367569/d9a97cb4-6709-4670-bba1-3ee12befc6ab.jpg",
//     bio: "Web Developer | React Enthusiast | Tech Lover",
//   };

//   return <Profile user={user} />;
// };

// export default App;

// import React from "react";

// const CardImage = ({ src }) => <img src={src} alt="Card" style={{ width: "100%" }} />;

// const CardContent = ({ title, description }) => (
//   <div>
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </div>
// );

// const Card = ({ src, title, description }) => (
//   <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" , margin: "10px" }}>
//     <CardImage src={src} />
//     <CardContent title={title} description={description} />
//   </div>
// );

// const CardGrid = ({ cards }) => (
//   <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" , padding: "20px"}}>
//     {cards.map((card, index) => (
//       <Card key={index} {...card} />
//     ))}
//   </div>
// );

// const App = () => {
//   const cards = [
//     { src: "https://images.everydayhealth.com/images/diet-nutrition/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg", title: "Strawberry", description: "Good for health and rich in vitamins" },
//     { src: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/blueberries-1200x628-facebook-1200x628.jpg", title: "Blueberries", description: "Blue color Fruit" },
//     { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiFaF60MQlSGOU_m8gxpOax_AeL-iFHe6hQ&s", title: "Redberries", description: "Red color fruit" },
  
//   ];

//   return (
//   <div>
//     <h1 style={{textAlign: "center", marginBottom : "20px"}}>Dictionary</h1>
//     <CardGrid cards={cards} />
//     </div>);
// };

// // export default App;



// const Child = ({name }) =>{
//     return  <p>hello, {name}! </p>;   
// };
// const parent =() =>{
//     return(
//         <div>
//             <Child name="shiv"/>
//             <Child name="shruti"/>
//             <Child name="hagu bhuntu"/>
//         </div>
//     );
// };

// export default parent;


// import React from "react";

// const Child = ({ sendDataToParent }) => {
//   const handleInputChange = (e) => {
    
//     sendDataToParent(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Enter here"
//       onChange={handleInputChange}
//     />
//   );
// };

// const Parent = () => {
//   const [data, setData] = React.useState("");

//   return (
//     <div>
//       <Child sendDataToParent={setData} />
//       <p>Data from child: {data}</p>
//     </div>
//   );
// };

// export default Parent;


// import React from "react";

// const Sibling1 = ({ updateData, label }) => {
//   return <button onClick={() => updateData(`${label} clicked!`)}>Update {label}</button>;
// };

// const Sibling2 = ({ data }) => {
//   return <p>{data}</p>;
// };

// const Parent = () => {
//   const [data1, setData1] = React.useState("");
//   const [data2, setData2] = React.useState("");

//   const siblings = [
//     { label: "Sibling 1", updateData: setData1, data: data1 },
//     { label: "Sibling 2", updateData: setData2, data: data2 },
//   ];

//   return (
//     <div>
//       {siblings.map((sibling, index) => (
//         <div key={index}>
//           <Sibling1 updateData={sibling.updateData} label={sibling.label} />
//           <Sibling2 data={sibling.data} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Parent;


// import React, { createContext, useContext } from "react";
// //Multilevel using context API

// // Create Context
// const UserContext = createContext();

// const GrandChild = () => {
//   const user = useContext(UserContext);
//   return <p>Username: {user.name},Age: {user.age}</p>;
 
// };

// const Child = () => {
//   return <GrandChild />;
// };

// const Parent = () => {
//   const user = { name: "Shiv Gupta", age: 19 };

//   return (
//     <UserContext.Provider value={user}>
//       <Child />
//     </UserContext.Provider>
//   );
// };


// export default Parent;

// import React from "react";
// import { createStore } from "redux";
// import { Provider, useSelector, useDispatch } from "react-redux";

// // Reducer 
// const reducer = (state = { message: "" }, action) => {
//   switch (action.type) {
//     case "UPDATE_MESSAGE":
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// }; 

// // Store
// const store = createStore(reducer);

// // Sibling1 Component
// const Sibling1 = () => {
//   const dispatch = useDispatch();
//   return (
//     <button onClick={() => dispatch({ type: "UPDATE_MESSAGE", payload: "Hello from Sibling 1!" })}>
//       Update Message
//     </button>
//   );
// };

// // Sibling2 Component
// const Sibling2 = () => {
//   const message = useSelector((state) => state.message);
//   return <p>Message: {message}</p>;
// };

// // App Component
// const App = () => (
//   <Provider store={store}>
//     <div>
//       <Sibling1 />
//       <Sibling2 />
//     </div>
//   </Provider>
// );

// export default App;


// import React from "react";
// import { createStore } from "redux";
// import { Provider, useSelector, useDispatch } from "react-redux";

// // Reducer 
// const reducer = (state = { message: "" }, action) => {
//   switch (action.type) {
//     case "UPDATE_MESSAGE":
//       return { ...state, message: action.payload };
//     default:
//       return state;
//   }
// }; 

// // Create Redux Store
// const store = createStore(reducer);

// // Sibling1 Component
// const Sibling1 = () => {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch({ type: "UPDATE_MESSAGE", payload: "Hello from Sibling 1!" });
//   };

//   return (
//     <button onClick={handleClick}>
//       Update Message
//     </button>
//   );
// };

// // Sibling2 Component
// const Sibling2 = () => {
//   const message = useSelector((state) => state.message);

//   return (
//     <p>
//       Message: {message || "No message yet!"}
//     </p>
//   );
// };

// // App Component
// const App = () => (
//   <Provider store={store}>
//     <div>
//       <h1>Redux Sibling Communication Example</h1>
//       <Sibling1 />
//       <Sibling2 />
//     </div>
//   </Provider>
// );

// export default App;


import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselWithInterval() {
  return (
    <div className="container mt-4">
      <Carousel interval={3000}> {/* Set interval to 3000ms (3 seconds) */}
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?w=247&h=180&c=7&r=0&o=5&pid=1.7"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?w=264&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.0ZM7e1Z_zmebcBILunvbHQHaEn?w=298&h=186&c=7&r=0&o=5&pid=1.7"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselWithInterval;