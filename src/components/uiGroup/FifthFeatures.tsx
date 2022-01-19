import { FC } from 'react';

type Props = {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
};

const UncommonFifthMind: FC<Props> = ({
  text1 = '',
  text2 = '',
  text3 = '',
  text4 = '',
  text5 = '',
}) => {
  return (
    <>
      <div className="px-4 md:px-0 my-16">
        <ul className="md:flex justify-between justify-items-stretch md:px-0 pt-4 md:pt-8 md:pb-4 mx-auto md:space-x-4 max-w-4xl font-bold text-blue">
          {text1 && (
            <li className="flex justify-center items-center py-4 mt-2 md:mt-0 w-full text-theme bg-white border-2 border-theme shadow-xl">
              {text1}
            </li>
          )}
          {text2 && (
            <li className="flex justify-center items-center py-4 mt-2 md:mt-0 w-full text-theme bg-white border-2 border-theme shadow-xl c">
              {text2}
            </li>
          )}
          {text3 && (
            <li className="flex justify-center items-center py-4 mt-2 md:mt-0 w-full text-theme bg-white border-2 border-theme shadow-xl c">
              {text3}
            </li>
          )}
        </ul>
        <ul className="md:flex justify-center justify-items-stretch md:px-0 mx-auto md:space-x-4 max-w-4xl font-bold text-blue">
          {text4 && (
            <li className="flex justify-center items-center py-4 mt-2 md:mt-0 w-full md:w-1/3 text-theme bg-white border-2 border-theme shadow-xl c">
              {text4}
            </li>
          )}
          {text5 && (
            <li className="flex justify-center items-center py-4 mt-2 md:mt-0 w-full md:w-1/3 text-theme bg-white border-2 border-theme shadow-xl c">
              {text5}
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default UncommonFifthMind;
