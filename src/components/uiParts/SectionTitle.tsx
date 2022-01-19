type Props = {
  title: string;
  subTitle: string;
  color?: string;
  text?: string;
};

const SectionTitle = ({ title, subTitle, color = '#242424', text = '' }: Props) => {
  return (
    <div className="px-6 md:my-10 mx-auto mt-5 mb-10 max-w-6xl">
      <h2 className="relative text-2xl md:text-3xl font-bold text-center">
        {title}
        <span className="block mt-3 text-lg font-medium">{subTitle}</span>
      </h2>
      {text && <p className="mx-auto mt-10 max-w-3xl text-lg text-center">{text}</p>}
      <style jsx>{`
        h2::before {
          position: absolute;
          bottom: -20px;
          left: calc(50% - 30px);
          width: 60px;
          height: 5px;
          content: '';
          border-radius: 3px;
          background: ${color};
        }
      `}</style>
    </div>
  );
};

export default SectionTitle;
