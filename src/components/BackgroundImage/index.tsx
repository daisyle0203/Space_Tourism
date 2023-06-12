import Image from "next/image"

// Types for different background sizes for different screen sizes
interface BackgroundImageProps {
  mobile: string
  tablet: string
  desktop: string
}

export default function BackgroundImage({
  mobile,
  tablet,
  desktop,
}: BackgroundImageProps) {
  return (
    <div className="fixed z-0 h-screen w-screen top-0 left-0">
      <picture>
        <source media="(min-width:1024px)" srcSet={desktop} />
        <source media="(min-width:768px)" srcSet={tablet} />
        <Image
          src={mobile}
          className="object-cover"
          alt="Space Tourism Background Image"
          fill
        />
      </picture>
    </div>
  )
}
