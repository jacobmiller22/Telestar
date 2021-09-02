interface ISVGRenderProps {
  svg: string;
}

const SVGRender = ({ svg }: ISVGRenderProps) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
};

export default SVGRender;
