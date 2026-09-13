import Link from "next/link"
import { Fragment } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

export type Crumb = {
  label: string
  /** Omit on the last crumb — it renders as the current page. */
  href?: string
}

/** Shared page breadcrumb trail. Last item is the current page. */
export function PageCrumbs({
  items,
  className,
}: {
  items: Crumb[]
  className?: string
}) {
  if (!items.length) return null

  return (
    <Breadcrumb className={cn("mb-1", className)}>
      <BreadcrumbList>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <Fragment key={item.href ?? `crumb-${i}-${item.label}`}>
              {i > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={item.href} />}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
