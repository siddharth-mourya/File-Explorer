import { useState } from "react";

interface IFileStructure {
  isFolder: boolean;
  name: string;
  items: Array<any>;
}

const FileExplorer = ({ fileStructure }: { fileStructure: IFileStructure }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div style={{ paddingLeft: "20px", fontWeight: "bold" }}>
      <p
        style={{ cursor: 'pointer', color: fileStructure.isFolder ? "blue" : "black", margin: 0 }}
        onClick={() =>
          fileStructure.isFolder ? setExpanded(!isExpanded) : null
        }
      >
        <i style={{ paddingRight: '5px', display: fileStructure.isFolder ? "inline" : "none" }} className={isExpanded ? 'fa fa-angle-down' : 'fa fa-angle-right'}  aria-hidden="true"></i>
        {fileStructure.name}
      </p>
      <div style={{ display: isExpanded ? "block" : "none" }}>
        {fileStructure.items.map((fs) => (
          <FileExplorer fileStructure={fs} />
        ))}
      </div>
    </div>
  );
};
export default FileExplorer;
