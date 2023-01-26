import { ImageProps } from 'next/image'
import Image from 'next/future/image'

const NextImage = ({ ...rest }: ImageProps) => (
  <div className="relative object-contain">
    <Image {...rest} />
  </div>
)

export default Image
