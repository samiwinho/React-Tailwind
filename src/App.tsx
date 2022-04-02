import {TextoItem} from "./components/texto";

function App() {
  return (
    <div className="p-10">
      <TextoItem />
      <a 
      className="block shadow bg-violet-600 text-white text-center p-4 mt-5 rounded-xl hover:bg-violet-500"
      href="#">Comentar
      </a>
    </div>
  );
}

export default App;
