import Image from "next/image";
import { HiArrowDown, HiArrowRight } from "react-icons/hi2";
import { Button } from "@/components/Button";
import s from "./heroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.container}>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet, consectetur. Vestibulum fringilla est in
        mauris auctor,
      </p>
      <div className={s.titleRow}>
        <h1 className={s.title}>Tell Big Tails</h1>
        <Image
          src="/images/hero/hero-image.png"
          alt="Big Tails"
          width={600}
          height={400}
          className={s.image}
        />
      </div>
      <div className={s.links}>
        <Button variant="outline" color="orange" iconRight={<HiArrowRight />}>
          Learn more
        </Button>
        <Button variant="underline" color="dark">
          Contact us
        </Button>
      </div>
      <div className={s.scrollIndicator}>
        <HiArrowDown size={21} />
      </div>
    </section>
  );
};

export default HeroSection;
