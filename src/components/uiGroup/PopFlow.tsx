type popFlowDataList = {
  step?: string;
  title?: string;
  description?: string;
};

type Props = {
  titleColor: string;
  stepColor: string;
  stepBgColor: string;
  borderColor: string;
  popFlowData: popFlowDataList[];
};

const PopFlow = ({ titleColor, stepColor, stepBgColor, borderColor, popFlowData }: Props) => {
  return (
    <div className="px-6 my-5 md:my-20 mx-auto max-w-6xl text-center simple-title-underbar">
      <ul className="p-0 popFlow">
        {popFlowData.map((data, index) => (
          <li key={index} className="relative mb-10">
            <dl
              className="flex relative flex-col md:flex-row items-center py-5 px-7 w-full rounded-lg border-2"
              style={{ backgroundColor: stepBgColor, borderColor: borderColor }}
            >
              {index !== popFlowData.length - 1 ? (
                <span
                  className="box-border absolute top-full left-1/2 transform -translate-x-1/2"
                  style={{
                    border: 'solid transparent',
                    borderWidth: '20px',
                    borderTopColor: borderColor,
                  }}
                />
              ) : (
                ''
              )}
              <dt
                className="md:mr-5 md:w-1/4 text-xl font-bold text-center"
                style={{ color: titleColor }}
              >
                <span
                  className="block relative z-50 py-1 px-2 mb-3 text-base md:text-lg font-normal text-white rounded-full"
                  style={{ backgroundColor: stepColor }}
                >
                  {data.step}
                </span>
                {data.title}
              </dt>
              <dd className="ml-0 md:w-3/4 text-left">{data.description}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopFlow;
