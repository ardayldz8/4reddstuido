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
  packagePrice: number,
  selectedExtraItems: PricingItem[]
) {
  return packagePrice + selectedExtraItems.reduce((sum, item) => sum + item.price, 0);
}

export function calculatePackagePrice(params: {
  selectedPackage: PricingItem | undefined,
  selectedPackageTiming: PackageTimingRule,
  hourCount: number,
}) {
  const { selectedPackage, selectedPackageTiming, hourCount } = params;
  const basePrice = selectedPackage?.price ?? 0;

  if (selectedPackageTiming.mode === "hourly") {
    return basePrice * hourCount;
  }

  return basePrice;
}

export function buildWhatsappMessage(params: {
  selectedPackage?: PricingItem;
  selectedPackageTiming: PackageTimingRule;
  packagePrice: number;
  hourCount: number;
  selectedExtraItems: PricingItem[];
  totalPrice: number;
  formValues: {
    name: string;
    phone: string;
    email: string;
    date: string;
    timeSlot: string;
    hourCount: string;
    projectType: string;
    note: string;
  };
}) {
  const {
    selectedPackage,
    selectedPackageTiming,
    packagePrice,
    hourCount,
    selectedExtraItems,
    totalPrice,
    formValues,
  } = params;

  return [
    "Merhaba REDD Studio, rezervasyon talebi oluşturmak istiyorum.",
    "",
    `Paket: ${selectedPackage?.title ?? "Seçilmedi"}`,
    selectedPackageTiming.mode === "hourly"
      ? `Saatlik Ücret: ${formatCurrency(selectedPackage?.price ?? 0)} x ${hourCount} saat = ${formatCurrency(packagePrice)}`
      : `Paket Ücreti: ${formatCurrency(packagePrice)}`,
    `Tarih: ${formValues.date || "Belirtilmedi"}`,
    `Saat Aralığı: ${
      selectedPackageTiming.mode === "full-day"
        ? `Tam Gun (${selectedPackageTiming.fixedSlot ?? "10:00 - 20:00"})`
        : formValues.timeSlot || "Belirtilmedi"
    }`,
    `Proje Türü: ${formValues.projectType || "Belirtilmedi"}`,
    `Kiralık Ek Ekipmanlar: ${
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
