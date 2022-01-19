type Props = {
  bgColor: string;
  children: React.ReactNode;
};

const SectionBgColor = ({ bgColor, children }: Props) => {
  return <section className={`${bgColor} py-2`}>{children}</section>;
};

export default SectionBgColor;
