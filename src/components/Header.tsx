interface HeaderProps {
  title?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="h-96 overflow-hidden bg-gradient-to-b from-[#d3d2d2] to-[#dcdcdc]">
      <div className="container mx-auto max-w-6xl flex justify-between items-center pt-24 px-2 h-full">
        <div className="flex flex-col justify-center items-center gap-5 flex-1">
          <h1 className="text-7xl  text-pretty quicksand-500 text-center">
            {props.title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
