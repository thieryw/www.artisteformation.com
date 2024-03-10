import { memo } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    "hidden": { "opacity": 1 },
    "visible": {
      "opacity": 1,
      "transition": {
        "staggerChildren": 0.10
      }
    }
  };

  const childVariants = {
    "hidden": {
      "opacity": 0,
      "y": -100
    },
    "visible": {
      "opacity": 1,
      "y": 0
    }
  };
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


  return <div
    className={cx(classes.root, className)}
  >
    <div className={classes.inner}>
      {
        logoUrl !== undefined &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  "ease": "easeOut",
                  "delay": index === 0 ? 1 : 1.1,
                  "duration": 1
                }}
              >
                <Text typo="heading1">{title}</Text>
              </motion.div>)
          }
        </div>
      }
      {
        transitionText !== undefined &&
        <motion.div
          className={classes.transitionTextWrapper}
          animate="visible"
          initial="hidden"
          variants={containerVariants}
          key={transitionText}
        >
          {
            Array.from(transitionText).map((char, index) =>
              <motion.div
                variants={childVariants}
                transition={{
                  "ease": "easeOut",
                  "duration": char === " " ? 0 : 0.7
                }} 
                key={index}
              >
                <Text typo="transition">{char === " " ? "\u00A0" : char}</Text>
              </motion.div>)
          }
        </motion.div>
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
      "transition": isActive ? undefined : "top 800ms",
      ...(()=>{
        if(theme.windowInnerWidth < breakpointValues.sm){
          return {
            "top": isActive ? 0 : -theme.windowInnerHeight,
            "height": "100vh"

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
    "transitionTextWrapper": {
      "display": "flex",
    }
  })
})
