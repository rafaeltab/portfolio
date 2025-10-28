import { FlagSet, useFeatureFlags } from "@/types/flagSet";
import React from "react";

export function FeatureFlagged(
  props: { flag: keyof FlagSet; default?: boolean } & React.PropsWithChildren,
) {
  const flags = useFeatureFlags();
  const flag = flags[props.flag] ?? props.default;

  if (flag == true) {
    return props.children;
  }

  return <></>;
}
