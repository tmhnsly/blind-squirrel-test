import Image from "next/image";
import { HiArrowDown, HiArrowRight } from "react-icons/hi2";
import { Button } from "@/components/Button";
import s from "./heroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.container}>
      {/* Swoosh 1: bold middle */}
      <Image
        className={`${s.swoosh} ${s.swooshBold} ${s.swooshMobile}`}
        src="/images/swooshes/bold-mobile.svg"
        alt=""
        width={1080}
        height={800}
        aria-hidden
      />
      <Image
        className={`${s.swoosh} ${s.swooshBold} ${s.swooshDesktop}`}
        src="/images/swooshes/bold-middle.svg"
        alt=""
        width={1920}
        height={800}
        aria-hidden
      />
      {/* Swoosh: muted upper */}
      <Image
        className={`${s.swoosh} ${s.swooshMutedUpper} ${s.swooshMobile}`}
        src="/images/swooshes/muted-upper-mobile.svg"
        alt=""
        width={500}
        height={300}
        aria-hidden
      />
      <Image
        className={`${s.swoosh} ${s.swooshMutedUpper} ${s.swooshDesktop}`}
        src="/images/swooshes/muted-upper-desktop.svg"
        alt=""
        width={500}
        height={300}
        aria-hidden
      />
      {/* Swoosh: muted lower */}
      <Image
        className={`${s.swoosh} ${s.swooshMutedLower} ${s.swooshMobile}`}
        src="/images/swooshes/muted-lower-mobile.svg"
        alt=""
        width={500}
        height={300}
        aria-hidden
      />
      <Image
        className={`${s.swoosh} ${s.swooshMutedLower} ${s.swooshDesktop}`}
        src="/images/swooshes/muted-lower-desktop.svg"
        alt=""
        width={500}
        height={300}
        aria-hidden
      />
      <p className={s.subtitle} data-fade>
        Lorem ipsum dolor sit amet, consectetur. Vestibulum fringilla est in
        mauris auctor,
      </p>
      <div className={s.titleRow}>
        <h1 className={s.title}>
          <span className={`${s.word} ${s.wordTell}`}>
            <span className={s.wordInner} data-heading-word>
              Tell
            </span>
          </span>{" "}
          <span className={`${s.word} ${s.wordBig}`}>
            <span className={s.wordInner} data-heading-word>
              Big
            </span>
          </span>{" "}
          <span className={`${s.word} ${s.wordTails}`}>
            <span className={s.wordInner} data-heading-word>
              Tails
            </span>
          </span>
        </h1>
        <div className={s.imageCard} data-image-card>
          <Image
            src="/images/hero/hero-image.png"
            alt="Big Tails"
            width={600}
            height={400}
            className={s.image}
          />
          <div className={s.imageCover} data-image-cover />
        </div>
      </div>
      <div className={s.links} data-fade>
        <Button variant="outline" color="orange" iconRight={<HiArrowRight />}>
          Learn more
        </Button>
        <Button variant="underline" color="dark">
          Contact us
        </Button>
      </div>
      <div className={s.scrollIndicator} data-fade>
        <HiArrowDown className={s.scrollIndicatorIcon} />
      </div>
    </section>
  );
};

export default HeroSection;
