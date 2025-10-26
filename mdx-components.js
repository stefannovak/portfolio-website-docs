import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import ApiRightPanel from './src/components/ApiRightPanel'
import CustomWrapper from './src/components/CustomWrapper'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = components => ({
  ...docsComponents,
  wrapper: CustomWrapper,
  ApiRightPanel,
  ...components
})
