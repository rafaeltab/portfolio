import { ProgressBulbs } from "./progressBulbs";

export function ProgressCard(props: {
  progress: 1 | 2 | 3 | 4 | 5;
  text: string;
}) {
  return (
    <div className="m-2 p-4 dark:bg-neutral-900 bg-neutral-100 rounded-md flex justify-between hover:scale-105 transition-transform duration-75">
      <h3 className="font-semibold">{props.text}</h3>
      <ProgressBulbs
        color="bg-red-500"
        borderColor="border-red-500"
        progress={props.progress}
      />
    </div>
  );
}
