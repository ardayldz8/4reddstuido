export type PackageTimingRule = {
  mode: "full-day" | "half-day" | "hourly";
  slots: string[];
  fixedSlot?: string;
};

export const packageTimingRules: Record<string, PackageTimingRule> = {
  "studio-full-day": {
    mode: "full-day",
    fixedSlot: "10:00 - 20:00",
    slots: ["10:00 - 20:00"],
  },
  "studio-half-day": {
    mode: "half-day",
    slots: ["09:00 - 14:00", "15:00 - 20:00"],
  },
  "studio-hourly": {
    mode: "hourly",
    slots: [],
  },
};
