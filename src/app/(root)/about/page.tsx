import Link from "next/link";
const page = () => {
  // throw new Error("Error in about page");
    console.log("about page");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
     <h1 className="text-center text-5xl hover:text-fuchsia-700">hi about</h1>
     <Link href="/">home</Link>
    </div>
  )
}

export default page
