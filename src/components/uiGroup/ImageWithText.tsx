import Image from 'next/image';

type Props = {
  isImageLeft: boolean;
  title: string;
  text: string;
  imgUrl: string;
  width: number;
  height: number;
  alt: string;
  optionText?: string;
};

const ImageWithText: React.VFC<Props> = ({
  isImageLeft = false,
  title,
  text,
  imgUrl,
  width,
  height,
  alt,
  optionText = '',
}) => {
  return (
    <div className="px-6 my-20 md:my-28 mx-auto max-w-6xl">
      <div
        className={isImageLeft ? 'flex flex-col md:flex-row' : 'flex flex-col md:flex-row-reverse'}
      >
        <div className="md:w-1/2">
          <div className="-mb-2">
            <Image className="w-full h-full" src={imgUrl} width={width} height={height} alt={alt} />
          </div>
        </div>
        <div className="flex items-center md:w-1/2">
          <div className={isImageLeft ? 'pb-10 md:py-6 md:pl-10' : 'pb-10 md:py-6 md:pr-10'}>
            <h2 className="my-2 md:my-4 text-2xl font-bold text-center md:text-left">{title}</h2>
            <p>{text}</p>
            {optionText && <p className="mt-2 text-base font-normal text-gray-500">{optionText}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
