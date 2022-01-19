import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title1?: string;
  title2?: string;
  bgColor?: string;
  text1?: string;
  text2?: string;
  buttonText1?: string;
  buttonText2?: string;
  imgUrl?: string;
  link?: string;
  btnColor?: string;
};

const Hero = ({
  title1 = '今、求められるShopify顧問',
  title2 = 'コーディング×アプリ導入×分析×コンサル',
  bgColor = 'bg-gray-200',
  text1 = '旧帝卒のエンジニア',
  text2 = 'キャンペーン施策',
  buttonText1 = '大好評につき、企業枠残り僅か',
  buttonText2 = '今すぐお問い合わせ',
  imgUrl = '/reterior_ogp.png',
  link = '/contact',
  btnColor = 'black',
}: Props) => {
  return (
    <div className={bgColor}>
      <div className="flex flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap items-center sm:py-0 px-6 pb-4 mx-auto max-w-6xl">
        <div className="relative py-8 md:py-16 px-6 md:px-0 w-full md:w-1/2 text-center lead-center z-2">
          <div className="lg:flex items-center px-4 lg:px-0 mb-2 w-full text-center">
            <div className="w-full text-2xl md:text-3xl font-bold">{title1}</div>
          </div>
          <p className="pt-4 text-xl font-bold tracking-widest text-theme">
            {title2}
            <br className="block sm:hidden md:block lg:hidden" />
          </p>
          <ul className="sm:grid grid-cols-2 gap-4 my-4 lg:my-8 lg:text-xl font-bold text-theme sm:text-md">
            <li className="flex relative justify-center items-center p-2 lg:p-4 lg:pt-5 md:my-0 mt-4 sm:mt-0 mb-1 bg-white border-2 shadow-md border-blue text-blue">
              {text1}
            </li>
            <li className="flex relative justify-center items-center p-2 lg:p-4 lg:pt-5 md:my-0 mt-4 sm:mt-0 mb-1 bg-white border-2 shadow-md border-blue text-blue">
              {text2}
            </li>
          </ul>
          <div className="p-0 lg:p-6 lg:bg-white lg:shadow-xl">
            <p className="pb-2 font-bold">{buttonText1}</p>
            <Link href={link}>
              <a
                style={{ backgroundColor: btnColor }}
                className="block relative py-4 sm:py-2 lg:py-4 mx-auto text-lg font-bold text-center text-white hover:no-underline hover:bg-gray-900 transition duration-300 ease-in-out undefined"
              >
                {buttonText2}
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="index-module--catchImg--3feDP w-full lg:w-3/5 ml-0 lg:ml-16 h-full"></div> */}
        <div className="hidden md:block p-2 w-full md:w-1/2">
          <Image height={550} width={800} src={imgUrl} alt="UnReact School" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
