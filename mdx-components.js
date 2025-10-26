import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import ApiRightPanel from './src/components/ApiRightPanel'
import ApiPageLayout from './src/components/ApiPageLayout'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = components => ({
  ...docsComponents,
  ApiRightPanel,
  ApiPageLayout,
  ...components
})
