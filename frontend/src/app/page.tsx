import Header from "@/components/header";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { GitCompareArrows, Play, SquarePlay, Tv } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <aside className="flex flex-col w-[300px] h-full p-4 border-r">
          <Command>
            <CommandList>
              <CommandGroup heading="Channels">
                <CommandItem>
                  <Play className="w-4 h-4 mr-2"/>
                  <span>All</span>
                </CommandItem>
                <CommandItem>
                  <GitCompareArrows className="w-4 h-4 mr-2"/>
                  <span>Compare</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </aside>
        <main>
          asd
        </main>
      </div>
    </div>
  );
}
