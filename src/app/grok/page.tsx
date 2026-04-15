import GrokCommonSearches from "./grok-common-searches";
import GrokHero from "./grok-hero";
import GrokInput from "./grok-input";

export default function GrokPage() {
  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-120px)]">
      <GrokHero />
      <GrokCommonSearches />
      <GrokInput />
    </div>
  );
}
