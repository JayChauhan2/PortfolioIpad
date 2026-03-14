export default function PhotosApp() {
  return (
    <div className="w-full h-full bg-white flex flex-col p-6 overflow-y-auto pt-16">
      <h1 className="text-3xl font-bold mb-6 text-black">Photos</h1>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-md animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
