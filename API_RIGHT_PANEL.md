# API Right Panel Pattern

This documentation site supports a Stripe/Tally-style right panel for API documentation pages.

## How to Use

1. **Disable TOC in `_meta.js`**: Add `toc: false` to the page configuration in `src/content/_meta.js`:

```js
export default {
  'your-page': {
    theme: {
      toc: false
    }
  }
}
```

2. **Wrap content in ApiPageLayout**: In your MDX file, import and use the `ApiPageLayout` component:

```mdx
import ApiRightPanel from '../components/ApiRightPanel'
import ApiPageLayout from '../components/ApiPageLayout'

export const requestTabs = [
  {
    id: 'curl',
    label: 'cURL',
    code: 'curl --request GET ...',
    language: 'bash'
  },
  // ... more tabs
];

export const responseTabs = [
  {
    id: '200',
    label: '200',
    body: '{ "status": "ok" }',
    language: 'json'
  },
  // ... more tabs
];

<ApiPageLayout rightPanel={<ApiRightPanel requestTabs={requestTabs} responseTabs={responseTabs} />}>

# Your Page Title

Your content here...

</ApiPageLayout>
```

## Components

### ApiPageLayout
A layout component that creates a two-column layout with content on the left and a right panel on the right (hidden on mobile, shown on desktop).

### ApiRightPanel
Displays request and response code examples with tabbed navigation for different programming languages and response codes.

## Example

See `src/content/users.mdx` for a complete working example.
