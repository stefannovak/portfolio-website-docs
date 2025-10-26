import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import ApiRightPanel from './ApiRightPanel'

const docsComponents = getDocsMDXComponents()
const DocsWrapper = docsComponents.wrapper

export default function CustomWrapper({ children, toc, metadata, sourceCode, ...props }) {
  // Check if the current page should use right panel instead of TOC
  // This is determined by checking metadata for rightPanelData
  const rightPanelData = metadata?.rightPanelData

  if (rightPanelData) {
    const { requestTabs, responseTabs } = rightPanelData

    return (
      <DocsWrapper toc={[]} metadata={metadata} sourceCode={sourceCode} {...props}>
        <div className="nx-flex nx-gap-8">
          <div className="nx-flex-1 nx-min-w-0">
            {children}
          </div>
          <div className="nx-hidden lg:nx-block nx-w-[400px] nx-flex-shrink-0">
            <ApiRightPanel requestTabs={requestTabs} responseTabs={responseTabs} />
          </div>
        </div>
      </DocsWrapper>
    )
  }

  // Default behavior: use the standard docs wrapper with TOC
  return (
    <DocsWrapper toc={toc} metadata={metadata} sourceCode={sourceCode} {...props}>
      {children}
    </DocsWrapper>
  )
}
