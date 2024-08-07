import { createRouter, defineRoute } from "type-route";
import { makeThisModuleAnExecutableRouteLister } from "github-pages-plugin-for-type-route";
import type { RouterOpts } from "type-route";

const opts: RouterOpts = {
	"scrollToTop": true
}

const publicUrl = import.meta.env.BASE_URL;


export const routeDefs = {
	"home": defineRoute(publicUrl),
	"how": defineRoute(publicUrl + "comment"),
	"teachers": defineRoute(publicUrl + "formateurs"),
	"teachings": defineRoute(publicUrl + "formations"),
	"about": defineRoute(publicUrl + "a-propos"),
	"contact": defineRoute(publicUrl + "contact"),
	"legal": defineRoute(publicUrl + "legal")
};


makeThisModuleAnExecutableRouteLister(routeDefs);

export const { RouteProvider, routes, useRoute } = createRouter(opts,
	routeDefs
);
