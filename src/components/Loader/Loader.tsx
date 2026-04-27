import s from "./Loader.module.scss";

// Loader sits over the page during the intro. The swooshContext below
// duplicates the hero section's positioning context (width: 100%,
// padding-inline matching .container, container-type: inline-size) so the
// swoosh element inside resolves cqw the same way the page's swoosh does
// → identical screen position. The loader's stroke colour is orange-soft;
// the page's is orange. As the drawer slides up the screen-anchored mask
// reveals the page underneath → reads as a colour shift, not a swap.
export function Loader() {
  return (
    <div className={s.root} aria-hidden>
      <div className={s.drawer} data-loader-drawer>
        <div className={s.swooshMask} data-loader-swoosh-mask>
          <div className={s.swooshContext}>
            <div
              className={`${s.swoosh} ${s.swooshBold} ${s.swooshMobile}`}
              data-loader-swoosh
            />
            <div
              className={`${s.swoosh} ${s.swooshBold} ${s.swooshDesktop}`}
              data-loader-swoosh
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
