
const Layoutroot = ({children} : {children: React.ReactNode}) => {
  // throw new Error("Error in root layout");
  return (
    <div>
        <h1 className="text-blue-300 text-center text-5xl ">hey root navbar </h1>
        {children}
    </div>
  )
}

export default Layoutroot
