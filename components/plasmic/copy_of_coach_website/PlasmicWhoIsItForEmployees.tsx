// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oVWAucqWj6DsPJvsydPAdo
// Component: ex2i4sN0MTAAq7
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ReusableHeader from "../../ReusableHeader"; // plasmic-import: HYxHqp5lqPNvYs/component
import Footer from "../../Footer"; // plasmic-import: hqPlJbMpP0AGl0/component

import { useScreenVariants as useScreenVariantsvsF6OfTsfNeByl } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VsF6OfTsfNeBYL/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_coach_website.module.css"; // plasmic-import: oVWAucqWj6DsPJvsydPAdo/projectcss
import sty from "./PlasmicWhoIsItForEmployees.module.css"; // plasmic-import: ex2i4sN0MTAAq7/css

export type PlasmicWhoIsItForEmployees__VariantMembers = {};
export type PlasmicWhoIsItForEmployees__VariantsArgs = {};
type VariantPropType = keyof PlasmicWhoIsItForEmployees__VariantsArgs;
export const PlasmicWhoIsItForEmployees__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWhoIsItForEmployees__ArgsType = {};
type ArgPropType = keyof PlasmicWhoIsItForEmployees__ArgsType;
export const PlasmicWhoIsItForEmployees__ArgProps = new Array<ArgPropType>();

export type PlasmicWhoIsItForEmployees__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  hero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultWhoIsItForEmployeesProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicWhoIsItForEmployees__RenderFunc(props: {
  variants: PlasmicWhoIsItForEmployees__VariantsArgs;
  args: PlasmicWhoIsItForEmployees__ArgsType;
  overrides: PlasmicWhoIsItForEmployees__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvsF6OfTsfNeByl()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__aS18U)} />

          <ReusableHeader
            data-plasmic-name={"reusableHeader"}
            data-plasmic-override={overrides.reusableHeader}
            className={classNames("__wab_instance", sty.reusableHeader)}
          />

          <p.Stack
            as={"div"}
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            hasGap={true}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div className={classNames(projectcss.all, sty.columns__hgZYj)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column___0M31P)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__pkp2V)}
                    displayHeight={"280px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/whoitsforBg1Png.png",
                      fullWidth: 507,
                      fullHeight: 667,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              ) : null}

              <div className={classNames(projectcss.all, sty.column__uAm22)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uNfWg)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dCou)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6M9Ws
                      )}
                    >
                      {"COACH FOR EMPLOYEES"}
                    </div>

                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "The training tool \nthat helps you learn"
                        : "The training tool that\nactually helps you learn"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ich0L
                    )}
                  >
                    {"Try out Coach and make sure your manager knows about it!"}
                  </div>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__smwo
                    )}
                    component={Link}
                    href={"https://calendly.com/kalina-t/30min" as const}
                    platform={"nextjs"}
                    target={"_blank" as const}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sm5Wv
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__an4V)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"15px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/copy_of_coach_website/images/buttonCaretWhitesvg2.svg",
                        fullWidth: 108,
                        fullHeight: 150,
                        aspectRatio: 0.722222
                      }}
                    />
                  </p.Stack>
                </p.Stack>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column__wHyt)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__u2D5Z)}
                    displayHeight={"280px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/whoitsforBg2Png.png",
                      fullWidth: 482,
                      fullHeight: 667,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              ) : null}
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___5Xmas)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("240px" as const)
                  : ("300px" as const)
              }
              loading={"lazy" as const}
              src={{
                src: "/plasmic/copy_of_coach_website/images/coachEmployeessvg.svg",
                fullWidth: 203,
                fullHeight: 150,
                aspectRatio: 1.354839
              }}
            />
          </p.Stack>

          <div
            data-plasmic-name={"section2"}
            data-plasmic-override={overrides.section2}
            className={classNames(projectcss.all, sty.section2)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__yIo1Y)} />

            <div className={classNames(projectcss.all, sty.columns___0FmPn)}>
              <div className={classNames(projectcss.all, sty.column__xlrzO)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__keHlO
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"With Coach, you???ll notice"}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {" your knowledge improves"}
                    </span>
                    <React.Fragment>
                      {
                        " right away - all while playing challenging games and having fun!"
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___6Ti8U)}
            >
              <div className={classNames(projectcss.all, sty.column__t1WQv)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zg6Er)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___6BiUs)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webEmployees1Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ydaw
                    )}
                  >
                    {"Say ???bye??? to boring trainings and onboardings"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7DiaY
                    )}
                  >
                    {
                      "Coach allows you to go through any type of training in your spare time, at your own pace, coaching you until the most important parts of the training remain in your long-term memory."
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column___5St68)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__stYqq)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__hxUru)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webEmployees2Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eafIa
                    )}
                  >
                    {"The games you can play\nat work"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xjInt
                    )}
                  >
                    {
                      "Coach gives you 8 different games to play and learn. \nAll of them are interactive and with different challenge levels."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__qhDCh)}
            >
              <div className={classNames(projectcss.all, sty.column__qKUpy)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__w6Oem)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__diwTa)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webEmployees3Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fWtWj
                    )}
                  >
                    {"Be aware of your knowledge gaps"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zh8Jx
                    )}
                  >
                    {
                      "You don???t know what you don???t know until the time comes to use that knowledge in practice. Coach helps you detect your knowledge gaps and pushes you to learn the parts that you don???t know - until you???ve mastered it all!"
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__kiX4V)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__klV9N)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___7Tibn)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webEmployees4Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t1XQ5
                    )}
                  >
                    {"See where you knowledge stand with your knowledge"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__apnym
                    )}
                  >
                    {
                      "A little competition forces us to do better. Now you are able to see how your knowledge progressed over time and where you stand among your colleagues. \nPS: if you are the best in the biz, Coach makes sure the management notices this."
                    }
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__tAmna)} />
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__jyXlt)}>
            <div className={classNames(projectcss.all, sty.freeBox__tCwzK)}>
              <div className={classNames(projectcss.all, sty.columns__lcwpO)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__nViog)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9JUqh
                    )}
                  >
                    {"READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__imLg
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don???t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : "Don???t just take our word for it -\nExperience the power of Coach\nyourself, and see the possibilities."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ebfii)}
                  >
                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__xliU
                      )}
                      component={Link}
                      href={"https://calendly.com/kalina-t/30min" as const}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hYzNp
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__p7VE1)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"15px" as const}
                        loading={"lazy" as const}
                        src={{
                          src: "/plasmic/copy_of_coach_website/images/buttonCaretWhitesvg2.svg",
                          fullWidth: 108,
                          fullHeight: 150,
                          aspectRatio: 0.722222
                        }}
                      />
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <div className={classNames(projectcss.all, sty.column__oVYtI)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___7Zp1)}
                    displayHeight={"100%" as const}
                    displayMaxHeight={"100%" as const}
                    displayMaxWidth={"220px" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("140px" as const)
                        : ("100%" as const)
                    }
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/phoneCutEmployeespng.png",
                      fullWidth: 430,
                      fullHeight: 742,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "reusableHeader", "hero", "h1", "section2", "footer"],
  reusableHeader: ["reusableHeader"],
  hero: ["hero", "h1"],
  h1: ["h1"],
  section2: ["section2"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  reusableHeader: typeof ReusableHeader;
  hero: "div";
  h1: "h1";
  section2: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWhoIsItForEmployees__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhoIsItForEmployees__VariantsArgs;
    args?: PlasmicWhoIsItForEmployees__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWhoIsItForEmployees__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWhoIsItForEmployees__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWhoIsItForEmployees__ArgProps,
          internalVariantPropNames: PlasmicWhoIsItForEmployees__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWhoIsItForEmployees__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForEmployees";
  } else {
    func.displayName = `PlasmicWhoIsItForEmployees.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForEmployees = Object.assign(
  // Top-level PlasmicWhoIsItForEmployees renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWhoIsItForEmployees
    internalVariantProps: PlasmicWhoIsItForEmployees__VariantProps,
    internalArgProps: PlasmicWhoIsItForEmployees__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForEmployees;
/* prettier-ignore-end */
