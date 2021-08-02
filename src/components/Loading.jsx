import { CircularProgress } from "@material-ui/core";
import useStyles from "../style";

export default function Loading()  {
  const classes = useStyles();
  return (
    <div className="loading">
      <CircularProgress />
    </div>
  );
};
