import Image from "next/image";

export function NoVerified() {
  return (
    <div className="flex items-center w-full flex-col px-8">
      <Image
        src="/images/noVerified.png"
        alt="No verified notifications"
        width={336}
              height={168}
              className="my-9"
      />
      <div className="px-3 text-justify ">
        <h2 className="text-3xl font-extrabold mb-2 leading-9">
          Nothing to see here — yet
        </h2>
        <p className="text-twitter-gray text-base leading-5 font-normal">
          Likes, mentions, reposts, and a whole lot more — when it comes from a
          verified account, you’ll find it here.{" "}
          <a className="underline text-white">Learn more</a>
        </p>
      </div>
    </div>
  );
}
