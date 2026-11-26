// Change these values when the GeoIP suggestion is supplied.
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
      src: "/images/audicien-aan-huis/hoortest-aan-tafel.webp",
      alt: "Audioloog neemt aan tafel een hoortest af",
      position: "center",
    },
  },
  {
    id: "hoorapparaten-vergelijken",
    title: "Hoorapparaten vergelijken",
    description:
      "We bespreken de verschillen tussen merken en modellen en kiezen samen het hoorapparaat dat het beste bij u past.",
    image: {
      src: "/images/audicien-aan-huis/hoorapparaat-bekijken.webp",
      alt: "Audioloog toont een hoorapparaat aan een klant",
      position: "center",
    },
  },
  {
    id: "bijstellingen-en-nazorg",
    title: "Bijstellingen en nazorg",
    description:
      "Na aankoop bij Oogvoororen kunnen we uw hoorapparaten thuis bijstellen en verzorgen we ook de verdere nazorg.",
    image: {
      src: "/images/audicien-aan-huis/hoorapparaat-bijstellen.webp",
      alt: "Audioloog plaatst een hoorapparaat achter het oor van een klant",
      position: "center",
    },
  },
] as const;
