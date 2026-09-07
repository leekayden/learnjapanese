import type { AuthoredUnit } from "../types"

import { n5Units } from "./n5"
import { n4Units } from "./n4"

export const CURRICULUM: AuthoredUnit[] = [...n5Units, ...n4Units]
