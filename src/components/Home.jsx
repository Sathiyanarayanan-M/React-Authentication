import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function Home() {
  const classes = useStyles();
  return (
    <Grid
      container
      // spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item >
        <Typography variant="h4">Simple Authentication</Typography>
      </Grid>
      <Grid item >
        <Button
          variant="contained"
          color="primary"
          href="/login"
          className={classes.button}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="/register"
          className={classes.button}
        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
