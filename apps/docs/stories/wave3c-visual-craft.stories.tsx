import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  H2,
  Input,
  Label,
  P,
  Progress,
  Separator,
  Sonner,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  toast
} from "@js-solutions/react-ui";

const meta = {
  title: "Foundations/Wave 3C Visual Craft",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductSurface: Story = {
  render: () => (
    <Card style={{ maxWidth: "42rem", width: "100%" }}>
      <CardHeader>
        <Badge style={{ width: "fit-content" }} variant="secondary">
          Design System vNext
        </Badge>
        <CardTitle>Release Candidate</CardTitle>
        <CardDescription>Surface premium para dashboard iOS/Web con micro estados de interacción.</CardDescription>
      </CardHeader>
      <CardContent style={{ display: "grid", gap: "1rem" }}>
        <div style={{ display: "grid", gap: "0.45rem" }}>
          <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
            <Label htmlFor="token-name">Token namespace</Label>
            <P style={{ margin: 0 }}>74% complete</P>
          </div>
          <Input id="token-name" defaultValue="enterprise.core.primary" />
          <Progress value={74} />
        </div>
        <Separator />
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <H2 style={{ margin: 0 }}>Enable strict accessibility mode</H2>
          <Switch defaultChecked aria-label="Enable strict mode" />
        </div>
      </CardContent>
      <CardFooter style={{ display: "flex", gap: "0.6rem", justifyContent: "flex-end" }}>
        <Button variant="outline">Preview</Button>
        <Button onClick={() => toast.success("Release notes exported")}>Export</Button>
      </CardFooter>
      <Sonner />
    </Card>
  )
};

export const DenseNavigation: Story = {
  render: () => (
    <Card style={{ maxWidth: "34rem", width: "100%" }}>
      <CardHeader>
        <CardTitle>Crafted Navigation States</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tokens">
          <TabsList>
            <TabsTrigger value="tokens">Tokens</TabsTrigger>
            <TabsTrigger value="motion">Motion</TabsTrigger>
            <TabsTrigger value="states">States</TabsTrigger>
          </TabsList>
          <TabsContent value="tokens">Theme contract aligned with semantic + component tokens.</TabsContent>
          <TabsContent value="motion">Fast/normal/slow curves now harmonized across overlays and fields.</TabsContent>
          <TabsContent value="states">Hover and focus use layered shadows to improve perceived quality.</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
};

export const DialogCraft: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open crafted dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ship visually consistent release</DialogTitle>
          <DialogDescription>Verifica contraste, tipografía y elevaciones antes de publicar en `main`.</DialogDescription>
        </DialogHeader>
        <div style={{ display: "flex", gap: "0.6rem", justifyContent: "flex-end", marginTop: "1rem" }}>
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => toast.success("Quality gate passed")}>Publish</Button>
        </div>
      </DialogContent>
      <Sonner />
    </Dialog>
  )
};
