import { memo, useState, useEffect } from "react";
import { partners } from "@/user/partners";
import { GridSlider } from "@/components/GridSlider";
import { loadWebpImage } from "@/tools/loadWebpImage";

const partnerImageNames = partners.map(({ portraitUrl }) =>
    portraitUrl.match(/([^\/]+)(?=\.\w+$)/)?.[0])


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
        loadWebpImages("/www.artisteformation.com/src/assets/webp/formateurs/galerie-formateur/", partnerImageNames)
            .then(loadedImages => {
                setImages(loadedImages)
            })
    }, [])



    return <section>
        <GridSlider
            slides={
                partners.map(({ fr: { description, name, profession }, portraitUrl }, index) => {
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