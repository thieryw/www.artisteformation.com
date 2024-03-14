import { memo, useEffect } from 'react';
import type { Variants } from "framer-motion";
import { motion, useAnimation } from 'framer-motion';
import { tss, Text, breakpointValues } from "@/theme";
import { Logo } from "@/components/Logo";


type TransitionComponentProps = {
  className?: string;
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  transitionText?: string;
  splashScreenTitle?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  logoUrl?: string;
  isActive: boolean;
}


const titleVariants: Variants = {
  "hidden": {
    "y": "100%"
  },
  "visible": {
    "y": 0
  }
};

const logoVariants: Variants = {
  "hidden": {
    "opacity": 0
  },
  "visible": {
    "opacity": 1
  }
}

export const TransitionComponent = memo((props: TransitionComponentProps) => {
  const {
    className,
    transitionText,
    splashScreenTitle,
    logoUrl,
    backgroundColor,
    backgroundImage,
    isActive
  } = props;
  const { classes, cx, theme } = useStyles({
    "backgroundColor": backgroundColor ?? "blue",
    "backgroundImage": backgroundImage ?? "",
    isActive,
    "classesOverrides": props.classes

  });
  const controls = useAnimation();
  useEffect(() => {
    if (isActive) {
      controls.start("visible")
      return;
    }

    controls.start("hidden")



  }, [isActive, controls])


  return <div
    className={cx(classes.root, className)}
  >
    <div className={classes.inner}>
      {
        logoUrl !== undefined &&
        <motion.div
          initial={"hidden"}
          animate={controls}
          variants={logoVariants}
          transition={{ 
            "delay": 0.8,
            "ease": "easeInOut",
            "duration": 0.9
          }}
        ><Logo
            className={classes.logo}
            width={(() => {
              if (theme.windowInnerWidth < breakpointValues.sm) {
                return 125;
              }
              return 270;
            })()}
            logoUrl={logoUrl}
          />

        </motion.div>

      }
      {
        splashScreenTitle !== undefined &&
        <div className={classes.titleWrapper}>
          {
            splashScreenTitle.split(" ").map((title, index) =>
              <div style={{ "overflow": "hidden" }}>
                <motion.div
                  key={index}
                  variants={titleVariants}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    "ease": "easeOut",
                    "delay": index === 0 ? 1 : 1.1,
                    "duration": 0.8
                  }}
                >
                  <Text typo="heading1">{title}</Text>
                </motion.div>
              </div>
            )
          }
        </div>
      }
      {
        transitionText !== undefined &&
        <div style={{ "overflow": "hidden" }}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            transition={{
              "ease": "easeInOut",
              "duration": 0.8,
              "delay": 0.6

            }}
          >
            <Text style={{ "marginBlock": 0 }} typo="transition">{transitionText}</Text>
          </motion.div>

        </div>
      }
    </div>

  </div>
});

const useStyles = tss.withParams<
  Required<
    Pick<
      TransitionComponentProps,
      "backgroundColor" |
      "backgroundImage" |
      "isActive"
    >
  >
>().create(({
  theme,
  backgroundColor,
  backgroundImage,
  isActive
}) => {
  return ({
    "root": {
      "width": "100%",
      "backgroundColor": backgroundColor,
      "backgroundImage": `url("${backgroundImage}")`,
      "backgroundBlendMode": "soft-light",
      "backgroundSize": "cover",
      "position": "fixed",
      "transition": "top 800ms",
      ...(() => {
        if (theme.windowInnerWidth < breakpointValues.sm) {
          return {
            "top": isActive ? 0 : -theme.windowInnerHeight,
            "height": "100dvh",

          }
        }
        return {
          "top": isActive ? 0 : "-100%",
          "height": "100%"

        }
      })(),


      "left": 0,
      "zIndex": 4500,
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundPosition": "center"


    },
    "inner": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": (() => {
        if (theme.windowInnerWidth < breakpointValues.sm) {
          return "column"
        }
        return undefined;
      })()
    },
    "logo": {
      ...(() => {
        if (theme.windowInnerWidth < breakpointValues.sm) {
          return {
            "marginBottom": 20
          }
        }
        return {
          "marginRight": 16
        }
      })()
    },
    "titleWrapper": {
      ...(() => {
        if (theme.windowInnerWidth < breakpointValues.sm) {
          return {
            "textAlign": "center"
          }
        }
        return {
          "marginLeft": 16
        }
      })()

    },
  })
})
