const page = async () => {
  const response = await fetch(" https://simple-books-api.glitch.me/books/");
  const data = await response.json();
  console.log(data);

  interface Books {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }
  return (
    <>
      <div className="flex justify-center  tracking-[2px] font-mono font-extrabold text-[18px] sm:text-[35px] bg-blue-100">
        <h1>DATA FETCHED SUCSSESFULLY</h1>
      </div>
      <div className="flex justify-center  tracking-[2px] font-mono font-extrabold text-[18px] sm:text-[35px] bg-blue-100">
        <h1>Total Books : {data.length}</h1>
      </div>
      <div className="w-full h-auto sm:h-screen flex justify-center bg-blue-100 ">
        <div className="w-auto h-auto grid pt-5 sm:pt-0  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-3 content-center px-2 ">
          {data.map((books: Books) => (
            <div
              key={books.id}
              className="w-full bg-white rounded-[10px] h-[200px] flex flex-col items-start p-6"
            >
              <h2 className=" text-[20px] capitalize ">
                {" "}
                <span className="font-[600] tracking-wide">
                  Book Name
                </span> : {books.name}
              </h2>
              <p className=" text-[20px] sm:text-[24px] pb-4 pt-2  capitalize ">
                {" "}
                <span className="font-[600] tracking-wider">
                  Book Type
                </span> : {books.type}
              </p>
              <p className=" rounded-lg p-2 text-white font-sans font-[500] bg-blue-500 ">
                {books.available ? "Available" : "Not Available"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
