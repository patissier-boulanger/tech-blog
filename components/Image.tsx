import { ImageProps } from 'next/image'
import NextImage from 'next/image'

const Image = ({ ...rest }: ImageProps) => (
  <div className="relative object-contain">
    <NextImage {...rest} alt={'default'} />
  </div>
)

export default Image
