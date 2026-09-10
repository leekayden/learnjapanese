import type { AuthoredUnit } from "../types"

import { n5Units } from "./n5"
import { n4Units } from "./n4"
import { n3Units } from "./n3"
import { n2Units } from "./n2"
import { n1Units } from "./n1"

export const CURRICULUM: AuthoredUnit[] = [...n5Units, ...n4Units, ...n3Units, ...n2Units, ...n1Units]
