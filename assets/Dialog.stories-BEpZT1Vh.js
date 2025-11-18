import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as c,R as r}from"./index-ClcD9ViR.js";import{r as de}from"./index-BUAr5TKG.js";import{c as ue,d as pe,l as me}from"./theme.css-BRoovXax.js";import{B as t}from"./Button-BujpQ8YS.js";import"./_commonjsHelpers-Cpj98o6Y.js";var fe="vedkmh4",ge="vedkmh5",he={sm:"vedkmh6",md:"vedkmh7",lg:"vedkmh8",xl:"vedkmh9",full:"vedkmha"},Ce="vedkmhb",xe="vedkmhc",ye="vedkmhd",ke="vedkmhe",ve="vedkmhf",De="vedkmhg";const i=({open:s,onClose:o,size:n="md",title:l,description:a,children:ee,footer:v,showCloseButton:D=!0,closeOnOverlayClick:ne=!0,closeOnEscape:j=!0,mode:te="light",className:oe})=>{const[b,B]=c.useState(!1),[se,O]=c.useState(!1),ie=c.useRef(null),re=te==="dark"?pe:me;c.useEffect(()=>(O(!0),()=>O(!1)),[]);const u=c.useCallback(()=>{B(!0),setTimeout(()=>{B(!1),o()},200)},[o]);c.useEffect(()=>{if(!s||!j)return;const d=ce=>{ce.key==="Escape"&&u()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[s,j,u]),c.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]);const ae=d=>{ne&&d.target===d.currentTarget&&u()};if(!s&&!b||!se)return null;const le=e.jsx("div",{className:fe,onClick:ae,"data-state":b?"closing":"open",role:"presentation",children:e.jsxs("div",{ref:ie,className:ue(re,ge,he[n],oe),role:"dialog","aria-modal":"true","aria-labelledby":l?"dialog-title":void 0,"aria-describedby":a?"dialog-description":void 0,children:[(l||D)&&e.jsxs("div",{className:Ce,children:[e.jsxs("div",{style:{flex:1},children:[l&&e.jsx("h2",{id:"dialog-title",className:xe,children:l}),a&&e.jsx("p",{id:"dialog-description",className:De,children:a})]}),D&&e.jsx("button",{type:"button",className:ye,onClick:u,"aria-label":"Close dialog",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 5L5 15M5 5L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{className:ke,children:ee}),v&&e.jsx("div",{className:ve,children:v})]})});return de.createPortal(le,document.body)};try{i.displayName="Dialog",i.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"React.ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}},closeOnOverlayClick:{defaultValue:{value:"true"},description:"",name:"closeOnOverlayClick",required:!1,type:{name:"boolean"}},closeOnEscape:{defaultValue:{value:"true"},description:"",name:"closeOnEscape",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"light"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const we={title:"Components/Dialog",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{open:!1,onClose:()=>{},children:null},argTypes:{open:{control:"boolean",description:"Dialog 표시 여부",table:{type:{summary:"boolean"}}},size:{control:"select",options:["sm","md","lg","xl","full"],description:"Dialog 크기",table:{type:{summary:"DialogSize"},defaultValue:{summary:"md"}}},title:{control:"text",description:"Dialog 제목",table:{type:{summary:"string"}}},description:{control:"text",description:"Dialog 부제목/설명",table:{type:{summary:"string"}}},showCloseButton:{control:"boolean",description:"닫기 버튼 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnOverlayClick:{control:"boolean",description:"Overlay 클릭 시 닫기",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnEscape:{control:"boolean",description:"ESC 키로 닫기",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},mode:{control:"select",options:["light","dark"],description:"테마 모드",table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}}},p={render:function(){const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(i,{open:o,onClose:()=>n(!1),title:"Basic Dialog",description:"This is a basic dialog example",children:e.jsx("p",{children:"This is the dialog content. You can put any content here."})})]})}},m={render:function(){const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog with Footer"}),e.jsx(i,{open:o,onClose:()=>n(!1),title:"Confirm Action",description:"Are you sure you want to proceed?",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"This action cannot be undone. Please confirm to proceed."})})]})}},f={render:function(){const[o,n]=r.useState(null);return e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(t,{size:"sm",onClick:()=>n("sm"),children:"Small"}),e.jsx(t,{size:"sm",onClick:()=>n("md"),children:"Medium"}),e.jsx(t,{size:"sm",onClick:()=>n("lg"),children:"Large"}),e.jsx(t,{size:"sm",onClick:()=>n("xl"),children:"Extra Large"}),e.jsx(t,{size:"sm",onClick:()=>n("full"),children:"Full"}),o&&e.jsx(i,{open:!0,onClose:()=>n(null),size:o,title:`${o.toUpperCase()} Dialog`,description:"This demonstrates different dialog sizes",children:e.jsxs("p",{children:["This is a ",o," sized dialog. Dialog size can be adjusted using the size prop."]})})]})}},g={render:function(){const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Long Content Dialog"}),e.jsx(i,{open:o,onClose:()=>n(!1),title:"Terms and Conditions",description:"Please read carefully",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",onClick:()=>n(!1),children:"Decline"}),e.jsx(t,{onClick:()=>n(!1),children:"Accept"})]}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:Array.from({length:20},(l,a)=>e.jsxs("p",{children:[a+1,". This is a paragraph of terms and conditions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},a))})})]})}},h={render:function(){const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open (No Close Button)"}),e.jsx(i,{open:o,onClose:()=>n(!1),title:"Forced Action",description:"You must choose an option",showCloseButton:!1,closeOnOverlayClick:!1,closeOnEscape:!1,footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{intent:"danger",onClick:()=>n(!1),children:"Delete"})]}),children:e.jsx("p",{children:"This dialog requires you to make a choice. You cannot close it by clicking outside or pressing ESC."})})]})}},C={render:function(){const[o,n]=r.useState(!1),l=a=>{a.preventDefault(),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Create New Item"}),e.jsx(i,{open:o,onClose:()=>n(!1),title:"Create New Item",description:"Fill in the details below",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{type:"submit",form:"item-form",children:"Create"})]}),children:e.jsxs("form",{id:"item-form",onSubmit:l,style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"0.5rem"},children:"Name"}),e.jsx("input",{id:"name",type:"text",placeholder:"Enter name",required:!0,style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ddd"}})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"description",style:{display:"block",marginBottom:"0.5rem"},children:"Description"}),e.jsx("textarea",{id:"description",placeholder:"Enter description",rows:4,style:{width:"100%",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ddd",resize:"vertical"}})]})]})})]})}},x={render:function(){const[o,n]=r.useState(!1);return e.jsxs("div",{style:{backgroundColor:"#1a1a1a",padding:"2rem",borderRadius:"8px"},children:[e.jsx(t,{mode:"dark",onClick:()=>n(!0),children:"Open Dark Dialog"}),e.jsx(i,{open:o,onClose:()=>n(!1),mode:"dark",title:"Dark Mode Dialog",description:"This dialog uses dark theme",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{mode:"dark",variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{mode:"dark",onClick:()=>n(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"This dialog is rendered in dark mode."})})]})}},y={render:function(){const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{intent:"danger",onClick:()=>n(!0),children:"Delete Item"}),e.jsx(i,{open:o,onClose:()=>n(!1),size:"sm",title:"Delete Item?",description:"This action cannot be undone",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{intent:"danger",onClick:()=>n(!1),children:"Delete"})]}),children:e.jsx("p",{children:"Are you sure you want to delete this item? This action is permanent and cannot be reversed."})})]})}},k={render:function(){const[o,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{intent:"success",onClick:()=>n(!0),children:"Show Success"}),e.jsx(i,{open:o,onClose:()=>n(!1),size:"sm",title:"✅ Success!",description:"Your action was completed successfully",footer:e.jsx(t,{intent:"success",fullWidth:!0,onClick:()=>n(!1),children:"Continue"}),children:e.jsx("p",{style:{textAlign:"center"},children:"Your changes have been saved successfully."})})]})}};var S,z,w;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function BasicDialog() {
    const [open, setOpen] = React.useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)} title="Basic Dialog" description="This is a basic dialog example">
                    <p>This is the dialog content. You can put any content here.</p>
                </Dialog>
            </>;
  }
}`,...(w=(z=p.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var F,T,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function DialogWithFooter() {
    const [open, setOpen] = React.useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Dialog with Footer</Button>
                <Dialog open={open} onClose={() => setOpen(false)} title="Confirm Action" description="Are you sure you want to proceed?" footer={<>
                            <Button variant="ghost" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setOpen(false)}>Confirm</Button>
                        </>}>
                    <p>This action cannot be undone. Please confirm to proceed.</p>
                </Dialog>
            </>;
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var R,N,L;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: function DialogSizes() {
    const [size, setSize] = React.useState<"sm" | "md" | "lg" | "xl" | "full" | null>(null);
    return <div style={{
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap"
    }}>
                <Button size="sm" onClick={() => setSize("sm")}>
                    Small
                </Button>
                <Button size="sm" onClick={() => setSize("md")}>
                    Medium
                </Button>
                <Button size="sm" onClick={() => setSize("lg")}>
                    Large
                </Button>
                <Button size="sm" onClick={() => setSize("xl")}>
                    Extra Large
                </Button>
                <Button size="sm" onClick={() => setSize("full")}>
                    Full
                </Button>
                {size && <Dialog open={true} onClose={() => setSize(null)} size={size} title={\`\${size.toUpperCase()} Dialog\`} description="This demonstrates different dialog sizes">
                        <p>
                            This is a {size} sized dialog. Dialog size can be adjusted using
                            the size prop.
                        </p>
                    </Dialog>}
            </div>;
  }
}`,...(L=(N=f.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var q,V,A;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function DialogLongContent() {
    const [open, setOpen] = React.useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Long Content Dialog</Button>
                <Dialog open={open} onClose={() => setOpen(false)} title="Terms and Conditions" description="Please read carefully" footer={<>
                            <Button variant="ghost" onClick={() => setOpen(false)}>
                                Decline
                            </Button>
                            <Button onClick={() => setOpen(false)}>Accept</Button>
                        </>}>
                    <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
                        {Array.from({
            length: 20
          }, (_, i) => <p key={i}>
                                {i + 1}. This is a paragraph of terms and conditions. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>)}
                    </div>
                </Dialog>
            </>;
  }
}`,...(A=(V=g.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var W,_,M;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: function DialogWithoutClose() {
    const [open, setOpen] = React.useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open (No Close Button)</Button>
                <Dialog open={open} onClose={() => setOpen(false)} title="Forced Action" description="You must choose an option" showCloseButton={false} closeOnOverlayClick={false} closeOnEscape={false} footer={<>
                            <Button variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button intent="danger" onClick={() => setOpen(false)}>
                                Delete
                            </Button>
                        </>}>
                    <p>
                        This dialog requires you to make a choice. You cannot close it by
                        clicking outside or pressing ESC.
                    </p>
                </Dialog>
            </>;
  }
}`,...(M=(_=h.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var I,Y,P;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function DialogForm() {
    const [open, setOpen] = React.useState(false);
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setOpen(false);
    };
    return <>
                <Button onClick={() => setOpen(true)}>Create New Item</Button>
                <Dialog open={open} onClose={() => setOpen(false)} title="Create New Item" description="Fill in the details below" footer={<>
                            <Button variant="ghost" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" form="item-form">
                                Create
                            </Button>
                        </>}>
                    <form id="item-form" onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
                        <div>
                            <label htmlFor="name" style={{
              display: "block",
              marginBottom: "0.5rem"
            }}>
                                Name
                            </label>
                            <input id="name" type="text" placeholder="Enter name" required style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }} />
                        </div>
                        <div>
                            <label htmlFor="description" style={{
              display: "block",
              marginBottom: "0.5rem"
            }}>
                                Description
                            </label>
                            <textarea id="description" placeholder="Enter description" rows={4} style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
              resize: "vertical"
            }} />
                        </div>
                    </form>
                </Dialog>
            </>;
  }
}`,...(P=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var U,G,H;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function DialogDarkMode() {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      backgroundColor: "#1a1a1a",
      padding: "2rem",
      borderRadius: "8px"
    }}>
                <Button mode="dark" onClick={() => setOpen(true)}>
                    Open Dark Dialog
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)} mode="dark" title="Dark Mode Dialog" description="This dialog uses dark theme" footer={<>
                            <Button mode="dark" variant="ghost" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button mode="dark" onClick={() => setOpen(false)}>
                                Confirm
                            </Button>
                        </>}>
                    <p>This dialog is rendered in dark mode.</p>
                </Dialog>
            </div>;
  }
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: function DialogConfirmation() {
    const [open, setOpen] = React.useState(false);
    return <>
                <Button intent="danger" onClick={() => setOpen(true)}>
                    Delete Item
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)} size="sm" title="Delete Item?" description="This action cannot be undone" footer={<>
                            <Button variant="ghost" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button intent="danger" onClick={() => setOpen(false)}>
                                Delete
                            </Button>
                        </>}>
                    <p>
                        Are you sure you want to delete this item? This action is permanent
                        and cannot be reversed.
                    </p>
                </Dialog>
            </>;
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: function DialogSuccess() {
    const [open, setOpen] = React.useState(false);
    return <>
                <Button intent="success" onClick={() => setOpen(true)}>
                    Show Success
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)} size="sm" title="✅ Success!" description="Your action was completed successfully" footer={<Button intent="success" fullWidth onClick={() => setOpen(false)}>
                            Continue
                        </Button>}>
                    <p style={{
          textAlign: "center"
        }}>
                        Your changes have been saved successfully.
                    </p>
                </Dialog>
            </>;
  }
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Fe=["Basic","WithFooter","Sizes","LongContent","WithoutCloseButton","FormDialog","DarkMode","ConfirmationDialog","SuccessDialog"];export{p as Basic,y as ConfirmationDialog,x as DarkMode,C as FormDialog,g as LongContent,f as Sizes,k as SuccessDialog,m as WithFooter,h as WithoutCloseButton,Fe as __namedExportsOrder,we as default};
