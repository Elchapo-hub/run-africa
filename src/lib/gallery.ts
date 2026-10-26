const photoUrls = Object.entries(
  import.meta.glob<string>("@/assets/WhatsApp Image*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));

const stories = [
  ["A welcome above Morogoro", "Take in the green highlands and find a slower pace on a Morogoro escape."],
  ["A view worth the climb", "Pause at the viewpoint and take in the hills stretching across the horizon."],
  ["A glimpse of local life", "Explore the places and traditions that make every route feel connected to Tanzania."],
  ["Meet the people behind the journey", "Our local team brings care, knowledge and a warm welcome to every outing."],
  ["Good company on the way", "Shared moments with our guests are part of what makes a trip memorable."],
  ["A giraffe encounter", "Enjoy a close look at the wildlife and landscapes found along the way."],
  ["A night under canvas", "Settle into camp and enjoy the quiet of the outdoors after a day exploring."],
  ["Run Africa on the road", "A happy group setting off together for a day of discovery."],
  ["Creative moments outdoors", "Make time for a hands-on activity and a change of pace in the fresh air."],
  ["Golden hour in the hills", "A calm evening outdoors as the light settles over the highlands."],
  ["A refreshing waterfall stop", "Follow the trail through green forest to a cool waterfall hideaway."],
  ["The highlands from above", "Look out across the hills and valleys from a scenic mountain viewpoint."],
  ["The Run Africa crew", "A team photo beside the tour vehicle before the next leg of the journey."],
  ["A day out together", "Travel with friends, family or a group and enjoy the stops along the way."],
  ["Celebrating the summit", "A group marks the final stretch of a rewarding mountain hike."],
  ["Kisasa Waterfalls", "Discover the falls and enjoy a refreshing break in the lush Lushoto landscape."],
  ["Into the forest", "Step beneath the canopy and explore Tanzania’s beautiful green trails."],
  ["The road between places", "The journey is part of the adventure as we travel through the countryside."],
  ["A waterfall memory", "Frame a special moment together at one of the region’s beautiful falls."],
  ["A highland panorama", "A broad view across the forested slopes and open sky."],
  ["A warm welcome", "Meet the people who make each Run Africa outing feel personal."],
  ["A forest trail together", "Take an easy pace through the shade and enjoy the company along the trail."],
  ["At the falls", "Take a closer look at the water, rocks and green surroundings of Kisasa."],
  ["Feel the spray", "A refreshing waterfall stop brings a little adventure to the day."],
  ["Friends on the trail", "A shared day outdoors, surrounded by the green highlands."],
  ["Ready to set off", "Get together and start the next Tanzania adventure with Run Africa."],
  ["A group trip begins", "There is room for everyone on a day out exploring together."],
  ["Follow the waterfall sign", "A trail marker points the way to the falls and the next discovery."],
  ["A taste of the region", "Enjoy the simple pleasure of discovering local produce along the way."],
] as const;

export type GalleryPhoto = {
  id: string;
  src: string;
  title: string;
  description: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = photoUrls.map(([, src], index) => {
  const [title, description] = stories[index] ?? ["A moment in Tanzania", "Discover more of Tanzania with Run Africa."];
  return {
    id: String(index + 1),
    src,
    title,
    description,
    alt: title,
  };
});

export const featuredGalleryPhotoIds = ["8", "11", "12", "15", "16", "17", "24", "25"];

export function getGalleryPhoto(id: string) {
  return galleryPhotos.find((photo) => photo.id === id);
}
