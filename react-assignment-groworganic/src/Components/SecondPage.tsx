import  { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Post } from "../models";

import { Button, Container, Divider } from "@mui/material";
import DepartMentList from "./DepartMentList"; // Import the DepartMentList component

const SecondPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false);
 

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);
  
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "title", headerName: "Title", width: 300 },
      { field: "body", headerName: "Body", width: 400 },
    ];

    const handleNextClick = () => {
      setShowCheckboxes(true); // Show the checkboxes when the button is clicked
    };
  
    return (
      <Container>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={posts} columns={columns} pageSizeOptions={[5]} />
        </div>
        <Button variant="contained" color="primary" onClick={handleNextClick}>
          Show Departments
        </Button>
        
        {showCheckboxes && (
          <>
            <Divider />
            <DepartMentList /> {/* Render the DepartMentList component */}
          </>
        )}
      </Container>
    );
}

export default SecondPage;
