import {
  Button,
  Grid,
  Typography,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import useStyles from "../style";

import Loading from "./Loading";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data,setData] = useState({});

  
  useEffect(async() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:5000/api/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(async(response) => {
        setData(await response.json())
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          setError(error);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
    return data;
  };

  const logout = ()=>{
    localStorage.clear();
    
  }


  const classes = useStyles();
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Alert severity="error">{error}</Alert>;
  } else {
    return (
      <Grid
        container
        // spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item>
          {data.decoded ? <Typography variant="h4">{(data.decoded.id)}</Typography> : "adfadsf"}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={logout}
            href="/login"
            className={classes.button}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;
