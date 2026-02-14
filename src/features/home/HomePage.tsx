"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CameraAltRounded from "@mui/icons-material/CameraAltRounded";
import ViewInArRounded from "@mui/icons-material/ViewInArRounded";
import LightModeRounded from "@mui/icons-material/LightModeRounded";
import ScheduleRounded from "@mui/icons-material/ScheduleRounded";
import PlaceRounded from "@mui/icons-material/PlaceRounded";
import Groups2Rounded from "@mui/icons-material/Groups2Rounded";
import BoltRounded from "@mui/icons-material/BoltRounded";
import { reddTheme } from "@/styles/muiTheme";

const sectionSpacing = { xs: 6, md: 9 };

const surfaceSx = {
  border: "1px solid rgba(255,255,255,0.12)",
  bgcolor: "rgba(255,255,255,0.02)",
  backdropFilter: "blur(6px)",
};

const services = [
  {
    icon: CameraAltRounded,
    title: "Fotoğraf ve Video Prodüksiyon",
    benefit: "Kreatif ekibiniz için tek bir günde birden fazla set çıktısı üretin.",
    detail:
      "Kontrollü ışık, profesyonel ekipman ve farklı çekim senaryolarına uyumlu esnek kurulum.",
  },
  {
    icon: ViewInArRounded,
    title: "Yaratıcı İçerik Alanı",
    benefit: "Marka dilinize uygun görsel atmosferi hızlıca yakalayın.",
    detail:
      "Kampanya, reels, ürün ve portre çekimleri için güçlü bir yaratıcı altyapı.",
  },
  {
    icon: ScheduleRounded,
    title: "Esnek Rezervasyon",
    benefit: "Çekim planınızı yarım gün veya tam gün modeline göre optimize edin.",
    detail:
      "Net fiyatlandırma, hızlı teklif süreci ve operasyonu aksatmayan rezervasyon akışı.",
  },
  {
    icon: PlaceRounded,
    title: "Merkezi Konum",
    benefit: "Ekip lojistiğini kolaylaştırarak set gününde zaman kazanın.",
    detail:
      "Ulaşımı pratik lokasyon sayesinde ekipman, ekip ve planlama süreçleri rahat ilerler.",
  },
];

const audiences = [
  {
    title: "İçerik Üreticileri",
    text: "Daha tutarlı kaliteyle daha hızlı içerik üretmek isteyen bireysel ekipler.",
  },
  {
    title: "Markalar ve Ajanslar",
    text: "Kampanya takvimine uygun, güvenilir ve düzenli prodüksiyon akışı arayan ekipler.",
  },
  {
    title: "Fotoğrafçılar ve Film Ekipleri",
    text: "Işık kontrolü ve set esnekliği gerektiren profesyonel çekim operasyonları.",
  },
  {
    title: "Sosyal Medya Ekipleri",
    text: "Kısa format içeriklerde seri üretim ve güçlü görsel tutarlılık hedefleyen markalar.",
  },
];

const trustItems = [
  {
    icon: Groups2Rounded,
    title: "Ekip Dostu Akış",
    text: "Ajans, marka ve creator ekiplerinin birlikte çalışmasına uygun set düzeni.",
  },
  {
    icon: BoltRounded,
    title: "Hızlı Planlama",
    text: "Uygun gün, paket ve ihtiyaçları kısa sürede netleştiren rezervasyon süreci.",
  },
  {
    icon: LightModeRounded,
    title: "Tutarlı Kalite",
    text: "Işık, açı ve ekipman tarafında çekim gününü daha öngörülebilir hale getirir.",
  },
];

export default function HomePage() {
  return (
    <ThemeProvider theme={reddTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "radial-gradient(900px 420px at 8% -5%, rgba(255,70,70,0.16), transparent 60%), radial-gradient(900px 420px at 100% 12%, rgba(130,0,0,0.14), transparent 60%), #060607",
          pb: 8,
        }}
      >
        <Box
          sx={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/hero/hero-studio.jpg"
            alt="REDD Studio hero background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 48%" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,40,40,0.14) 0%, rgba(7,7,7,0.2) 42%, rgba(7,7,7,0.8) 100%), linear-gradient(to bottom, rgba(7,7,7,0.58), rgba(7,7,7,0.88))",
            }}
          />
          <Container
            maxWidth={false}
            sx={{
              maxWidth: 1240,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              py: { xs: 9, md: 11 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Stack
              alignItems="center"
              textAlign="center"
              spacing={{ xs: 2.5, md: 3 }}
              sx={{ width: "100%", maxWidth: 920 }}
            >
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Box
                  component="img"
                  src="/brand/redd-logo.svg"
                  alt="REDD Studio Logo"
                  sx={{
                    width: { xs: 560, sm: 700, md: 820 },
                    height: { xs: 320, sm: 390, md: 460 },
                    objectFit: "contain",
                    clipPath: "inset(26% 28% 26% 28%)",
                    opacity: 0.98,
                    filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.48))",
                    mb: { xs: -9, md: -11 },
                  }}
                />
              </Box>

              <Typography
                sx={{
                  maxWidth: 740,
                  color: "rgba(255,255,255,0.92)",
                  fontSize: { xs: 17, md: 27 },
                  lineHeight: { xs: 1.45, md: 1.28 },
                }}
              >
                İçerik üreticileri, markalar ve ekip çekimleri için tasarlanmış profesyonel stüdyo deneyimi.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ pt: 1.5, width: { xs: "100%", sm: "auto" } }}
              >
                <Button
                  component={Link}
                  href="/rezervasyon"
                  variant="contained"
                  size="large"
                  sx={{ px: 4.5, py: 1.35, fontWeight: 700, minWidth: 230 }}
                >
                  Rezervasyon Yap
                </Button>
                <Button
                  component={Link}
                  href="/tour"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.3,
                    fontWeight: 700,
                    borderColor: "rgba(255,255,255,0.34)",
                    color: "white",
                    minWidth: 230,
                  }}
                >
                  360 Sanal Tur
                </Button>
              </Stack>

              <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.66)" }}>
                Hızlı talep oluştur, çekim gününü aynı gün netleştir.
              </Typography>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth={false} sx={{ maxWidth: 1240, mt: sectionSpacing }}>
          <Stack spacing={1} sx={{ mb: 3.5, textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 50 } }}>
              Neler <Box component="span" sx={{ color: "primary.main" }}>Sunuyoruz</Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 780, mx: "auto" }}>
              Sadece alan değil; planlama, hız ve görsel kaliteyi aynı üretim akışında birleştiren bir stüdyo deneyimi.
            </Typography>
          </Stack>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  variant="outlined"
                  sx={{ borderColor: "rgba(255,255,255,0.14)", bgcolor: "rgba(255,255,255,0.02)" }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 1 }}>
                      <Icon sx={{ color: "primary.main" }} />
                      <Typography variant="h3" sx={{ fontSize: { xs: 22, md: 26 } }}>
                        {service.title}
                      </Typography>
                    </Stack>
                    <Typography sx={{ color: "rgba(255,255,255,0.92)", fontWeight: 500 }}>
                      {service.benefit}
                    </Typography>
                    <Typography sx={{ mt: 1, color: "text.secondary" }}>{service.detail}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          <Card sx={{ mt: sectionSpacing, ...surfaceSx }}>
            <CardContent
              sx={{
                p: { xs: 3, md: 4 },
                display: "grid",
                gap: 2.5,
                gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 46 }, lineHeight: 1.06 }}>
                  Stüdyoyu <Box component="span" sx={{ color: "primary.main" }}>360°</Box> keşfet
                </Typography>
                <Typography sx={{ mt: 1.2, color: "text.secondary", maxWidth: 560 }}>
                  Çekim gününden önce alanı gez, kadrajlarını planla ve ekip operasyonunu hızlandır.
                </Typography>
                <Stack spacing={0.8} sx={{ mt: 1.8 }}>
                  <Typography sx={{ color: "rgba(255,255,255,0.88)", fontSize: 14 }}>
                    - Set kurulumu öncesi açıları belirle
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.88)", fontSize: 14 }}>
                    - Ekip görev dağılımını çekimden önce netleştir
                  </Typography>
                </Stack>
                <Button component={Link} href="/tour" variant="contained" sx={{ mt: 2.4, fontWeight: 700 }}>
                  Sanal Turu Başlat
                </Button>
              </Box>

              <Card
                component={Link}
                href="/tour"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.14)",
                  overflow: "hidden",
                  minHeight: { xs: 220, md: 290 },
                  textDecoration: "none",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.38), rgba(0,0,0,0.72)), url('/tour/thumbnails/node4.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Stack spacing={1} alignItems="center">
                  <ViewInArRounded sx={{ fontSize: 42, color: "rgba(255,255,255,0.95)" }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.96)", fontWeight: 600 }}>
                    360 Tur Önizleme
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.74)", fontSize: 13 }}>
                    Tıkla ve stüdyoyu gez
                  </Typography>
                </Stack>
              </Card>
            </CardContent>
          </Card>

          <Box sx={{ mt: sectionSpacing, textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 50 } }}>
              <Box component="span" sx={{ color: "primary.main" }}>Sizin</Box> için tasarlandı
            </Typography>
            <Typography sx={{ mt: 1.2, color: "text.secondary", maxWidth: 760, mx: "auto" }}>
              Farklı üretim ekipleri için aynı çatı altında hız, kalite ve operasyonel kolaylık sunar.
            </Typography>

            <Box
              sx={{
                mt: 2.8,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {audiences.map((item) => (
                <Card key={item.title} sx={{ ...surfaceSx, textAlign: "left" }}>
                  <CardContent>
                    <Typography sx={{ fontWeight: 700, fontSize: 18 }}>{item.title}</Typography>
                    <Typography sx={{ mt: 0.8, color: "text.secondary" }}>{item.text}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: sectionSpacing, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 2 }}>
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} sx={surfaceSx}>
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Icon sx={{ color: "primary.main" }} />
                      <Typography sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    </Stack>
                    <Typography sx={{ mt: 1, color: "text.secondary" }}>{item.text}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          <Card sx={{ mt: sectionSpacing, textAlign: "center", ...surfaceSx }}>
            <CardContent sx={{ py: { xs: 5, md: 7 } }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 58 }, lineHeight: 1.04 }}>
                <Box component="span" sx={{ color: "primary.main" }}>Cesur</Box> bir şey yaratmaya hazır mısın?
              </Typography>
              <Typography sx={{ mt: 1.2, color: "text.secondary" }}>
                Uygun günü şimdi ayır, ekibinle çekim planını bugün netleştir.
              </Typography>
              <Button
                component={Link}
                href="/rezervasyon"
                variant="contained"
                size="large"
                sx={{ mt: 2.6, px: 4.5, py: 1.3, fontWeight: 700 }}
              >
                Seansını Ayırt
              </Button>
            </CardContent>
          </Card>

          <Box
            sx={{
              mt: 4,
              py: 2.4,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>
              <Box component="span" sx={{ color: "primary.main" }}>REDD</Box> Studio
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <LightModeRounded sx={{ fontSize: 16, color: "rgba(255,255,255,0.72)" }} />
              <Typography variant="body2" color="text.secondary">
                Cesur ol. REDD çek.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
