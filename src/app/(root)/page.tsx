import Link from "next/link";




const Home = () => {
  // throw new Error("Error in home page");
  console.log("page");
  return (
    <div  >
      <h1 className="text-5xl mb-3.5 mt-3.5 text-center" >welcome with us </h1>
      <hr /><hr /><hr />
   <Link
  href="/albums"
  className="block bg-blue-500 p-2.5 rounded text-white w-fit mx-auto mt-1.5"
>
  Albums
</Link>
     </div>
  );
};

export default Home;
