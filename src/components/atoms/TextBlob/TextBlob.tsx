import { Grid, Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import { VARIANT_SIZE } from "interfaces/Theme";
export interface ITextBlobProps {
  variant: Variant;
  title: string;
  subtitle?: string;
  align?: string;
}

const TextBlob = ({ variant, title, subtitle, align }: ITextBlobProps) => {
  return (
    <Grid container item xs={12} justifyContent="center">
      <Grid item xs={12} justifyContent="center">
        {/* @ts-expect-error */}
        <Typography align={align || "inherit"} variant={variant}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} justifyContent="center">
        <Typography
          // @ts-expect-error
          align={align || "inherit"}
          variant={VARIANT_SIZE[VARIANT_SIZE.indexOf(variant) + 3]}
        >
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextBlob;
