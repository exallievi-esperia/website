import Image from 'next/image'
import type { RenderPhotoProps } from 'react-photo-album'

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
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
