import { memo, useState, useEffect } from "react";
import { partners } from "@/user/partners";
import { GridSlider } from "@/components/GridSlider";

const partnerImageNames = partners.map(({ portraitUrl }) =>
    portraitUrl.match(/([^\/]+)(?=\.\w+$)/)?.[0])


const loadWebpImage = async (path: string, name: string) => {
    try {
        const module = await import(`${path}/${name}.webp`);
        return module.default as string;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const loadWebpImages = async (path: string, imageNames: (string | undefined)[]) => {
    const loadedImages: (string | undefined)[] = [];
    for (const name of imageNames) {
        if (name === undefined) {
            throw new Error("name is null");
        }
        const imageSrc = await loadWebpImage(path, name);
        loadedImages.push(imageSrc);
    }

    return loadedImages;
};


export const Slider = memo(() => {
    const [webpImages, setImages] = useState<(string | undefined)[]>([]);

    useEffect(() => {
        loadWebpImages("/www.artisteformation.com/src/assets/webp/formateurs/Galerie formateurs/", partnerImageNames)
            .then(loadedImages => {
                setImages(loadedImages)
            })
    }, [])


    return <section>
        <GridSlider 
             slides={
                partners.map(({fr: {description, name, profession}, portraitUrl}, index) => {
                    return {
                        "imageUrl": webpImages[index],
                        "imageSources": [
                            {
                                "srcSet": webpImages[index],
                                "type": "image/webp"

                            },
                            {
                                "srcSet": portraitUrl,
                                "type": "image/jpeg"
                            }
                        ],
                        description,
                        name, 
                        profession

                    }
                })

             }
        />

    </section>
})