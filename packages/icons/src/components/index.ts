import * as Icons from "./exports"

import { type IconProps } from "./utils/icon.types"

export type IconsNamesType = keyof typeof Icons

export type IconsModule = Record<IconsNamesType, React.ComponentType<IconProps>>

// Usefull to get icons by name
export default Icons as IconsModule

// Usefull for importing Icons individually, ex. import { ExternalLink } from "@crdev/icons"
export * from "./exports"
