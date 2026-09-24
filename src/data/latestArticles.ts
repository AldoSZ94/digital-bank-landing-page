import imgConfetti from "../assets/img/image-confetti.jpg";
import imgCurrency from "../assets/img/image-currency.jpg";
import imgPlane from "../assets/img/image-plane.jpg";
import imgRestaurant from "../assets/img/image-restaurant.jpg";

interface Article {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
  href: string;
  alt: string;
}

export const articles: Article[] = [
  {
    id: 1,
    imgUrl: imgCurrency,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    href: "#",
    alt: "Different currencies.",
  },
  {
    id: 2,
    imgUrl: imgRestaurant,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    href: "#",
    alt: "Person dining at a restaurant",
  },
  {
    id: 3,
    imgUrl: imgPlane,
    author: "Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even...",
    href: "#",
    alt: "View of an airplane wing",
  },
  {
    id: 4,
    imgUrl: imgConfetti,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through...",
    href: "#",
    alt: "Colorful confetti falling",
  },
];
