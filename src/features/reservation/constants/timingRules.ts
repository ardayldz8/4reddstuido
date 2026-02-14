export type PackageTimingRule = {
  mode: "full-day" | "half-day";
  slots: string[];
  fixedSlot?: string;
};

export const packageTimingRules: Record<string, PackageTimingRule> = {
  "studio-full-day": {
    mode: "full-day",
    fixedSlot: "10:00 - 18:00",
    slots: ["10:00 - 18:00"],
  },
  "studio-half-day": {
    mode: "half-day",
    slots: ["09:00 - 13:00", "13:00 - 17:00", "Ozel saat talebi"],
  },
};
