import { createContext, useContext, useEffect, useState } from "react";

const heroVariants = {
  learn: {
    gradient: {
      darkFrom: "dark:from-green-600",
      darkVia: "dark:via-yellow-600",
      darkTo: "dark:to-red-600",
      from: "from-green-500",
      via: "via-yellow-500",
      to: "to-red-500",
    },
  },
  practice: {
    gradient: {
      darkFrom: "dark:from-blue-600",
      darkVia: "dark:via-cyan-600",
      darkTo: "dark:to-green-600",
      from: "from-blue-500",
      via: "via-cyan-500",
      to: "to-green-500",
    },
  },
  inspire: {
    gradient: {
      darkFrom: "dark:from-red-600",
      darkVia: "dark:via-purple-600",
      darkTo: "dark:to-blue-600",
      from: "from-red-500",
      via: "via-purple-500",
      to: "to-blue-500",
    },
  },
} as const;
const variants: HeroVariant[] = Object.keys(heroVariants) as HeroVariant[];

export type HeroVariant = keyof typeof heroVariants;
const defaultContext = "learn" satisfies HeroVariant;

const HeroVariantContext = createContext<HeroVariant>(defaultContext);

export function HeroVariantProvider(props: React.PropsWithChildren) {
  const [variant, setVariant] = useState<HeroVariant>(defaultContext);
  useEffect(() => {
    const interval = setInterval(() => {
      let index = variants.indexOf(variant);
      // assert(index != -1);
      // assert(index < variants.length);
      let nextIndex = (index + 1) % variants.length;
      let nextVariant = variants[nextIndex];
      setVariant(nextVariant);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <HeroVariantContext value={variant}>{props.children}</HeroVariantContext>
  );
}

export function useHeroVariant() {
  return useContext(HeroVariantContext);
}

export function useCurrentHeroGradient() {
  const variant = useHeroVariant();
  return useHeroGradient(variant);
}

export function useHeroGradient(variant: HeroVariant) {
  return heroVariants[variant].gradient;
}

export function useHeroGradientClass(variant: HeroVariant) {
  const gradient = useHeroGradient(variant);
  return Object.values(gradient).join(" ");
}

export function useCurrentHeroGradientClass() {
  const gradient = useCurrentHeroGradient();
  return Object.values(gradient).join(" ");
}
