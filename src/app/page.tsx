import HeroSection from "@/components/home/HeroSection";
import StudioTypes from "@/components/home/StudioTypes";
import CommunitySection from "@/components/home/CommunitySection";
import LocationsPreview from "@/components/home/LocationsPreview";
import EventsPreview from "@/components/home/EventsPreview";
import MembershipPreview from "@/components/home/MembershipPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StudioTypes />
      <CommunitySection />
      <LocationsPreview />
      <EventsPreview />
      <MembershipPreview />
    </>
  );
}
