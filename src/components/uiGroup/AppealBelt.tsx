import Link from 'next/link';
import { FC } from 'react';

type Props = {
  link?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  buttonText?: string;
  text1?: string;
  text2?: string;
  bgColor?: string;
  btnColor?: string;
};

const UncommonAppealBelt: FC<Props> = ({
  link = '/contact',
  title1 = 'サービス内容を',
  title2 = 'もっと詳しく知りたい方へ',
  title3 = '無料相談受付中',
  buttonText = '今すぐお問い合わせ',
  text1 = '大好評につき、受講生が残りわずかになっております',
  text2 = '予めご了承ください',
  bgColor = '#808080',
  btnColor = '#800000',
}) => {
  return (
    <div className="px-6 my-24 mx-auto max-w-6xl">
      <div style={{ backgroundColor: bgColor }} className="p-8 sm:p-8 mt-8 sm:mt-16">
        <h3 className="pb-4 text-xl font-bold text-center text-white">
          {title1}
          <br className="block sm:hidden" />
          {title2}
        </h3>
        <p className="font-medium text-center text-white">{title3}</p>
        <div className="md:grid gap-4 mx-auto mt-4 max-w-2xl">
          <div className="entry-button">
            <Link href={link}>
              <a
                style={{ backgroundColor: btnColor }}
                className="block relative py-4 mx-auto text-lg font-bold text-center text-white hover:no-underline hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-105 undefined"
              >
                {buttonText}
              </a>
            </Link>
          </div>
        </div>
        <p className="mt-4 font-medium text-center text-white">
          {text1}
          <br />
          {text2}
        </p>
        <style jsx>
          {`
            .bg-yellow {
              --tw-bg-opacity: 1;
              background-color: #808080;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default UncommonAppealBelt;
