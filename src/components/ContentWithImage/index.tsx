import NextImage from 'next/legacy/image';
import styles from './index.module.scss';

interface ContentWithImageProps {
  children: any;
  imgSrc: any;
  borderRadius?: 'true' | 'false';
  className?: any;
}

const ContentWithImage = ({
  imgSrc,
  children,
  borderRadius,
  className,
}: ContentWithImageProps) => {
  return (
    <div className={`${styles.root_container} ${className ? className : ''}`}>
      <div
        className={`${
          borderRadius === 'true' ? styles.img_container : styles.img_noBrRad
        }`}
      >
        <NextImage src={imgSrc} alt="content-bg-img" layout="fill" />
      </div>
      <div className={styles.content_container}>{children}</div>
    </div>
  );
};

export default ContentWithImage;
