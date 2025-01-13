import Image from "next/image";

export default function GrokInput() {
  return (
    <div className="px-2 py-1 w-full rounded-full h-[50px] bg-[#202327] flex flex-row justify-center items-center">
      <button className=" min-h-9 min-w-9 flex justify-center items-center">
        <Image
          src={"/images/add-single-file.svg"}
          alt="add file"
          width={20}
          height={20}
        />
      </button>
      <textarea placeholder="Ask anything" className="w-full bg-transparent" />
      <button className="min-h-9 min-w-9 flex justify-center items-center">
        <Image
          src={"/images/send.svg"}
          alt="send search"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
