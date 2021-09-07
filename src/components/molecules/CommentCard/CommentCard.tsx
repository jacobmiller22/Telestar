/** Components */
import { Card, CardContent, Typography } from "@material-ui/core";

const CommentCard = ({ children, raised = false }) => {
  return (
    <Card raised={raised}>
      <CardContent>
        <Typography>{children}</Typography>
      </CardContent>
      <CardContent>Test</CardContent>
    </Card>
  );
};

export default CommentCard;
