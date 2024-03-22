export default function CategoryCard() {
  return (
    <div className="relative flex h-[100%]">
      <img
        className="w-[100%] h-[100%] object-cover"
        src="/category-dummy.png"
      />
      <a
        href="#"
        className="absolute bottom-10 left-10 text-[1.6rem] bg-white px-[5rem] py-[1rem]"
      >
        MEN
      </a>
    </div>
  );
}
