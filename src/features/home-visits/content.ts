// Change these values when the GeoIP suggestion and final photography are supplied.
export const homeVisitLocation = {
  name: "Berchem",
  otherLocationCount: 16,
};

export const homeVisitServices = [
  {
    id: "hoortest",
    title: "Hoortest en persoonlijk advies",
    description:
      "We onderzoeken uw gehoor en bespreken wat u in het dagelijks leven graag beter wilt horen.",
    image: {
      src: "https://cdn.oogvoororen.nl/MFFSwTgW7xbsf2gcxH0UokxMywsFI72s4Mx9KKSB-800.webp",
      alt: "Voorbeeldfoto: gehooronderzoek en persoonlijk advies",
      position: "center",
    },
  },
  {
    id: "hoorapparaten-vergelijken",
    title: "Hoorapparaten vergelijken",
    description:
      "We bespreken de verschillen tussen merken en modellen en kiezen samen het hoorapparaat dat het beste bij u past.",
    image: {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
      alt: "Voorbeeldfoto: persoonlijk overleg over de mogelijkheden",
      position: "center",
    },
  },
  {
    id: "bijstellingen-en-nazorg",
    title: "Bijstellingen en nazorg",
    description:
      "Na aanschaf bij Oogvoororen verzorgen we ook bijstellingen, opvolging en nazorg. Voor kleine onderhoudshandelingen hoeft de audicien niet aan huis te komen.",
    image: {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
      alt: "Voorbeeldfoto: deskundige begeleiding en nazorg",
      position: "center 30%",
    },
  },
] as const;
