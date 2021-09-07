import Image from "next/image";

/** Components */
import { Grid } from "@material-ui/core";
import { TextBlob } from "components/atoms";
import { ITextBlobProps } from "components/atoms/TextBlob/TextBlob";

interface ITextImageBlobProps {
  textBlobProps: ITextBlobProps;
  img?: any;
  reverse?: boolean;
}

const TextImageBlob = ({
  textBlobProps,
  img,
  reverse,
}: ITextImageBlobProps) => {
  const renderItems = () => {
    const items = [
      <Grid item xs={6} key="text">
        <TextBlob {...textBlobProps} />
      </Grid>,
      <Grid item xs={2} key="img">
        <Image alt="" src={img} width={250} height={250} />
      </Grid>,
    ];

    if (reverse) {
      items.reverse();
    }

    return items;
  };

  return (
    <Grid container alignItems="center" spacing={2} justifyContent="center">
      {renderItems()}
    </Grid>
  );
};

export default TextImageBlob;
