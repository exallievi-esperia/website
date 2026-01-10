import Image from 'next/image'
import { RenderImageContext, RenderImageProps } from 'react-photo-album'

export default function renderNextImage(
  { alt = '', title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: `${width} / ${height}` }}>
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        className="object-cover h-full w-full"
      />

      {/* Overlay */}
      {'blurDataURL' in photo && (
        <div className="absolute w-full h-full inset-0 bg-white/[0.92] dark:bg-gray-900/[0.92] flex justify-center items-center font-semibold text-lg">
          altre foto
        </div>
      )}
    </div>
  )
}
