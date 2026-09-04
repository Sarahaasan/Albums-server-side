type AlbumProps = {
  image: string
  name: string
  singer: string
}

const Album = ({ image, name, singer}: AlbumProps) => {
  return (
    <div className="w-64 rounded-xl bg-zinc-900 p-4 shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-56 w-full rounded-lg object-cover"
      />

      <h2 className="mt-3 text-lg font-semibold text-white">
        {name}
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        {singer}
      </p>
    </div>
  )
}

export default Album