import Image from 'next/legacy/image'
import Link from 'next/link';
import React from 'react'


const ImageStyle = {
  height: ' 100%',
  width: ' 100%'
};

type CardComponentProps = {
  text: string
  desc?: string
  imgSrc: string
  mainStyle: string
  topStyle?: string
  btmStyle?: string,
  textStyle: string,
  alt?: string
  href?: string
  hrefTitle?: string
  descStyle?: string
  hrefStyle?: string
}
export default function CardsComponents({
  text,
  desc,
  imgSrc,
  alt,
  href,
  hrefTitle,
  mainStyle,
  topStyle,
  btmStyle,
  textStyle,
  descStyle,
  hrefStyle,
}: CardComponentProps) {

  return (
    <>
      <Link href="#" >
        <div className={`${mainStyle} container bg-secondary`}>
          <div className={`${topStyle} top`}>
            <Image
              src={imgSrc}
              alt={alt}
              height={100}
              width={100}
              layout="responsive"
              objectFit='cover'
              objectPosition="center"
            />
          </div>
          <div className={`${btmStyle} btm`} style={{'textAlign': 'center'}}>
            <h3 className={`${textStyle} btm`}>{text}</h3>
            {desc ? (<p className={descStyle}>{desc}</p>) : null}
            {href ? (<a href={href} className={hrefStyle}>{hrefTitle}</a>) : null}
          </div>
        </div>
      </Link>
    </>
  )
}
