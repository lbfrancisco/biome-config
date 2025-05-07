module.exports = {
	"$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"vcs": {
		"enabled": false,
		"clientKind": "git",
		"useIgnoreFile": false
	},
	"files": {
		"ignoreUnknown": false,
		"ignore": [
			"dist",
			"build"
		]
	},
	"formatter": {
		"enabled": true,
		"attributePosition": "auto",
		"formatWithErrors": false,
		"lineEnding": "crlf",
		"indentStyle": "tab",
		"indentWidth": 2,
		"lineWidth": 80
	},
	"organizeImports": {
		"enabled": true
	},
	"linter": {
		"enabled": true,
		"rules": {
			"recommended": true
		}
	},
	"javascript": {
		"formatter": {
			"indentWidth": 2,
			"quoteStyle": "single",
			"arrowParentheses": "always",
			"jsxQuoteStyle": "double",
			"trailingCommas": "all",
			"semicolons": "asNeeded",
			"bracketSameLine": false,
			"bracketSpacing": true
		}
	},
	"json": {
		"formatter": {
			"enabled": true,
			"indentStyle": "space"
		}
	}
}