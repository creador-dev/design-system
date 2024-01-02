import React, { Fragment, Children } from "react"

// Import required components.
import dedent from "dedent"
import docs from "./IconsPack.mdx"
import Icons, { IconsNamesType } from "@crdev/icons"

// Import required styles.
import "../dist/css/icons.css"
import "./styles/icons-pack.scss"

interface IconType {
	category: string
	search: string
	name: string
	alt: string
	checked: boolean
	id: IconsNamesType
}

type PageType = Pick<IconType, "category" | "search">

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
			ArrowRight: {
				name: "Arrow Right",
			},
		},
	},
	social: {
		name: "Social Media",
		icons: {
			Email: {
				name: "Email",
			},
			Facebook: {
				name: "Facebook",
			},
			Instagram: {
				name: "Instagram",
			},
			Twitter: {
				name: "Twitter",
			},
			Linkedin: {
				name: "Linkedin",
			},
			Youtube: {
				name: "Youtube",
			},
		},
	},
	global: {
		name: "Global",
		icons: {
			Bell: {
				name: "Bell",
			},
			Comment: {
				name: "Comment",
			},
			Locations: {
				name: "Locations",
			},
			Phone: {
				name: "Phone",
			},
			Search: {
				name: "Search",
			},
		},
	},
}

const Page = ({ category, search }: PageType) => {
	const groups = Object.keys(ListIcons).map((group, groupIndex) => {
		const catName = ListIcons[group].name
		const objIcons = ListIcons[group].icons

		const filteredobjIcons =
			search.trim().length !== 0
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
						{(category === "all" || group === category) && (
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

const IconsCard = ({
	category,
	name,
	alt,
	checked,
	id,
}: Omit<IconType, "search">) => {
	const hasTagAlternative = typeof alt === "boolean"
	const hasTagChecked = typeof checked === "boolean"

	const iconId = (id ?? "").replace(
		/[A-Z]/g,
		(match, index) => (index === 0 ? "" : "-") + match.toLowerCase(),
	)

	const compSample = dedent`<${id}/>`

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
					{Icons[id] &&
						React.createElement(Icons[id], {
							title: id,
							width: 64,
							height: 64,
						})}
				</div>
			</div>

			<div className="csb-icon__data">
				<h2 className="csb-icon__category">
					{category} / <span className="csb-icon__name">{name}</span>
				</h2>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">SVG Name</h3>
					{iconId}
					{/* <Code theme="ghost" fullWidth={true}>
						{id}
					</Code> */}
				</div>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">React Component</h3>
					{compSample}
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
