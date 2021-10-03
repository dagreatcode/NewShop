import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
  title="Product Selector"
  primaryAction={{
    content:"Select product",
    onAction: () => console.log("I have been clicked")
  }}
  >
    <Heading>Retro Luxe Co. LLC 🎉</Heading>
  </Page>
);

export default Index;
