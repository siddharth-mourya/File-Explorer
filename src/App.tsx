import "./App.css";
import FileExplorer from "./component/FileExplorer";
import FileStructure from "./fileStructure";

function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "1.5rem",
        }}
      >
        File Explorer
      </div>
      <hr/>
      <div>
        <FileExplorer fileStructure={FileStructure} />
      </div>
    </>
  );
}

export default App;
