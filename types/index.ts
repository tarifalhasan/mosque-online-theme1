import { StaticImageData } from "next/image";

export type NamajTime = {
  name: string;
  id: number | string;
  Begins: string;
  Iqamah: string;
};

export type PillarsOfIslamType = {
  name: string;
  id: number | string;
  icon: any;
  surname: string;
};

export interface BlogCardProps {
  title: string;
  date: string;
  image: StaticImageData;
  description: string;
  link?: string;
  authorImage?: string;
  authorLink?: string;
  authorName: string;
  authorDescription?: string;
  authorImageAlt?: string;
}

export interface EventsCardTypes {
  title: string;
  month: string;
  day: string;
  location: string;
  slug?: string;
  authorName?: string;
  backgroundImage?: string | null;
}
