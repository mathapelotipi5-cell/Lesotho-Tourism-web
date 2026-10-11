import afriskiImage from "../assets/afriski.jpg";
import bokongImage from "../assets/bokong-nature-reserve.jpg";
import katseDamImage from "../assets/katse-dam5.jpg";
import liphofungImage from "../assets/liphofung-cave1.jpg";
import maletsunyaneImage from "../assets/maletsunyane-waterfall.jpg";
import saniPassImage from "../assets/Sani pass.jpg";
import sehlabathebeImage from "../assets/Sehlabathebe-National-Park.jpg";
import thabaBosiuImage from "../assets/thaba-bosiu-cultural (1).jpg";

const attractions = [
  {
    id: 1,
    name: "Maletsunyane Waterfalls",
    location: "Semonkong, Maseru District",
    category: "Nature",
    image: maletsunyaneImage,
    description:
      "A dramatic 192-metre single-drop waterfall plunging into a basalt gorge in the heart of the highlands.",
    activities: ["Abseiling", "Sightseeing", "Pony Trekking"],
    cost: "From M50 per person"
  },
  {
    id: 2,
    name: "Thaba-Bosiu Cultural Village",
    location: "Thaba-Bosiu, Maseru District",
    category: "Culture",
    image: thabaBosiuImage,
    description:
      "An historic mountain fortress established by King Moshoeshoe I, serving as the birthplace of the Basotho nation.",
    activities: ["Guided Heritage Tours", "Museum Visits", "Traditional Dance"],
    cost: "From M80 per person"
  },
  {
    id: 3,
    name: "Katse Dam",
    location: "Bokong, Thaba-Tseka District",
    category: "Adventure",
    image: katseDamImage,
    description:
      "An immense arch dam set among the Maluti Mountains, forming a major reservoir of the Lesotho Highlands Water Project.",
    activities: ["Dam Wall Tours", "Boat Cruises", "Scenic Photography"],
    cost: "From M60 per person"
  },
  {
    id: 4,
    name: "Liphofung Caves",
    location: "Butha-Buthe District",
    category: "Historical",
    image: liphofungImage,
    description:
      "A historic sandstone shelter containing ancient San rock paintings and heritage displays detailing highland traditions.",
    activities: ["Rock Art Viewing", "Heritage Centre Tour", "Guided Walks"],
    cost: "From M40 per person"
  },
  {
    id: 5,
    name: "Bokong Nature Reserve",
    location: "Leribe District",
    category: "Nature",
    image: bokongImage,
    description:
      "A high-altitude wetland sanctuary offering sweeping views of the Lepaqoa Valley and habitat for bearded vultures.",
    activities: ["Hiking", "Birdwatching", "Picnicking"],
    cost: "From M50 per person"
  },
  {
    id: 6,
    name: "Sani Pass",
    location: "Eastern Lesotho Border",
    category: "Adventure",
    image: saniPassImage,
    description:
      "A mountain pass linking Lesotho to South Africa, famous for its dramatic switchbacks and scenic alpine views.",
    activities: ["4x4 Drives", "Mountain Biking", "Photography"],
    cost: "From M50 per person"
  },
  {
    id: 7,
    name: "Sehlabathebe National Park",
    location: "Qacha's Nek District",
    category: "Nature",
    image: sehlabathebeImage,
    description:
      "Lesotho's first national park, featuring sandstone arches, alpine rock pools, and rare high-altitude flora.",
    activities: ["Horse Riding", "Camping", "Rock Art Walks"],
    cost: "From M100 per person"
  },
  {
    id: 8,
    name: "Afriski Mountain Resort",
    location: "Mahlasela Pass, Butha-Buthe District",
    category: "Adventure",
    image: afriskiImage,
    description:
      "A high-altitude resort offering winter snow skiing and snowboarding alongside year-round mountain outdoor sports.",
    activities: ["Skiing", "Snowboarding", "Mountain Biking"],
    cost: "Activities from M250"
  }
];

export default attractions;