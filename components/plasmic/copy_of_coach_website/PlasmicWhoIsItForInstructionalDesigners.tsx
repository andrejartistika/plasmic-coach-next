// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oVWAucqWj6DsPJvsydPAdo
// Component: V8UjvMShd-LGqS
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
import sty from "./PlasmicWhoIsItForInstructionalDesigners.module.css"; // plasmic-import: V8UjvMShd-LGqS/css

export type PlasmicWhoIsItForInstructionalDesigners__VariantMembers = {};
export type PlasmicWhoIsItForInstructionalDesigners__VariantsArgs = {};
type VariantPropType =
  keyof PlasmicWhoIsItForInstructionalDesigners__VariantsArgs;
export const PlasmicWhoIsItForInstructionalDesigners__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWhoIsItForInstructionalDesigners__ArgsType = {};
type ArgPropType = keyof PlasmicWhoIsItForInstructionalDesigners__ArgsType;
export const PlasmicWhoIsItForInstructionalDesigners__ArgProps =
  new Array<ArgPropType>();

export type PlasmicWhoIsItForInstructionalDesigners__OverridesType = {
  root?: p.Flex<"div">;
  reusableHeader?: p.Flex<typeof ReusableHeader>;
  hero?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section2?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultWhoIsItForInstructionalDesignersProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicWhoIsItForInstructionalDesigners__RenderFunc(props: {
  variants: PlasmicWhoIsItForInstructionalDesigners__VariantsArgs;
  args: PlasmicWhoIsItForInstructionalDesigners__ArgsType;
  overrides: PlasmicWhoIsItForInstructionalDesigners__OverridesType;

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
          <div className={classNames(projectcss.all, sty.freeBox__fosQr)} />

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
            <div className={classNames(projectcss.all, sty.columns___1ZiD4)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.column___1Zhpu)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yAc3)}
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

              <div className={classNames(projectcss.all, sty.column__rz8Om)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___7WgWu)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nsvrs)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__x8Lju
                      )}
                    >
                      {"COACH FOR INSTRUCTIONAL DESIGNERS"}
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
                        : "Build training that employees  love"}
                    </h1>
                  </p.Stack>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lpy0X
                    )}
                  >
                    {"The all-in-one tool for learning!"}
                  </div>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___6RjfZ
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
                        sty.text___3ErNi
                      )}
                    >
                      {"GET STARTED"}
                    </div>

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__c4E0P)}
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
                <div className={classNames(projectcss.all, sty.column__i3Qbs)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qnE38)}
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
              className={classNames(sty.img__n3Ouj)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("240px" as const)
                  : ("310px" as const)
              }
              loading={"lazy" as const}
              src={{
                src: "/plasmic/copy_of_coach_website/images/coachIdssvg.svg",
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
            <div className={classNames(projectcss.all, sty.freeBox__mEDj)} />

            <div className={classNames(projectcss.all, sty.columns__hXoY0)}>
              <div className={classNames(projectcss.all, sty.column__guRSf)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gtTiO
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"Instructional Designers say it???s their "}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"new ???right-hand??? tool"}
                    </span>
                    <React.Fragment>{"!"}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__qeXq7)}
            >
              <div className={classNames(projectcss.all, sty.column__qUxSe)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__p7SD)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__frbRq)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webManagers1Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hNxxN
                    )}
                  >
                    {"Easy-to-use and fast to create trainings"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oNviL
                    )}
                  >
                    {
                      "Coach allows you to create training fast without needing extra tech skills. \nJust as easy and simple as using an Excel document. "
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__lVm2A)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mJJgv)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__luAu8)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webIds2Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vVdL
                    )}
                  >
                    {"Understand how people respond to your trainings"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ke6A5
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Get feedback from learners to continuously improve your training. Coach???s integrated feedback system allows each employee to leave feedback regards the training you???ve built. The more you know, the better your training will become!"
                      : "Get feedback from learners to continuously improve your training. Coach???s integrated feedback system allows each employee to leave feedback regards the training you???ve built. \nThe more you know, the better your training will become!"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__h6Jce)}
            >
              <div className={classNames(projectcss.all, sty.column__dZXsx)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ywlSo)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___0WuG)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webIds3Png.png",
                      fullWidth: 760,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ye2Qa
                    )}
                  >
                    {"Employees will love your training"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6HDZl
                    )}
                  >
                    {
                      "Personalization on another level! Coach???s smart system recognizes every employee???s knowledge gap and fills the void with content they actually need!"
                    }
                  </div>
                </p.Stack>
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column___9QAss)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qxm6N)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__vdD)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"400px" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/webIds4Png.png",
                      fullWidth: 761,
                      fullHeight: 561,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__psUp5
                    )}
                  >
                    {"Knowledgeable employees, happy managers & CEOs"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__djbIx
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Knowledgeable employees work better - which ultimately means better results and bigger profits. \nAnd who doesn???t love profits? I bet CEOs do ???? "
                      : "Knowledgeable employees work better - which ultimately means better results and bigger profits. \nAnd who doesn???t love profits? \nI bet CEOs do ???? "}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__gwTz0)} />
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox__i1RO7)}>
            <div className={classNames(projectcss.all, sty.freeBox___55Thz)}>
              <div className={classNames(projectcss.all, sty.columns__b14Tf)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.column__yfLfP)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5BmZo
                    )}
                  >
                    {"READY TO START?"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ee6D1
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Don???t just take our word.\nExperience the power of Coach yourself, and see the possibilities."
                      : "Get in on the action today, and see why Coach will become your go-to tool for building effective trainings."}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dJRr2)}
                  >
                    <p.Stack
                      as={p.PlasmicLink}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link___0Xymk
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
                          sty.text__tEf74
                        )}
                      >
                        {"GET STARTED"}
                      </div>

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__zs1P7)}
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

                <div className={classNames(projectcss.all, sty.column__buSd)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ezKQm)}
                    displayHeight={"100%" as const}
                    displayMaxHeight={"100%" as const}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("180px" as const)
                        : ("220px" as const)
                    }
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/copy_of_coach_website/images/phoneCutIdspng.png",
                      fullWidth: 430,
                      fullHeight: 743,
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
  PlasmicWhoIsItForInstructionalDesigners__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWhoIsItForInstructionalDesigners__VariantsArgs;
    args?: PlasmicWhoIsItForInstructionalDesigners__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit< // Specify variants directly as props
    PlasmicWhoIsItForInstructionalDesigners__VariantsArgs,
    ReservedPropsType
  > &
    /* Specify args directly as props*/ Omit<
      PlasmicWhoIsItForInstructionalDesigners__ArgsType,
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
          internalArgPropNames:
            PlasmicWhoIsItForInstructionalDesigners__ArgProps,
          internalVariantPropNames:
            PlasmicWhoIsItForInstructionalDesigners__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWhoIsItForInstructionalDesigners__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWhoIsItForInstructionalDesigners";
  } else {
    func.displayName = `PlasmicWhoIsItForInstructionalDesigners.${nodeName}`;
  }
  return func;
}

export const PlasmicWhoIsItForInstructionalDesigners = Object.assign(
  // Top-level PlasmicWhoIsItForInstructionalDesigners renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    reusableHeader: makeNodeComponent("reusableHeader"),
    hero: makeNodeComponent("hero"),
    h1: makeNodeComponent("h1"),
    section2: makeNodeComponent("section2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWhoIsItForInstructionalDesigners
    internalVariantProps: PlasmicWhoIsItForInstructionalDesigners__VariantProps,
    internalArgProps: PlasmicWhoIsItForInstructionalDesigners__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWhoIsItForInstructionalDesigners;
/* prettier-ignore-end */
