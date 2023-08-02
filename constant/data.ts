import {
  Pilgrimage,
  Salah,
  Sawm,
  Shahadah,
  Zakat,
  blogimg1,
  blogimg2,
} from "@/assets/images";
import {
  BlogCardProps,
  EventsCardTypes,
  NamajTime,
  PillarsOfIslamType,
} from "@/types";

export const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Pillars of Islam ",
    href: "#Pillars_of_Islam ",
  },
  {
    name: "Even & Blog",
    href: "#Even_&_Blog ",
  },
  {
    name: "Gallery",
    href: "#gallery ",
  },
  {
    name: "Contact",
    href: "#contact ",
  },
];

export const NamazTimeingsData: NamajTime[] = [
  {
    name: "FAJR",
    Begins: "6:10 AM",
    Iqamah: "7:00 AM",
    id: 1,
  },
  {
    name: "ZUHR",
    Begins: "11:58 AM",
    Iqamah: "1:30 AM",
    id: 2,
  },
  {
    name: "ASR",
    Begins: "2:10 AM",
    Iqamah: "3:00 AM",
    id: 3,
  },
  {
    name: "FAJR",
    Begins: "3:55 AM",
    Iqamah: "3:55 AM",
    id: 4,
  },
  {
    name: "ISHA",
    Begins: "5:31 AM",
    Iqamah: "8:00 AM",
    id: 5,
  },
  {
    name: "JUMMAH",
    Begins: "12:30 AM",
    Iqamah: "01:30 AM",
    id: 5,
  },
];

export const PillarsOfIslamData: PillarsOfIslamType[] = [
  {
    name: "Shahadah",
    surname: "Faith",
    id: 1,
    icon: Shahadah,
  },
  {
    name: "Salah",
    surname: "Prayer",
    id: 2,
    icon: Salah,
  },
  {
    name: "Sawn",
    surname: "Fasting",
    id: 3,
    icon: Sawm,
  },
  {
    name: "Zakat",
    surname: "Almsgiving",
    id: 4,
    icon: Zakat,
  },
  {
    name: "Pilgrimage",
    surname: "Pilgrimage",
    id: 5,
    icon: Pilgrimage,
  },
];

export const BlogsData: BlogCardProps[] = [
  {
    image: blogimg1,
    title: "Is Islam Old Philosophy?",
    authorName: "Imam Ullah",
    date: "jan 6, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    image: blogimg2,
    title: "Importance Of Namaz",
    authorName: "Imam Ullah",
    date: "jan 8, 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

export const EventsData: EventsCardTypes[] = [
  {
    title: "Is Islam Old Philosophy?",
    month: "Jan",
    day: "15",
    location: "Park Lane, London",
    authorName: "Imam Ullah",
    backgroundImage: "/img/events.png",
  },
  {
    title: "Is Islam Old Philosophy?",
    month: "Jan",
    day: "22",
    location: "Park Lane, London",
    authorName: "Imam Ullah",
    backgroundImage: null,
  },
  {
    title: "Is Islam Old Philosophy?",
    month: "Jan",
    day: "28",
    location: "Park Lane, London",
    authorName: "Imam Ullah",
    backgroundImage: null,
  },
];
