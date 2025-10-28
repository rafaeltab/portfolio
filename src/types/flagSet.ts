import { LDFlagSet, useFlags } from "launchdarkly-react-client-sdk";

export const useFeatureFlags = useFlags<FlagSet>;
export type FlagSet = MustExtend<
  {
    techPage?: boolean;
    timelinePage?: boolean;
    projectsPage?: boolean;
    homeLearnCluster?: boolean;
    homePracticeCluster?: boolean;
    homeInspireCluster?: boolean;
  },
  LDFlagSet
>;

export type MustExtend<A, T> = A extends T ? A : never;
