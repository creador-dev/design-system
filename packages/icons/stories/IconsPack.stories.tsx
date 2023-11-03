import React, { Fragment, Children } from "react"

// Import required components.
import dedent from "dedent"
import docs from "./IconsPack.mdx"
import { capitalizeText } from "@crd/utils"

// Import required styles.
import "../dist/css/icons.css"
import "./styles/icons-pack.scss"

export default {
	title: "Icons/Page",
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
		interactions: {
			disabled: true,
		},
	},
}

// List of Icons
const ListIcons = {
	navigation: {
		name: "Navigation",
		icons: {
			"arrow-right": {
				name: "Arrow Right",
			},
		},
	},
	social: {
		name: "Social Media",
		icons: {
			email: {
				name: "Email",
			},
			facebook: {
				name: "Facebook",
			},
			instagram: {
				name: "Instagram",
			},
			twitter: {
				name: "Twitter",
			},
			linkedin: {
				name: "Linkedin",
			},
			youtube: {
				name: "Youtube",
			},
		},
	},
	global: {
		name: "Global",
		icons: {
			bell: {
				name: "Bell",
			},
			comment: {
				name: "Comment",
			},
			locations: {
				name: "Locations",
			},
			phone: {
				name: "Phone",
			},
			search: {
				name: "Search",
			},
		},
	},
}

const Page = ({ category, search }) => {
	const groups = Object.keys(ListIcons).map((group, groupIndex) => {
		const catName = ListIcons[group].name
		const objIcons = ListIcons[group].icons

		const filteredobjIcons =
			0 !== search.trim().length
				? Object.entries(objIcons).reduce((newObj, [key, val]) => {
						const name = val.name.toLowerCase()
						if (name.includes(search.toLowerCase())) {
							newObj[key] = val
						}
						return newObj
				  }, {})
				: objIcons

		const icons = Children.map(
			Object.keys(filteredobjIcons),
			(icon, iconIndex) => {
				return (
					<Fragment>
						{("all" === category || group === category) && (
							<li key={`${groupIndex}--${iconIndex}`}>
								<div className="csb-icons__content">
									<IconsCard
										category={catName}
										name={objIcons[icon].name}
										alt={objIcons[icon].alt}
										checked={objIcons[icon].checked}
										id={icon}
									/>
								</div>
							</li>
						)}
					</Fragment>
				)
			},
		)

		return <Fragment key={groupIndex}>{icons}</Fragment>
	})

	return (
		<div>
			<ul className="csb-icons">{groups}</ul>
		</div>
	)
}

const IconsCard = ({ category, name, alt, checked, id }) => {
	const hasTagAlternative = "boolean" === typeof alt
	const hasTagChecked = "boolean" === typeof checked

	const camelCased = (id ?? "").replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase()
	})

	const sample = dedent`<span class="crdicons crdicons--${id}" aria-hidden="true"></span>`

	const compSample = dedent`<${capitalizeText(camelCased)}/>`

	return (
		<div className="csb-icon">
			<div className="csb-icon__preview">
				{(hasTagAlternative || hasTagChecked) && (
					<div className="csb-icon__preview-mode">
						{/* {hasTagAlternative && alt && (
							<Tag color="yellow">Alternative</Tag>
						)}
						{hasTagChecked && (
							<Fragment>
								{checked ? (
									<Tag color="green" light={true}>
										Check
									</Tag>
								) : (
									<Tag light={true}>Uncheck</Tag>
								)}
							</Fragment>
						)} */}
					</div>
				)}
				<div className="csb-icon__preview-icon">
					<span
						className={`crdicons crdicons--${id}`}
						style={{ fontSize: 64 }}
					/>
				</div>
			</div>

			<div className="csb-icon__data">
				<h2 className="csb-icon__category">
					{category} / <span className="csb-icon__name">{name}</span>
				</h2>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">SVG Name</h3>
					{/* <Code theme="ghost" fullWidth={true}>
						{id}
					</Code> */}
				</div>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">HTML Code</h3>
					{/* <Code fullWidth={true} className="csb-icon__code">
						{sample}
					</Code> */}
				</div>
				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">React Component</h3>
					{/* <Code fullWidth={true} className="csb-icon__code">
						{compSample}
					</Code> */}
				</div>
			</div>
		</div>
	)
}

Page.storyName = "Icons Pack"
Page.args = {
	category: "all",
	search: "",
}
Page.argTypes = {
	category: {
		name: "Category",
		options: [
			"all",
			"status",
			"action",
			"state",
			"navigation",
			"social",
			"global",
		],
		control: {
			type: "select",
			labels: {
				all: "All Categories",
				status: "Status",
				action: "Action",
				state: "State",
				navigation: "Navigation",
				social: "Social Media",
				global: "Global",
			},
		},
	},
	search: {
		name: "Search Icons",
		control: {
			type: "text",
		},
	},
}

export { Page }
