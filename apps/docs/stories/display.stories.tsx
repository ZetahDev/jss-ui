import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  H1,
  H2,
  H3,
  Muted,
  P,
  Separator,
  Skeleton,
  Small,
  Spinner
} from "@js-solutions/react-ui";

const meta = {
  title: "Foundations/Display",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BadgeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
};

export const CardExample: Story = {
  render: () => (
    <Card style={{ width: "22rem" }}>
      <CardHeader>
        <CardTitle>Plan Pro</CardTitle>
        <CardDescription>Ideal para equipos con alta demanda.</CardDescription>
      </CardHeader>
      <CardContent>
        <P>Incluye libreria de componentes, documentacion y soporte.</P>
      </CardContent>
      <CardFooter>
        <Badge>Activo</Badge>
      </CardFooter>
    </Card>
  )
};

export const LoadingPrimitives: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "18rem" }}>
      <Skeleton style={{ height: "1rem", width: "12rem" }} />
      <Skeleton style={{ height: "3rem", width: "100%" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Spinner />
        <Spinner size="sm" />
        <Spinner size="lg" />
      </div>
    </div>
  )
};

export const TypographyScale: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.5rem", maxWidth: "36rem" }}>
      <H1>Heading One</H1>
      <H2>Heading Two</H2>
      <H3>Heading Three</H3>
      <P>
        Texto de parrafo para validar ritmo vertical, legibilidad y consistencia en la escala tipografica del
        sistema.
      </P>
      <Small>Small text</Small>
      <Muted>Muted supporting text</Muted>
      <Separator />
      <P>Contenido posterior al separador.</P>
    </div>
  )
};
