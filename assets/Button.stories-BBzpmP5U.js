import{j as n}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import{B as e}from"./Button-BujpQ8YS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme.css-BRoovXax.js";const V={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","ghost"],description:"Button variant style"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},intent:{control:"select",options:["primary","secondary","success","warning","danger","neutral"],description:"Color intent based on design tokens"},mode:{control:"radio",options:["light","dark"],description:"Color mode (theme)"},fullWidth:{control:"boolean",description:"Full width button"},disabled:{control:"boolean",description:"Disabled state"}}},r={args:{children:"Primary Button",intent:"primary",variant:"solid",size:"lg",mode:"light"}},a={render:t=>n.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[n.jsx(e,{...t,variant:"solid",children:"Solid"}),n.jsx(e,{...t,variant:"outline",children:"Outline"}),n.jsx(e,{...t,variant:"ghost",children:"Ghost"})]}),args:{intent:"primary",mode:"light"}},i={render:t=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsx(e,{...t,size:"sm",children:"Small"}),n.jsx(e,{...t,size:"md",children:"Medium"}),n.jsx(e,{...t,size:"lg",children:"Large"})]}),args:{intent:"primary",variant:"solid",mode:"light"}},s={render:t=>n.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[n.jsx(e,{...t,intent:"primary",children:"Primary"}),n.jsx(e,{...t,intent:"secondary",children:"Secondary"}),n.jsx(e,{...t,intent:"success",children:"Success"}),n.jsx(e,{...t,intent:"warning",children:"Warning"}),n.jsx(e,{...t,intent:"danger",children:"Danger"}),n.jsx(e,{...t,intent:"neutral",children:"Neutral"})]}),args:{variant:"solid",mode:"light"}},o={render:t=>n.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px",backgroundColor:"#0b1120",borderRadius:"8px"},children:[n.jsx(e,{...t,intent:"primary",children:"Primary"}),n.jsx(e,{...t,intent:"secondary",children:"Secondary"}),n.jsx(e,{...t,intent:"success",children:"Success"}),n.jsx(e,{...t,intent:"warning",children:"Warning"}),n.jsx(e,{...t,intent:"danger",children:"Danger"}),n.jsx(e,{...t,intent:"neutral",children:"Neutral"})]}),args:{variant:"solid",mode:"dark"}},d={render:t=>n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx(e,{...t,variant:"solid",children:"Solid Disabled"}),n.jsx(e,{...t,variant:"outline",children:"Outline Disabled"}),n.jsx(e,{...t,variant:"ghost",children:"Ghost Disabled"})]}),args:{disabled:!0,intent:"primary",mode:"light"}},l={render:t=>n.jsx("div",{style:{width:"400px"},children:n.jsx(e,{...t,children:"Full Width Button"})}),args:{fullWidth:!0,intent:"primary",variant:"solid",mode:"light"}},c={args:{children:"Click me!",intent:"primary",variant:"solid",size:"md",mode:"light",disabled:!1,fullWidth:!1}};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    intent: "primary",
    variant: "solid",
    size: "lg",
    mode: "light"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    flexWrap: "wrap"
  }}>
            <Button {...args} variant="solid">
                Solid
            </Button>
            <Button {...args} variant="outline">
                Outline
            </Button>
            <Button {...args} variant="ghost">
                Ghost
            </Button>
        </div>,
  args: {
    intent: "primary",
    mode: "light"
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,B,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
            <Button {...args} size="sm">
                Small
            </Button>
            <Button {...args} size="md">
                Medium
            </Button>
            <Button {...args} size="lg">
                Large
            </Button>
        </div>,
  args: {
    intent: "primary",
    variant: "solid",
    mode: "light"
  }
}`,...(v=(B=i.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var j,f,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  }}>
            <Button {...args} intent="primary">
                Primary
            </Button>
            <Button {...args} intent="secondary">
                Secondary
            </Button>
            <Button {...args} intent="success">
                Success
            </Button>
            <Button {...args} intent="warning">
                Warning
            </Button>
            <Button {...args} intent="danger">
                Danger
            </Button>
            <Button {...args} intent="neutral">
                Neutral
            </Button>
        </div>,
  args: {
    variant: "solid",
    mode: "light"
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,W,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    padding: "24px",
    backgroundColor: "#0b1120",
    borderRadius: "8px"
  }}>
            <Button {...args} intent="primary">
                Primary
            </Button>
            <Button {...args} intent="secondary">
                Secondary
            </Button>
            <Button {...args} intent="success">
                Success
            </Button>
            <Button {...args} intent="warning">
                Warning
            </Button>
            <Button {...args} intent="danger">
                Danger
            </Button>
            <Button {...args} intent="neutral">
                Neutral
            </Button>
        </div>,
  args: {
    variant: "solid",
    mode: "dark"
  }
}`,...(D=(W=o.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var w,z,k;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "12px"
  }}>
            <Button {...args} variant="solid">
                Solid Disabled
            </Button>
            <Button {...args} variant="outline">
                Outline Disabled
            </Button>
            <Button {...args} variant="ghost">
                Ghost Disabled
            </Button>
        </div>,
  args: {
    disabled: true,
    intent: "primary",
    mode: "light"
  }
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var P,C,F;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "400px"
  }}>
            <Button {...args}>Full Width Button</Button>
        </div>,
  args: {
    fullWidth: true,
    intent: "primary",
    variant: "solid",
    mode: "light"
  }
}`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var O,G,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Click me!",
    intent: "primary",
    variant: "solid",
    size: "md",
    mode: "light",
    disabled: false,
    fullWidth: false
  }
}`,...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const _=["Primary","Variants","Sizes","Intents","DarkMode","Disabled","FullWidth","Playground"];export{o as DarkMode,d as Disabled,l as FullWidth,s as Intents,c as Playground,r as Primary,i as Sizes,a as Variants,_ as __namedExportsOrder,V as default};
