import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="flex w-full bg-dark-blue p-4 justify-center items-center">
          <div className="flex-1 p-4 flex md:space-x-4">
            <div className="bg-primary">heart</div>
            <div className="hidden md:block text-white">
              <a className="border-b-2 border-primary px-4 py-2">Home</a>
            </div>
            <div className="hidden md:block text-white">Blog</div>
          </div>
          <h1 className="flex-1 text-primary text-center">JamStack - Blog</h1>
          <div className="flex-1 flex text-right">
            <div className="p-4 md:hidden">test</div>
            <h2 className="text-white pr-8">Perla Pipol</h2>
            <Image
              className={"w-16 h-16 rounded-full"}
              src={"https://randomuser.me/api/portraits/men/75.jpg"}
              width={32}
              height={32}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
