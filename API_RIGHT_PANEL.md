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

2. **Export metadata with right panel data**: In your MDX file, export the request and response tabs along with metadata:

```mdx
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

export const metadata = {
  rightPanelData: {
    requestTabs,
    responseTabs
  }
};

# Your Page Title

Your content here...
```

## Components

### CustomWrapper
A custom wrapper component that detects pages with `rightPanelData` in metadata and automatically renders them with a two-column layout.

### ApiRightPanel
Displays request and response code examples with tabbed navigation for different programming languages and response codes.

## Example

See `src/content/users.mdx` for a complete working example.
