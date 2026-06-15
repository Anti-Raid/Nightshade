"use client"

import { toast } from "sonner"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { TypeIcon, SquareDashedIcon, DownloadIcon } from "lucide-react"

export type BrandAssetsMenuProps = {
  logomark: React.ReactElement
  logomarkSVG: string
  logotypeSVG: string
  brandGuidelinesURL: string
  brandAssetsURL: string
  children: React.ReactElement
}

export function BrandAssetsMenu({
  logomark,
  logomarkSVG,
  logotypeSVG,
  brandGuidelinesURL,
  brandAssetsURL,
  children,
}: BrandAssetsMenuProps) {

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={async () => {
            const ok = await copySVG(logomarkSVG)
            toast[ok ? "success" : "error"](
              ok ? "Logomark as SVG copied" : "Failed to copy logomark"
            )
          }}
        >
          {logomark}
          Copy Logo as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={async () => {
            const ok = await copySVG(logotypeSVG)
            toast[ok ? "success" : "error"](
              ok ? "Logotype as SVG copied" : "Failed to copy logotype"
            )
          }}
        >
          <TypeIcon
          />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem asChild>
          <a
            href={brandGuidelinesURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SquareDashedIcon
            />
            View Brand Guidelines
          </a>
        </ContextMenuItem>

        <ContextMenuItem asChild>
          <a
            href={brandAssetsURL}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <DownloadIcon
            />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

const isInlineSvg = (value: string) => /^\s*(?:<\?xml|<svg)/i.test(value)

const copySVG = async (svgOrUrl: string) => {
  try {
    const text = isInlineSvg(svgOrUrl)
      ? svgOrUrl
      : await (await fetch(svgOrUrl)).text()
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}
