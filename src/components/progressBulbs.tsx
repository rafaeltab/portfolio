type Props = {
  color: string;
  borderColor: string;
  progress: number;
};

export function ProgressBulbs(props: Props) {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex gap-1">
        <li
          className={`w-3 h-3 rounded-full border-solid ${props.borderColor} border ${props.progress >= 1 ? props.color : ""}`}
        ></li>
        <li
          className={`w-3 h-3 rounded-full border-solid ${props.borderColor} border ${props.progress >= 2 ? props.color : ""}`}
        ></li>
        <li
          className={`w-3 h-3 rounded-full border-solid ${props.borderColor} border ${props.progress >= 3 ? props.color : ""}`}
        ></li>
        <li
          className={`w-3 h-3 rounded-full border-solid ${props.borderColor} border ${props.progress >= 4 ? props.color : ""}`}
        ></li>
        <li
          className={`w-3 h-3 rounded-full border-solid ${props.borderColor} border ${props.progress >= 5 ? props.color : ""}`}
        ></li>
      </ul>
    </div>
  );
}
