import imgApi from "../assets/img/icon-api.svg";
import imgBudgeting from "../assets/img/icon-budgeting.svg";
import imgOnboarding from "../assets/img/icon-onboarding.svg";
import imgOnline from "../assets/img/icon-online.svg";

export interface FeatureItem {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
}

export const features: FeatureItem[] = [
  {
    id: 1,
    iconUrl: imgOnline,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 2,
    iconUrl: imgBudgeting,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    id: 3,
    iconUrl: imgOnboarding,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 4,
    iconUrl: imgApi,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
