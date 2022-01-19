import Image from 'next/image';
import React, { FC } from 'react';

type Props = {
  imgUrl1: string;
  title1: string;
  text1: string;
  alt1: string;
  imgUrl2: string;
  title2: string;
  text2: string;
  alt2: string;
  imgUrl3: string;
  title3: string;
  text3: string;
  alt3: string;
};

const FloatImage: FC<Props> = ({
  imgUrl1,
  title1,
  text1,
  alt1,
  imgUrl2,
  title2,
  text2,
  alt2,
  imgUrl3,
  title3,
  text3,
  alt3,
}) => {
  return (
    <div className="px-6 my-20 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:mr-5">
          <div className="py-4 px-8 h-full shadow-xl">
            <Image width={560} height={200} src={imgUrl1} alt={alt1} />
            <h4 className="md:mt-3 md:mb-2 text-xl font-bold text-center text-gray-800">
              {title1}
            </h4>
            <p className="text-lg text-gray-700">{text1}</p>
          </div>
        </div>
        <div className="md:mx-2.5">
          <div className="py-4 px-8 h-full shadow-xl">
            <Image width={560} height={200} src={imgUrl2} alt={alt2} />
            <h4 className="md:mt-3 md:mb-2 text-xl font-bold text-center text-gray-800">
              {title2}
            </h4>
            <p className="text-lg text-gray-700">{text2}</p>
          </div>
        </div>
        <div className="md:ml-5">
          <div className="py-4 px-8 h-full shadow-xl">
            <Image width={560} height={200} src={imgUrl3} alt={alt3} />
            <h4 className="md:mt-3 md:mb-2 text-xl font-bold text-center text-gray-800">
              {title3}
            </h4>
            <p className="text-lg text-gray-700">{text3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatImage;
