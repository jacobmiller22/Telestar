/** Components */
import { Icon, Grid, Button, Typography } from "@material-ui/core";

interface IActionIconBlobProps {
  icon: any;
  title: string;
  body: string;
  actionProps: {
    [rest: string]: any;
  };
}

const ActionIconBlob = ({
  icon,
  title,
  body,
  actionProps,
}: IActionIconBlobProps) => {
  return (
    <Grid item xs={12} direction="row">
      <Grid item xs={4} style={{ marginRight: 0 }}>
        <Icon> {icon}</Icon>
      </Grid>
      <Grid item xs={8}>
        <strong>
          <Typography variant="h6" display="inline">
            {title}
          </Typography>
        </strong>
        <Typography variant="body1">{body}</Typography>
        <Button {...actionProps} />
      </Grid>
    </Grid>
  );
};

export default ActionIconBlob;
