import { Card, CardCluster } from "@/components/card";

const mutedText = "text-neutral-600 dark:text-neutral-400";
const cardContent = "relative z-10 flex h-full flex-col";
const agentSupportActions = [
  "Answer questions",
  "Find useful resources",
  "Explore faster workflows",
  "Thinking together about faster ways to ship",
];

export function InspireGrid({ color }: { color: string }) {
  return (
    <CardCluster>
      <Card color={color} className="md:row-span-2">
        <div className={cardContent}>
          <Card.MainText>
            Helping engineers{" "}
            <span className="text-blue-500 font-bold">understand the why</span>.
          </Card.MainText>
          <p className={`${mutedText} mt-5 leading-relaxed`}>
            I share new concepts and help engineers connect them to the problems
            in front of them.
          </p>
          <ol
            role="list"
            aria-label="Working through a problem together"
            className="my-10 flex flex-1 flex-col justify-center gap-3"
          >
            <li>
              <div className="w-fit rounded-lg border border-neutral-300 px-5 py-4 dark:border-neutral-700">
                An engineer gets stuck
              </div>
              <span
                aria-hidden="true"
                className="ml-8 mt-3 block text-blue-500"
              >
                ↓
              </span>
            </li>
            <li className="ml-4 sm:ml-8">
              <div className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-5 py-5">
                <p className="text-xl text-blue-500">
                  Explore the concept together
                </p>
                <p className={`${mutedText} mt-2 text-sm`}>
                  Make room for the “why”.
                </p>
              </div>
              <span
                aria-hidden="true"
                className="ml-12 mt-3 block text-blue-500 sm:ml-8"
              >
                ↓
              </span>
            </li>
            <li className="ml-8 rounded-lg border border-neutral-300 px-5 py-4 dark:border-neutral-700 sm:ml-16">
              Something to take into the next problem
            </li>
          </ol>
        </div>
      </Card>
      <Card color={color}>
        <div className={cardContent}>
          <Card.MainText>
            Sharing knowledge through{" "}
            <span className="text-blue-500 font-bold">public speaking</span>.
          </Card.MainText>
          <div className="mt-5 flex items-center justify-between gap-4 rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-blue-500">
                Past talk · Flutter Holland
              </p>
              <p className="mt-2 text-xl leading-snug">
                Turborepo <span className={mutedText}>for Flutter</span>
              </p>
            </div>
            <div aria-hidden="true" className="flex shrink-0 items-end gap-1">
              {[3, 6, 4, 8, 5, 10, 6, 4].map((height, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-blue-500/60"
                  style={{ height: height * 2.5 }}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card color={color}>
        <div className={cardContent}>
          <Card.MainText>
            Helping engineers{" "}
            <span className="text-blue-500 font-bold">ship with agents</span>.
          </Card.MainText>
          <div className="mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 font-bold text-blue-500"
            >
              AI
            </span>
            <div>
              <p className="font-semibold text-blue-500">AI Hero</p>
              <p className={`text-xs ${mutedText}`}>
                Matt Pocock’s Discord community
              </p>
            </div>
          </div>
          <ol
            role="list"
            aria-label="Ways I help engineers work with agents"
            className="my-6 space-y-4"
          >
            {agentSupportActions.map((action, index) => (
              <li key={action} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="w-[2ch] shrink-0 font-mono text-blue-500"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`${mutedText} min-w-0`}>{action}</span>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </CardCluster>
  );
}
