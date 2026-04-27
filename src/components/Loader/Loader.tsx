import Image from "next/image";
import s from "./Loader.module.scss";

// .swooshContext below mirrors the hero section's positioning context (same
// width + padding-inline + container-type), so cqw resolves to the same px
// value as cqw inside the page's swoosh, and top: var(--nav-height) puts
// the loader's swoosh at the same screen Y as the page's. As the drawer
// slides up the screen-anchored mask reveals the page underneath → reads
// as a colour shift, not a swap. The soft-coloured SVG copies are so the
// loader can render the swoosh via <Image> exactly like the page (same
// geometry) but in --color-orange-soft instead of --color-orange.
export function Loader() {
  return (
    <div className={s.root} aria-hidden>
      <div className={s.drawer} data-loader-drawer>
        <div className={s.swooshMask} data-loader-swoosh-mask>
          <div className={s.swooshContext}>
            <Image
              className={`${s.swoosh} ${s.swooshBold} ${s.swooshMobile}`}
              src="/images/swooshes/bold-mobile-soft.svg"
              alt=""
              width={360}
              height={503}
              data-loader-swoosh
              priority
            />
            <Image
              className={`${s.swoosh} ${s.swooshBold} ${s.swooshDesktop}`}
              src="/images/swooshes/bold-middle-soft.svg"
              alt=""
              width={1920}
              height={546}
              data-loader-swoosh
              priority
            />
          </div>
        </div>

        <div className={s.counterWrap} data-loader-counter-wrap>
          <span data-counter className={s.counter}>
            0
          </span>
          <span className={s.percent}>%</span>
        </div>
      </div>
    </div>
  );
}
