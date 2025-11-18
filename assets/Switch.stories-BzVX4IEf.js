import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as de}from"./index-ClcD9ViR.js";import{c as v,d as be,l as je}from"./theme.css-BRoovXax.js";import{c as oe}from"./createRuntimeFn-62c9670f.esm-BkdTE7RR.js";import"./_commonjsHelpers-Cpj98o6Y.js";var Se="e50mdj0",fe="e50mdj1",ve=oe({defaultClassName:"e50mdj3 e50mdj2",variantClassNames:{size:{sm:"e50mdj4",md:"e50mdj5",lg:"e50mdj6"},intent:{primary:"e50mdj7",secondary:"e50mdj8",success:"e50mdj9",warning:"e50mdja",danger:"e50mdjb",neutral:"e50mdjc"},checked:{true:"e50mdjd",false:"e50mdje"}},defaultVariants:{size:"md",intent:"primary",checked:!1},compoundVariants:[[{intent:"primary",checked:!1},"e50mdjf"],[{intent:"primary",checked:!0},"e50mdjg"],[{intent:"secondary",checked:!1},"e50mdjh"],[{intent:"secondary",checked:!0},"e50mdji"],[{intent:"success",checked:!1},"e50mdjj"],[{intent:"success",checked:!0},"e50mdjk"],[{intent:"warning",checked:!1},"e50mdjl"],[{intent:"warning",checked:!0},"e50mdjm"],[{intent:"danger",checked:!1},"e50mdjn"],[{intent:"danger",checked:!0},"e50mdjo"],[{intent:"neutral",checked:!1},"e50mdjp"],[{intent:"neutral",checked:!0},"e50mdjq"]]}),we=oe({defaultClassName:"e50mdjs e50mdjr",variantClassNames:{size:{sm:"e50mdjt",md:"e50mdju",lg:"e50mdjv"},checked:{true:"e50mdjw",false:"e50mdjx"}},defaultVariants:{size:"md",checked:!1},compoundVariants:[[{size:"sm",checked:!0},"e50mdjy"],[{size:"md",checked:!0},"e50mdjz"],[{size:"lg",checked:!0},"e50mdj10"]]}),ze="e50mdj11",De={sm:"e50mdj12",md:"e50mdj13",lg:"e50mdj14"};const n=({size:t="md",intent:r="primary",label:a,checked:s,disabled:me=!1,mode:ue="light",className:he,onChange:b,...pe})=>{const ge=ue==="dark"?be:je,[ye,xe]=de.useState(!1),S=s!==void 0,j=S?s:ye,ke=f=>{S||xe(f.target.checked),b==null||b(f)};return e.jsxs("label",{className:v(ge,Se,he),children:[e.jsx("input",{type:"checkbox",role:"switch",className:fe,checked:j,disabled:me,onChange:ke,...pe}),e.jsx("span",{className:ve({size:t,intent:r,checked:j}),children:e.jsx("span",{className:we({size:t,checked:j})})}),a&&e.jsx("span",{className:v(ze,De[t]),children:a})]})};try{n.displayName="Switch",n.__docgenInfo={description:"",displayName:"Switch",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"light"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const Re={title:"Components/Switch",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"스위치 크기",table:{type:{summary:"SwitchSize"},defaultValue:{summary:"md"}}},intent:{control:"select",options:["primary","secondary","success","warning","danger","neutral"],description:"스위치 색상 테마",table:{type:{summary:"SwitchIntent"},defaultValue:{summary:"primary"}}},label:{control:"text",description:"스위치 옆에 표시할 레이블",table:{type:{summary:"string"}}},checked:{control:"boolean",description:"ON/OFF 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성화 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},mode:{control:"select",options:["light","dark"],description:"테마 모드",table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}}},i={args:{label:"Default Switch (Uncontrolled)"}},l={args:{label:"Switch ON",checked:!0}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Uncontrolled 모드:"})," checked prop 없이 사용하면 내부에서 상태를 관리합니다."]}),e.jsx(n,{label:"알림 받기"}),e.jsx(n,{label:"자동 저장",intent:"success"}),e.jsx(n,{label:"다크 모드",intent:"neutral"})]})},d={args:{}},o={args:{label:"Disabled Switch",disabled:!0}},m={args:{label:"Disabled Switch (ON)",checked:!0,disabled:!0}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{size:"sm",label:"Small (36x18px)",checked:!0}),e.jsx(n,{size:"md",label:"Medium (48x24px)",checked:!0}),e.jsx(n,{size:"lg",label:"Large (60x30px)",checked:!0})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{intent:"success",label:"Success",checked:!0}),e.jsx(n,{intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{intent:"neutral",label:"Neutral",checked:!0})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Small"}),e.jsx(n,{size:"sm",intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{size:"sm",intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{size:"sm",intent:"success",label:"Success",checked:!0}),e.jsx(n,{size:"sm",intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{size:"sm",intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{size:"sm",intent:"neutral",label:"Neutral",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Medium"}),e.jsx(n,{size:"md",intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{size:"md",intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{size:"md",intent:"success",label:"Success",checked:!0}),e.jsx(n,{size:"md",intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{size:"md",intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{size:"md",intent:"neutral",label:"Neutral",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Large"}),e.jsx(n,{size:"lg",intent:"primary",label:"Primary",checked:!0}),e.jsx(n,{size:"lg",intent:"secondary",label:"Secondary",checked:!0}),e.jsx(n,{size:"lg",intent:"success",label:"Success",checked:!0}),e.jsx(n,{size:"lg",intent:"warning",label:"Warning",checked:!0}),e.jsx(n,{size:"lg",intent:"danger",label:"Danger",checked:!0}),e.jsx(n,{size:"lg",intent:"neutral",label:"Neutral",checked:!0})]})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"OFF State"}),e.jsx(n,{label:"Click to turn ON"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"ON State"}),e.jsx(n,{label:"Click to turn OFF",checked:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:0,marginBottom:"0.5rem"},children:"Disabled"}),e.jsx(n,{label:"Disabled OFF",disabled:!0}),e.jsx("br",{}),e.jsx(n,{label:"Disabled ON",checked:!0,disabled:!0})]})]})},y={render:()=>e.jsx("div",{style:{backgroundColor:"#1a1a1a",padding:"2rem",borderRadius:"8px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{mode:"dark",label:"Primary (Dark)",intent:"primary",checked:!0}),e.jsx(n,{mode:"dark",label:"Secondary (Dark)",intent:"secondary",checked:!0}),e.jsx(n,{mode:"dark",label:"Success (Dark)",intent:"success",checked:!0}),e.jsx(n,{mode:"dark",label:"Warning (Dark)",intent:"warning",checked:!0}),e.jsx(n,{mode:"dark",label:"Danger (Dark)",intent:"danger",checked:!0}),e.jsx(n,{mode:"dark",label:"Neutral (Dark)",intent:"neutral",checked:!0})]})})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"400px",padding:"1.5rem",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:0,marginBottom:"0.5rem"},children:"Settings"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Push Notifications"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"#666"},children:"Receive push notifications"})]}),e.jsx(n,{intent:"primary"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Email Notifications"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"#666"},children:"Receive email updates"})]}),e.jsx(n,{intent:"primary",checked:!0})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Auto Save"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"#666"},children:"Automatically save your work"})]}),e.jsx(n,{intent:"success",checked:!0})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Dark Mode"}),e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"#666"},children:"Use dark theme"})]}),e.jsx(n,{intent:"neutral"})]})]})},k={render:function(){const[r,a]=de.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(n,{label:"Toggle me",checked:r,onChange:s=>a(s.target.checked)}),e.jsxs("p",{children:["Current state: ",r?"🟢 ON":"⚪ OFF"]}),e.jsx("button",{type:"button",onClick:()=>a(!r),style:{padding:"0.5rem 1rem",cursor:"pointer",borderRadius:"4px",border:"1px solid #ddd"},children:"Toggle Programmatically"})]})}};var w,z,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Default Switch (Uncontrolled)"
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var C,N,O;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Switch ON",
    checked: true
  }
}`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var F,I,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <p>
                <strong>Uncontrolled 모드:</strong> checked prop 없이 사용하면 내부에서
                상태를 관리합니다.
            </p>
            <Switch label="알림 받기" />
            <Switch label="자동 저장" intent="success" />
            <Switch label="다크 모드" intent="neutral" />
        </div>
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,B,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var W,_,E;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch",
    disabled: true
  }
}`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,U,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "Disabled Switch (ON)",
    checked: true,
    disabled: true
  }
}`,...(q=(U=m.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var T,A,L;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <Switch size="sm" label="Small (36x18px)" checked />
            <Switch size="md" label="Medium (48x24px)" checked />
            <Switch size="lg" label="Large (60x30px)" checked />
        </div>
}`,...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>
            <Switch intent="primary" label="Primary" checked />
            <Switch intent="secondary" label="Secondary" checked />
            <Switch intent="success" label="Success" checked />
            <Switch intent="warning" label="Warning" checked />
            <Switch intent="danger" label="Danger" checked />
            <Switch intent="neutral" label="Neutral" checked />
        </div>
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
                <Switch size="sm" intent="primary" label="Primary" checked />
                <Switch size="sm" intent="secondary" label="Secondary" checked />
                <Switch size="sm" intent="success" label="Success" checked />
                <Switch size="sm" intent="warning" label="Warning" checked />
                <Switch size="sm" intent="danger" label="Danger" checked />
                <Switch size="sm" intent="neutral" label="Neutral" checked />
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
                <Switch size="md" intent="primary" label="Primary" checked />
                <Switch size="md" intent="secondary" label="Secondary" checked />
                <Switch size="md" intent="success" label="Success" checked />
                <Switch size="md" intent="warning" label="Warning" checked />
                <Switch size="md" intent="danger" label="Danger" checked />
                <Switch size="md" intent="neutral" label="Neutral" checked />
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
                <Switch size="lg" intent="primary" label="Primary" checked />
                <Switch size="lg" intent="secondary" label="Secondary" checked />
                <Switch size="lg" intent="success" label="Success" checked />
                <Switch size="lg" intent="warning" label="Warning" checked />
                <Switch size="lg" intent="danger" label="Danger" checked />
                <Switch size="lg" intent="neutral" label="Neutral" checked />
            </div>
        </div>
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }}>
            <div>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>OFF State</h4>
                <Switch label="Click to turn ON" />
            </div>
            <div>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>ON State</h4>
                <Switch label="Click to turn OFF" checked />
            </div>
            <div>
                <h4 style={{
        margin: 0,
        marginBottom: "0.5rem"
      }}>Disabled</h4>
                <Switch label="Disabled OFF" disabled />
                <br />
                <Switch label="Disabled ON" checked disabled />
            </div>
        </div>
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
                <Switch mode="dark" label="Primary (Dark)" intent="primary" checked />
                <Switch mode="dark" label="Secondary (Dark)" intent="secondary" checked />
                <Switch mode="dark" label="Success (Dark)" intent="success" checked />
                <Switch mode="dark" label="Warning (Dark)" intent="warning" checked />
                <Switch mode="dark" label="Danger (Dark)" intent="danger" checked />
                <Switch mode="dark" label="Neutral (Dark)" intent="neutral" checked />
            </div>
        </div>
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,ae,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: "400px",
    padding: "1.5rem",
    border: "1px solid #e0e0e0",
    borderRadius: "8px"
  }}>
            <h3 style={{
      margin: 0,
      marginBottom: "0.5rem"
    }}>Settings</h3>

            <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
                <div>
                    <strong>Push Notifications</strong>
                    <p style={{
          margin: 0,
          fontSize: "0.875rem",
          color: "#666"
        }}>
                        Receive push notifications
                    </p>
                </div>
                <Switch intent="primary" />
            </div>

            <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
                <div>
                    <strong>Email Notifications</strong>
                    <p style={{
          margin: 0,
          fontSize: "0.875rem",
          color: "#666"
        }}>
                        Receive email updates
                    </p>
                </div>
                <Switch intent="primary" checked />
            </div>

            <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
                <div>
                    <strong>Auto Save</strong>
                    <p style={{
          margin: 0,
          fontSize: "0.875rem",
          color: "#666"
        }}>
                        Automatically save your work
                    </p>
                </div>
                <Switch intent="success" checked />
            </div>

            <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
                <div>
                    <strong>Dark Mode</strong>
                    <p style={{
          margin: 0,
          fontSize: "0.875rem",
          color: "#666"
        }}>
                        Use dark theme
                    </p>
                </div>
                <Switch intent="neutral" />
            </div>
        </div>
}`,...(se=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,le,ce;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: function ControlledSwitch() {
    const [checked, setChecked] = React.useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
                <Switch label="Toggle me" checked={checked} onChange={e => setChecked(e.target.checked)} />
                <p>Current state: {checked ? "🟢 ON" : "⚪ OFF"}</p>
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
}`,...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const Ve=["Default","Checked","Uncontrolled","WithoutLabel","Disabled","DisabledChecked","Sizes","Intents","SizesAndIntents","InteractiveStates","DarkMode","SettingsExample","ControlledExample"];export{l as Checked,k as ControlledExample,y as DarkMode,i as Default,o as Disabled,m as DisabledChecked,h as Intents,g as InteractiveStates,x as SettingsExample,u as Sizes,p as SizesAndIntents,c as Uncontrolled,d as WithoutLabel,Ve as __namedExportsOrder,Re as default};
