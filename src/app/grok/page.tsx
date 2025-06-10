import GrokCommonSearches from "./grok-common-searches";
import GrokHero from "./grok-hero";

export default function GrokPage() {
  return (
    <div className="flex flex-col px-0 sm:px-4 md:px-8 lg:px-16 xl:px-32">
      <GrokHero />
      <GrokCommonSearches />
    </div>
  );
}
