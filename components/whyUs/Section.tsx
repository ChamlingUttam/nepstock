import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { apis } from "./api";

export function Section() {
  return (
    <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  lg:px-16 px-7">
      {apis.map((api) => {
        const Icon = api.icon;

        return (
          <Card
            key={api.id}
            className=" w-full max-w-sm lg:px-5 px-4   border border-[#E2E8F0]"
          >
            
            <CardHeader className="flex flex-col lg:gap-4 gap-2 lg:mt-4 mt-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C2DFFF] text-[#057BFF]">
              <Icon className="h-5 w-5" />
            </span>

              <CardTitle><h1 className="text-black font-bold">{api.title}</h1></CardTitle>

              <CardDescription>
                
                <p className="text-gray-400"> {api.description}</p>
              </CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </main>
  );
}