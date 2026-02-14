# REDD Studio Web

Next.js 16 (App Router) tabanli REDD Studio web sitesi.

## Komutlar

```bash
npm run dev
npm run lint
npm run build
```

## Klasor Yapisi

```text
src/
  app/
    page.tsx
    rezervasyon/page.tsx
    tour/page.tsx
    layout.tsx
  components/
    layout/
    tour/
    ui/
  data/
    pricing.ts
  features/
    home/
      HomePage.tsx
    reservation/
      ReservationPage.tsx
      constants/
      lib/
  styles/
    muiTheme.ts
  types/
    marzipano.d.ts
public/
  brand/
  images/hero/
  tour/
assets/raw/
```

## Mimari Kurallar

- `src/app/*`: sadece route composition ve metadata.
- `src/features/*`: ekranin asil UI ve davranis katmani.
- `src/components/*`: birden fazla feature tarafindan kullanilan ortak componentler.
- `src/data/*`: sabit veri kaynaklari (fiyat listesi gibi).
- `src/features/**/lib/*`: is kurali, hesaplama, mesaj olusturma gibi saf fonksiyonlar.
- `src/styles/muiTheme.ts`: MUI tema merkezi; tekrar eden tema tanimlari eklenmez.

## Naming ve Kod Stili

- Component dosyalari: `PascalCase.tsx`
- Utility dosyalari: `camelCase.ts`
- Tek sorumluluk: buyuk sayfalari feature componentlerine bol.
- Yeni sayfa eklerken `app` icinde wrapper, aski UI/logic `features` altinda tutulur.

## Notlar

- Ham tasarim/brief dosyalari `assets/raw/` altinda saklanir.
- Build ciktilari (`.next/`) repoya eklenmez.
