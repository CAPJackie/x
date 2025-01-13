import GrokInput from "./grok-input";

export default function GrokHero() {
  return (
    <>
      <div className="h-[20vh]"></div>
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-medium mb-3">Grok</h1>
        <GrokInput />
        <span className="p-2 text-twitter-dark-gray text-[15px]">
          Grok can make mistakes. Verify its outputs.
        </span>
      </div>
      <div className="h-[10vh]"></div>
    </>
  );
}
