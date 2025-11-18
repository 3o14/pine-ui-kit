import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as oe}from"./index-ClcD9ViR.js";import{c as j,d as xe,l as ye}from"./theme.css-BRoovXax.js";import{c as fe}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./_commonjsHelpers-Cpj98o6Y.js";var Ce="_1y3ogog1",ve="_1y3ogog2",je=fe({defaultClassName:"_1y3ogog4 _1y3ogog3",variantClassNames:{size:{sm:"_1y3ogog5",md:"_1y3ogog6",lg:"_1y3ogog7"},intent:{primary:"_1y3ogog8",secondary:"_1y3ogog9",success:"_1y3ogoga",warning:"_1y3ogogb",danger:"_1y3ogogc",neutral:"_1y3ogogd"},checked:{true:"_1y3ogoge",false:"_1y3ogogf"}},defaultVariants:{size:"md",intent:"primary",checked:!1},compoundVariants:[[{intent:"primary",checked:!1},"_1y3ogogg"],[{intent:"primary",checked:!0},"_1y3ogogh"],[{intent:"secondary",checked:!1},"_1y3ogogi"],[{intent:"secondary",checked:!0},"_1y3ogogj"],[{intent:"success",checked:!1},"_1y3ogogk"],[{intent:"success",checked:!0},"_1y3ogogl"],[{intent:"warning",checked:!1},"_1y3ogogm"],[{intent:"warning",checked:!0},"_1y3ogogn"],[{intent:"danger",checked:!1},"_1y3ogogo"],[{intent:"danger",checked:!0},"_1y3ogogp"],[{intent:"neutral",checked:!1},"_1y3ogogq"],[{intent:"neutral",checked:!0},"_1y3ogogr"]]}),De="_1y3ogogs",ze="_1y3ogogt",Se={sm:"_1y3ogogu",md:"_1y3ogogv",lg:"_1y3ogogw"};const n=({size:l="md",intent:r="primary",label:a,checked:c,disabled:ie=!1,mode:me="light",className:ue,onChange:y,...he})=>{const ge=me==="dark"?xe:ye,[ke,be]=oe.useState(!1),C=c!==void 0,f=C?c:ke,pe=v=>{C||be(v.target.checked),y==null||y(v)};return e.jsxs("label",{className:j(ge,Ce,ue),children:[e.jsx("input",{type:"checkbox",className:ve,checked:f,disabled:ie,onChange:pe,...he}),e.jsx("span",{className:je({size:l,intent:r,checked:f}),children:e.jsx("svg",{className:De,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.3334 4L6.00002 11.3333L2.66669 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:16,strokeDashoffset:f?0:16}})})}),a&&e.jsx("span",{className:j(ze,Se[l]),children:a})]})};try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"light"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const Ue={title:"Components/Checkbox",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"체크박스 크기",table:{type:{summary:"CheckboxSize"},defaultValue:{summary:"md"}}},intent:{control:"select",options:["primary","secondary","success","warning","danger","neutral"],description:"체크박스 색상 테마",table:{type:{summary:"CheckboxIntent"},defaultValue:{summary:"primary"}}},label:{control:"text",description:"체크박스 옆에 표시할 레이블",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"체크 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성화 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},mode:{control:"select",options:["light","dark"],description:"테마 모드",table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}}},s={args:{label:"Default Checkbox (Uncontrolled)"}},t={args:{label:"Checked Checkbox (Controlled)",checked:!0}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Uncontrolled 모드:"})," checked prop 없이 사용하면 내부에서 상태를 관리합니다."]}),e.jsx(n,{label:"그냥 클릭해보세요! (상태 자동 관리)"}),e.jsx(n,{label:"이것도 클릭해보세요!",intent:"success"}),e.jsx(n,{label:"체크박스 여러 개",intent:"warning"})]})},o={args:{checked:!1}},i={args:{label:"Disabled Checkbox",checked:!1,disabled:!0}},m={args:{label:"Disabled Checked",checked:!0,disabled:!0}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{size:"sm",label:"Small (16px)",checked:!0}),e.jsx(n,{size:"md",label:"Medium (20px)",checked:!0}),e.jsx(n,{size:"lg",label:"Large (24px)",checked:!0})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{intent:"success",label:"Success",checked:!0}),e.jsx(n,{intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{intent:"neutral",label:"Neutral",checked:!0})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Small"}),e.jsx(n,{size:"sm",intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{size:"sm",intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{size:"sm",intent:"success",label:"Success",checked:!0}),e.jsx(n,{size:"sm",intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{size:"sm",intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{size:"sm",intent:"neutral",label:"Neutral",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Medium"}),e.jsx(n,{size:"md",intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{size:"md",intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{size:"md",intent:"success",label:"Success",checked:!0}),e.jsx(n,{size:"md",intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{size:"md",intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{size:"md",intent:"neutral",label:"Neutral",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Large"}),e.jsx(n,{size:"lg",intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{size:"lg",intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{size:"lg",intent:"success",label:"Success",checked:!0}),e.jsx(n,{size:"lg",intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{size:"lg",intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{size:"lg",intent:"neutral",label:"Neutral",checked:!0})]})]})},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Unchecked"}),e.jsx(n,{label:"Hover me",checked:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Checked"}),e.jsx(n,{label:"Hover me",checked:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Disabled"}),e.jsx(n,{label:"Disabled unchecked",checked:!1,disabled:!0}),e.jsx("br",{}),e.jsx(n,{label:"Disabled checked",checked:!0,disabled:!0})]})]})},b={render:()=>e.jsx("div",{style:{backgroundColor:"#1a1a1a",padding:"2rem",borderRadius:"8px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{mode:"dark",label:"Primary (Dark)",intent:"primary",checked:!0}),e.jsx(n,{mode:"dark",label:"Secondary (Dark)",intent:"secondary",checked:!0}),e.jsx(n,{mode:"dark",label:"Success (Dark)",intent:"success",checked:!0}),e.jsx(n,{mode:"dark",label:"Warning (Dark)",intent:"warning",checked:!0}),e.jsx(n,{mode:"dark",label:"Danger (Dark)",intent:"danger",checked:!0}),e.jsx(n,{mode:"dark",label:"Neutral (Dark)",intent:"neutral",checked:!0})]})})},p={render:()=>e.jsx("form",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"300px"},children:e.jsxs("fieldset",{style:{border:"none",padding:0,margin:0},children:[e.jsx("legend",{style:{marginBottom:"1rem",fontWeight:"bold"},children:"Select your interests:"}),e.jsx(n,{label:"Web Development"}),e.jsx(n,{label:"Mobile Development"}),e.jsx(n,{label:"UI/UX Design",checked:!0}),e.jsx(n,{label:"Backend Development"}),e.jsx(n,{label:"DevOps"})]})})},x={render:function(){const[r,a]=oe.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{label:"Toggle me",checked:r,onChange:c=>a(c.target.checked)}),e.jsxs("p",{children:["Current state: ",r?"✅ Checked":"⬜ Unchecked"]}),e.jsx("button",{type:"button",onClick:()=>a(!r),style:{padding:"0.5rem 1rem",cursor:"pointer",borderRadius:"4px",border:"1px solid #ddd"},children:"Toggle Programmatically"})]})}};var D,z,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Default Checkbox (Uncontrolled)"
  }
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var _,w,N;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Checked Checkbox (Controlled)",
    checked: true
  }
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var W,B,U;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <p>
                <strong>Uncontrolled 모드:</strong> checked prop 없이 사용하면 내부에서
                상태를 관리합니다.
            </p>
            <Checkbox label="그냥 클릭해보세요! (상태 자동 관리)" />
            <Checkbox label="이것도 클릭해보세요!" intent="success" />
            <Checkbox label="체크박스 여러 개" intent="warning" />
        </div>
}`,...(U=(B=d.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var I,V,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(P=(V=o.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var L,M,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checkbox",
    checked: false,
    disabled: true
  }
}`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var q,T,E;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Disabled Checked",
    checked: true,
    disabled: true
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var H,F,O;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <Checkbox size="sm" label="Small (16px)" checked />
            <Checkbox size="md" label="Medium (20px)" checked />
            <Checkbox size="lg" label="Large (24px)" checked />
        </div>
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var A,X,G;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <Checkbox intent="primary" label="Primary" checked />
            <Checkbox intent="secondary" label="Secondary" checked />
            <Checkbox intent="success" label="Success" checked />
            <Checkbox intent="warning" label="Warning" checked />
            <Checkbox intent="danger" label="Danger" checked />
            <Checkbox intent="neutral" label="Neutral" checked />
        </div>
}`,...(G=(X=h.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "2rem"
  }}>
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Small</h4>
                <Checkbox size="sm" intent="primary" label="Primary" checked />
                <Checkbox size="sm" intent="secondary" label="Secondary" checked />
                <Checkbox size="sm" intent="success" label="Success" checked />
                <Checkbox size="sm" intent="warning" label="Warning" checked />
                <Checkbox size="sm" intent="danger" label="Danger" checked />
                <Checkbox size="sm" intent="neutral" label="Neutral" checked />
            </div>
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Medium</h4>
                <Checkbox size="md" intent="primary" label="Primary" checked />
                <Checkbox size="md" intent="secondary" label="Secondary" checked />
                <Checkbox size="md" intent="success" label="Success" checked />
                <Checkbox size="md" intent="warning" label="Warning" checked />
                <Checkbox size="md" intent="danger" label="Danger" checked />
                <Checkbox size="md" intent="neutral" label="Neutral" checked />
            </div>
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Large</h4>
                <Checkbox size="lg" intent="primary" label="Primary" checked />
                <Checkbox size="lg" intent="secondary" label="Secondary" checked />
                <Checkbox size="lg" intent="success" label="Success" checked />
                <Checkbox size="lg" intent="warning" label="Warning" checked />
                <Checkbox size="lg" intent="danger" label="Danger" checked />
                <Checkbox size="lg" intent="neutral" label="Neutral" checked />
            </div>
        </div>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <div>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Unchecked</h4>
                <Checkbox label="Hover me" checked={false} />
            </div>
            <div>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Checked</h4>
                <Checkbox label="Hover me" checked={true} />
            </div>
            <div>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Disabled</h4>
                <Checkbox label="Disabled unchecked" checked={false} disabled />
                <br />
                <Checkbox label="Disabled checked" checked={true} disabled />
            </div>
        </div>
}`,...($=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: "#1a1a1a",
    padding: "2rem",
    borderRadius: "8px"
  }}>
            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
                <Checkbox mode="dark" label="Primary (Dark)" intent="primary" checked />
                <Checkbox mode="dark" label="Secondary (Dark)" intent="secondary" checked />
                <Checkbox mode="dark" label="Success (Dark)" intent="success" checked />
                <Checkbox mode="dark" label="Warning (Dark)" intent="warning" checked />
                <Checkbox mode="dark" label="Danger (Dark)" intent="danger" checked />
                <Checkbox mode="dark" label="Neutral (Dark)" intent="neutral" checked />
            </div>
        </div>
}`,...(re=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,le,ce;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "300px"
  }}>
            <fieldset style={{
      border: "none",
      padding: 0,
      margin: 0
    }}>
                <legend style={{
        marginBottom: "1rem",
        fontWeight: "bold"
      }}>
                    Select your interests:
                </legend>
                <Checkbox label="Web Development" />
                <Checkbox label="Mobile Development" />
                <Checkbox label="UI/UX Design" checked />
                <Checkbox label="Backend Development" />
                <Checkbox label="DevOps" />
            </fieldset>
        </form>
}`,...(ce=(le=p.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var se,te,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
                <Checkbox label="Toggle me" checked={checked} onChange={e => setChecked(e.target.checked)} />
                <p>Current state: {checked ? "✅ Checked" : "⬜ Unchecked"}</p>
                <button type="button" onClick={() => setChecked(!checked)} style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
        borderRadius: "4px",
        border: "1px solid #ddd"
      }}>
                    Toggle Programmatically
                </button>
            </div>;
  }
}`,...(de=(te=x.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};const Ie=["Default","Checked","Uncontrolled","WithoutLabel","Disabled","DisabledChecked","Sizes","Intents","SizesAndIntents","InteractiveStates","DarkMode","FormExample","ControlledExample"];export{t as Checked,x as ControlledExample,b as DarkMode,s as Default,i as Disabled,m as DisabledChecked,p as FormExample,h as Intents,k as InteractiveStates,u as Sizes,g as SizesAndIntents,d as Uncontrolled,o as WithoutLabel,Ie as __namedExportsOrder,Ue as default};
