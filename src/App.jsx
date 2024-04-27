import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const getimage = imageData();
  return (
    <> 
      <h1>KALVIUM GALLERY</h1> 
      <div className="app">
      {getimage.map((ele)=>{
        return <img src={ele.img} alt="elephant" key={ele.id}/>
      })}
    </div>
    </>
  );
}

export default App;
