
export const loadWebpImage = async (path: string, name: string) => {
    try {
        const module = await import(`${path}/${name}.webp`);
        return module.default as string;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};