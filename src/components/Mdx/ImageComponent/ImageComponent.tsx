import clsx from 'clsx';
import Image from 'next/image';
import MotionWrapper from '../MotionWrapper/MotionWrapper';

export interface Images {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ImageComponent({
  images,
  className,
}: {
  images: Images[];
  className?: string;
}) {
  return (
    <MotionWrapper tag="div" duration={0.3} delay={0.3}>
      <div className="my-10 flex w-full flex-wrap items-center justify-center gap-5 xl:justify-between">
        {images.map((image, index) => {
          const isEven = index % 2 === 0;
          return (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={clsx(
                'not-prose m-0 rounded-xl',
                !isEven && 'lg:mt-24',
                className,
              )}
            />
          );
        })}
      </div>
    </MotionWrapper>
  );
}
