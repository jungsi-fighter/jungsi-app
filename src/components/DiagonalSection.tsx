export default function DiagonalSection({ children, bg }) {
    return (
      <div className={`relative py-20 ${bg} overflow-hidden`}>
        <div className="absolute -top-32 left-0 w-full h-32 bg-white rotate-2 origin-left"></div>
        <div className="relative container mx-auto px-4">{children}</div>
        <div className="absolute -bottom-32 right-0 w-full h-32 bg-white -rotate-2 origin-right"></div>
      </div>
    );
  }