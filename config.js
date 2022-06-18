module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/css",
			js: "./src/js",
			img: "./src/img",
			html:"./src/html"
		},
		dist: {
			base: "./dist",
			css: "./dist/css",
			js: "./dist/js",
			img: "./dist/img",
			html: "./dist/html"
		},
		build: {
			base: "./build",
			css: "./build/css",
			js: "./build/js",
			img: "./build/img",
			html: "./build/html"
		}
	}
}