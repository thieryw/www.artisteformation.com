import { ReactSVG } from "react-svg";
import { memo } from "react";
import { tss } from "../theme";

type LogoProps = {
    logoUrl: string;
    className?: string;
    fill?: string;
    width?: number;
    height?: number;
    ariaLabel?: string;
};

export const Logo = memo((props: LogoProps) => {
    const { className, logoUrl, fill, height, width, ariaLabel } = props;

    const { classes, cx } = useStyles({ fill, width, height });

    return logoUrl.endsWith(".svg") ? (
        <ReactSVG
            src={logoUrl}
            className={cx(classes.root, classes.svg, className)}
            aria-label={ariaLabel}
        />
    ) : (
        <img aria-label={ariaLabel} src={logoUrl} className={cx(classes.root, className)} alt="logo" />
    );
});

const useStyles = tss.withParams<{
    fill: string | undefined;
    width: number | undefined;
    height: number | undefined;
}>().withName("Logo").create(({ fill, height, width }) => ({
    "root": {
        width,
        height,
    },
    "svg": {
        "& svg": {
            "fill": fill ?? undefined,
            "width": "100%",
            "height": "100%",
        },
    },
}));