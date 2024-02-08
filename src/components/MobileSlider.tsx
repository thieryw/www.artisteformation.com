import { useRef, useMemo, useEffect } from 'react';
import { useConstCallback } from "powerhooks";
import { tss, breakpointValues, Text } from "@/theme";
import type { ReactNode } from "react";


export type MobileSliderProps = {
	className?: string;
	classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
	startingPercentage?: number;
	slides: {
		image: {
			src: string;
			alt?: string;
			sources?: {
                srcSet?: string;
                type?: string;
            }[]
		},
		title?: string;
		paragraph?: string;
		extraContent?: ReactNode;
	}[];
};

export const MobileSlider = (props: MobileSliderProps) => {
	const { slides, className, startingPercentage = 0 } = props;
	const trackRef = useRef<HTMLDivElement>(null);
	const carouselRef = useRef<HTMLDivElement>(null);

	const { classes, cx, theme } = useStyles({
		"numberOfSlides": slides.length,
        "classesOverrides": props.classes
	});


	const animate = useConstCallback((nextPercentage: number)=>{
		if(!trackRef.current){
			return;
		};

		trackRef.current.style.transform = `translate(${nextPercentage}%)`;

		const imageElements = Array.from(trackRef.current.getElementsByClassName(classes.image));

		for (const image of imageElements) {
			(image as HTMLImageElement).style.objectPosition = `${100 + nextPercentage}% center`;
		}
	});

	useEffect(()=>{
		if(!trackRef.current){
			return;
		}
		trackRef.current.dataset.percentage = `-${startingPercentage}`;
		animate(-startingPercentage);

	}, [animate, startingPercentage])


	const nextPercentageFactor = useMemo(() => {

		if (theme.windowInnerWidth < breakpointValues.sm) {
			return 4;
		};

		return 1;

	}, [theme.windowInnerWidth])


	const handleOnDown = useConstCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
		if (!trackRef.current) {
			return;
		}
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		trackRef.current.dataset.mouseDownAt = `${clientX}`;
	});

	const handleOnUp = useConstCallback(() => {
		if (!trackRef.current) {
			return;
		}
		trackRef.current.dataset.mouseDownAt = "0";
		trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage || "0";
	});

	const handleOnMove = useConstCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => {
		if (!trackRef.current || trackRef.current.dataset.mouseDownAt === "0" || trackRef.current.dataset.mouseDownAt === undefined) {
			return;
		}

		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - clientX;
		const maxDelta = theme.windowInnerWidth / 2;

		const percentage = (mouseDelta / maxDelta) * -100;
		const prevPercentage = parseFloat(trackRef.current.dataset.prevPercentage || "0");
		const nextPercentageUnconstrained = prevPercentage + percentage / nextPercentageFactor;
		const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

		trackRef.current.dataset.percentage = `${nextPercentage}`;
		animate(nextPercentage);

	});



	return (
		<div className={cx(classes.root, className)}>

			<div
				ref={carouselRef}
				className={classes.carousel}
				onMouseDown={handleOnDown}
				onMouseUp={handleOnUp}
				onMouseMove={handleOnMove}
				onTouchStart={handleOnDown}
				onTouchEnd={handleOnUp}
				onTouchMove={handleOnMove}
				onTouchCancel={handleOnUp}
				onMouseLeave={handleOnUp}
			>
				<div
					className={classes.track}
					ref={trackRef}
				>
					{
						slides.map(({ image: { src, alt, sources }, title, paragraph, extraContent }, index) => <div style={{
							"marginLeft": index === 0 ? undefined : 25
						}} key={src} className={classes.slide}>
							<div className={classes.pictureWrapper}>
								<picture>
									{
										sources !== undefined &&
										sources.map((source, index) => <source key={index} {...source} />)
									}
									<img
										className={classes.image}
										src={src}
										draggable={false}
										alt={alt ?? "carousel picture"}
									/>
								</picture>
                            </div>
                            <div className={classes.card}>
                                {
                                    title !== undefined &&
                                    <Text style={{
                                        "marginBottom": 5
                                    }} typo="heading4">{title}</Text>
                                }
                                {
                                    paragraph !== undefined &&
                                    <Text style={{
                                        "lineHeight": "1.5em"
                                    }} typo="paragraph">{paragraph}</Text>
                                }


                            </div>


                            {
                                extraContent !== undefined &&
                                extraContent
                            }
                        </div>)
                    }
                </div>

            </div>

        </div>
    );
};


const useStyles = tss.withParams<{ numberOfSlides: number }>().create(({ numberOfSlides }) => {
    const imageWidth = 200;
    const gap = 25
    return ({
        "root": {
            "position": "relative",
        },

        "carousel": {
            "width": "100vw",
            "position": "relative",
            "overflow": "hidden"
        },
        "track": {
            "display": "flex",
            "position": "relative",
            "left": "50%",
            "transition": "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
            "userSelect": "none",
            "cursor": "grab",
            ":active": {
                "cursor": "grabbing"

            },
            "width": imageWidth * numberOfSlides + (() => {
                if (numberOfSlides === 1) {
                    return 0;
                }
                if (numberOfSlides === 2) {
                    return gap;
                }
                return (numberOfSlides - 1) * gap
            })()
        },
        "slide": {
            "position": "relative",
            "width": imageWidth,
            "overflow": "hidden",
            "display": "flex",
            "flexDirection": "column"

        },
        "pictureWrapper": {

        },
        "card": {
            "maxWidth": "none",
            "width": "100%",
            "background": "none",
            "padding": 0,
            "marginTop": 30,
            "justifyContent": "space-between",
            "flexGrow": 1
        },
        "cardTitleWrapper": {

        },
        "image": {
            "width": imageWidth,
            "height": 310,
            "objectFit": "cover",
            "transition": "object-position 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
            "objectPosition": (() => {
                if (!Element.prototype.animate) {
                    return "center";
                }

                return "100% center"
            })(),
        }
    })
})