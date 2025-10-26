import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import ApiRightPanel from './src/components/ApiRightPanel'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = components => ({
  ...docsComponents,
  ApiRightPanel,
  ...components
})
