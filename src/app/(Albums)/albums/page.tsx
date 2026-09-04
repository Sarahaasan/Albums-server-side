// server fetch com
import Link from "next/link";
import Album from "../../../../Componants/AlbumCom";
type DeezerAlbum = {
  id: number;
  title: string;
  cover_medium: string;
  artist: {
    name: string;
  };
};
async function Albums() {
  const response = await fetch("https://api.deezer.com/search/album?q=eminem");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const albums: { data: DeezerAlbum[] } = await response.json();
  console.log(albums.data);

  return (
    <> 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-5xl mx-auto gap-6">
      {albums.data.map((album) => (
        <Album
          key={album.id}
          image={album.cover_medium}
          name={album.title}
          singer={album.artist.name}
        />
      ))}
    </div>
       <Link
  href="/"
  className="block bg-blue-500 p-2.5 rounded text-white w-fit mx-auto mt-1.5 mb-2.5"
>
  Home
</Link>
    </>
  );
}

export default Albums;
