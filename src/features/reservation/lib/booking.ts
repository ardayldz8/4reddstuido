import type { PricingItem } from "@/data/pricing";
import type { PackageTimingRule } from "@/features/reservation/constants/timingRules";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getMinDate() {
  return new Date().toISOString().split("T")[0];
}

export function calculateTotal(
  selectedPackage: PricingItem | undefined,
  selectedExtraItems: PricingItem[]
) {
  return (
    (selectedPackage?.price ?? 0) +
    selectedExtraItems.reduce((sum, item) => sum + item.price, 0)
  );
}

export function buildWhatsappMessage(params: {
  selectedPackage?: PricingItem;
  selectedPackageTiming: PackageTimingRule;
  selectedExtraItems: PricingItem[];
  totalPrice: number;
  formValues: {
    name: string;
    phone: string;
    email: string;
    date: string;
    timeSlot: string;
    projectType: string;
    note: string;
  };
}) {
  const {
    selectedPackage,
    selectedPackageTiming,
    selectedExtraItems,
    totalPrice,
    formValues,
  } = params;

  return [
    "Merhaba REDD Studio, rezervasyon talebi oluşturmak istiyorum.",
    "",
    `Paket: ${selectedPackage?.title ?? "Seçilmedi"}`,
    `Tarih: ${formValues.date || "Belirtilmedi"}`,
    `Saat Aralığı: ${
      selectedPackageTiming.mode === "full-day"
        ? `Tam Gun (${selectedPackageTiming.fixedSlot ?? "10:00 - 18:00"})`
        : formValues.timeSlot || "Belirtilmedi"
    }`,
    `Proje Türü: ${formValues.projectType || "Belirtilmedi"}`,
    `Ek Ekipmanlar: ${
      selectedExtraItems.length > 0
        ? selectedExtraItems.map((item) => item.title).join(", ")
        : "Yok"
    }`,
    `Tahmini Toplam: ${formatCurrency(totalPrice)}`,
    "",
    `Ad Soyad: ${formValues.name || "Belirtilmedi"}`,
    `Telefon: ${formValues.phone || "Belirtilmedi"}`,
    `E-posta: ${formValues.email || "Belirtilmedi"}`,
    `Not: ${formValues.note || "-"}`,
  ].join("\n");
}
