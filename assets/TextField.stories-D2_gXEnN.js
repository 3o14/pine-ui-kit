import{j as e}from"./jsx-runtime-BYYWji4R.js";import"./index-ClcD9ViR.js";import{c as x,d as ue,l as pe}from"./theme.css-BRoovXax.js";import{c as ce}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./_commonjsHelpers-Cpj98o6Y.js";var me="sdxjsr0",he={default:"sdxjsr1",fullWidth:"sdxjsr2"},xe="sdxjsr3",ge={sm:"sdxjsr4",md:"sdxjsr5",lg:"sdxjsr6"},fe="sdxjsr7",ve={default:"sdxjsr8",error:"sdxjsr9",success:"sdxjsra"},be=ce({defaultClassName:"sdxjsrc sdxjsrb",variantClassNames:{size:{sm:"sdxjsrd",md:"sdxjsre",lg:"sdxjsrf"},variant:{outline:"sdxjsrg",filled:"sdxjsrh"},status:{default:"sdxjsri",error:"sdxjsrj",success:"sdxjsrk"}},defaultVariants:{size:"md",variant:"outline",status:"default"},compoundVariants:[[{variant:"outline",status:"default"},"sdxjsrl"],[{variant:"outline",status:"error"},"sdxjsrm"],[{variant:"outline",status:"success"},"sdxjsrn"],[{variant:"filled",status:"default"},"sdxjsro"],[{variant:"filled",status:"error"},"sdxjsrp"],[{variant:"filled",status:"success"},"sdxjsrq"]]});const l=({size:a="md",variant:ae="outline",status:le="default",label:g,helperText:f,error:re=!1,fullWidth:se=!1,mode:te="light",disabled:ie=!1,className:ne,...de})=>{const oe=te==="dark"?ue:pe,v=re?"error":le;return e.jsxs("div",{className:x(oe,me,he[se?"fullWidth":"default"],ne),children:[g&&e.jsx("label",{className:x(xe,ge[a]),children:g}),e.jsx("input",{className:be({size:a,variant:ae,status:v}),disabled:ie,...de}),f&&e.jsx("span",{className:x(fe,ve[v]),children:f})]})};try{l.displayName="TextField",l.__docgenInfo={description:"",displayName:"TextField",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"filled"'}]}},status:{defaultValue:{value:"default"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"error"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"",name:"error",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"light"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const De={title:"Components/TextField",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"TextField size"},variant:{control:"select",options:["outline","filled"],description:"TextField variant style"},status:{control:"select",options:["default","error","success"],description:"TextField status state"},mode:{control:"radio",options:["light","dark"],description:"Color mode (theme)"},fullWidth:{control:"boolean",description:"Full width field"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state (overrides status)"}}},r={args:{placeholder:"Enter text...",size:"md",variant:"outline",mode:"light"}},s={args:{label:"Email Address",placeholder:"example@email.com",type:"email",size:"md",variant:"outline",mode:"light"}},t={args:{label:"Username",placeholder:"johndoe",helperText:"Choose a unique username",size:"md",variant:"outline",mode:"light"}},i={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{...a,size:"sm",label:"Small",placeholder:"Small size"}),e.jsx(l,{...a,size:"md",label:"Medium",placeholder:"Medium size"}),e.jsx(l,{...a,size:"lg",label:"Large",placeholder:"Large size"})]}),args:{variant:"outline",mode:"light"}},n={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{...a,variant:"outline",label:"Outline Variant",placeholder:"Outline style"}),e.jsx(l,{...a,variant:"filled",label:"Filled Variant",placeholder:"Filled style"})]}),args:{size:"md",mode:"light"}},d={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{...a,status:"default",label:"Default",placeholder:"Default state",helperText:"This is a default field"}),e.jsx(l,{...a,status:"success",label:"Success",placeholder:"Success state",helperText:"Great! This looks good"}),e.jsx(l,{...a,status:"error",label:"Error",placeholder:"Error state",helperText:"Something went wrong"})]}),args:{variant:"outline",mode:"light"}},o={args:{label:"Password",placeholder:"Enter password",type:"password",error:!0,helperText:"Password must be at least 8 characters",variant:"outline",mode:"light"}},u={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(l,{...a,variant:"outline",label:"Outline Disabled",placeholder:"Disabled"}),e.jsx(l,{...a,variant:"filled",label:"Filled Disabled",placeholder:"Disabled"})]}),args:{disabled:!0,helperText:"This field is disabled",mode:"light"}},p={render:a=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(l,{...a})}),args:{label:"Full Width Field",placeholder:"This field spans the full width",fullWidth:!0,helperText:"Takes up all available width",variant:"outline",mode:"light"}},c={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",backgroundColor:"#0b1120",borderRadius:"8px",width:"300px"},children:[e.jsx(l,{...a,label:"Username",placeholder:"Enter username",helperText:"Choose a unique username"}),e.jsx(l,{...a,label:"Email",type:"email",placeholder:"your@email.com",status:"success",helperText:"Email is available"}),e.jsx(l,{...a,label:"Password",type:"password",placeholder:"Enter password",error:!0,helperText:"Password is too short"})]}),args:{variant:"outline",mode:"dark"}},m={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(l,{...a,label:"First Name",placeholder:"John",helperText:"Enter your first name"}),e.jsx(l,{...a,label:"Last Name",placeholder:"Doe",helperText:"Enter your last name"}),e.jsx(l,{...a,label:"Email",type:"email",placeholder:"john.doe@example.com",status:"success",helperText:"Email format is correct"}),e.jsx(l,{...a,label:"Phone",type:"tel",placeholder:"+1 (555) 000-0000",helperText:"Include country code"})]}),args:{variant:"outline",mode:"light"}},h={args:{label:"Label",placeholder:"Type something...",helperText:"Helper text goes here",size:"md",variant:"outline",status:"default",mode:"light",disabled:!1,error:!1,fullWidth:!1}};var b,T,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text...",
    size: "md",
    variant: "outline",
    mode: "light"
  }
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var j,F,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "example@email.com",
    type: "email",
    size: "md",
    variant: "outline",
    mode: "light"
  }
}`,...(w=(F=s.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var D,E,S;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "johndoe",
    helperText: "Choose a unique username",
    size: "md",
    variant: "outline",
    mode: "light"
  }
}`,...(S=(E=t.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var z,W,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px"
  }}>
            <TextField {...args} size="sm" label="Small" placeholder="Small size" />
            <TextField {...args} size="md" label="Medium" placeholder="Medium size" />
            <TextField {...args} size="lg" label="Large" placeholder="Large size" />
        </div>,
  args: {
    variant: "outline",
    mode: "light"
  }
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var k,q,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px"
  }}>
            <TextField {...args} variant="outline" label="Outline Variant" placeholder="Outline style" />
            <TextField {...args} variant="filled" label="Filled Variant" placeholder="Filled style" />
        </div>,
  args: {
    size: "md",
    mode: "light"
  }
}`,...(N=(q=n.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var P,C,L;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px"
  }}>
            <TextField {...args} status="default" label="Default" placeholder="Default state" helperText="This is a default field" />
            <TextField {...args} status="success" label="Success" placeholder="Success state" helperText="Great! This looks good" />
            <TextField {...args} status="error" label="Error" placeholder="Error state" helperText="Something went wrong" />
        </div>,
  args: {
    variant: "outline",
    mode: "light"
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var _,O,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    error: true,
    helperText: "Password must be at least 8 characters",
    variant: "outline",
    mode: "light"
  }
}`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var H,R,U;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px"
  }}>
            <TextField {...args} variant="outline" label="Outline Disabled" placeholder="Disabled" />
            <TextField {...args} variant="filled" label="Filled Disabled" placeholder="Disabled" />
        </div>,
  args: {
    disabled: true,
    helperText: "This field is disabled",
    mode: "light"
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var I,A,G;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    maxWidth: "600px"
  }}>
            <TextField {...args} />
        </div>,
  args: {
    label: "Full Width Field",
    placeholder: "This field spans the full width",
    fullWidth: true,
    helperText: "Takes up all available width",
    variant: "outline",
    mode: "light"
  }
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,B,K;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px",
    backgroundColor: "#0b1120",
    borderRadius: "8px",
    width: "300px"
  }}>
            <TextField {...args} label="Username" placeholder="Enter username" helperText="Choose a unique username" />
            <TextField {...args} label="Email" type="email" placeholder="your@email.com" status="success" helperText="Email is available" />
            <TextField {...args} label="Password" type="password" placeholder="Enter password" error helperText="Password is too short" />
        </div>,
  args: {
    variant: "outline",
    mode: "dark"
  }
}`,...(K=(B=c.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var Q,X,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "400px"
  }}>
            <TextField {...args} label="First Name" placeholder="John" helperText="Enter your first name" />
            <TextField {...args} label="Last Name" placeholder="Doe" helperText="Enter your last name" />
            <TextField {...args} label="Email" type="email" placeholder="john.doe@example.com" status="success" helperText="Email format is correct" />
            <TextField {...args} label="Phone" type="tel" placeholder="+1 (555) 000-0000" helperText="Include country code" />
        </div>,
  args: {
    variant: "outline",
    mode: "light"
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Type something...",
    helperText: "Helper text goes here",
    size: "md",
    variant: "outline",
    status: "default",
    mode: "light",
    disabled: false,
    error: false,
    fullWidth: false
  }
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ee=["Default","WithLabel","WithHelperText","Sizes","Variants","StatusStates","Error","Disabled","FullWidth","DarkMode","FormExample","Playground"];export{c as DarkMode,r as Default,u as Disabled,o as Error,m as FormExample,p as FullWidth,h as Playground,i as Sizes,d as StatusStates,n as Variants,t as WithHelperText,s as WithLabel,Ee as __namedExportsOrder,De as default};
