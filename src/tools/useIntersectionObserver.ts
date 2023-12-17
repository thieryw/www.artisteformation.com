import { useEffect, useMemo } from "react";
import type { RefObject } from "react";
import type { DependencyList } from "react";
import { useStateRef } from "powerhooks";

export function useIntersectionObserver<T extends HTMLElement = any>(
    params: {
        callback: (params: {
            entry: IntersectionObserverEntry;
            observer: IntersectionObserver;
        }) => void;
        rootMargin?: string;
        root?: Element | Document;
        threshold?: number | number[];
    },
    dependencyList: DependencyList,
): {
    ref: RefObject<T>;
} {
    const { callback, ...rest } = params;
    const ref = useStateRef<T>(null);

    const observer = useMemo(() => {
        return new IntersectionObserver(
            entries => {
                callback({
                    "entry": entries[0],
                    observer,
                });
            },
            { ...rest },
        );
    }, dependencyList);

    useEffect(() => {
        if (ref.current === null) {
            return;
        }

        observer.observe(ref.current);

        return () => {
            if(ref.current === null){
                return;
            }
            observer.unobserve(ref.current);
            observer.disconnect();
        }
    }, [...dependencyList, ref, observer]);

    return { ref };
}