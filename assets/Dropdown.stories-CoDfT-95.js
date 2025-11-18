import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as d,R as s}from"./index-ClcD9ViR.js";import{c as M,d as xe,l as we}from"./theme.css-BRoovXax.js";import"./_commonjsHelpers-Cpj98o6Y.js";var Se="_1tqld1w2",De="_1tqld1w3",Ce={sm:"_1tqld1w4",md:"_1tqld1w5",lg:"_1tqld1w6"},$="_1tqld1w7",ke="_1tqld1w8",je="_1tqld1w9",Ve="_1tqld1wa";const l=({options:o,value:t,onChange:n,placeholder:u="Select an option",size:b="md",fullWidth:c=!1,disabled:g=!1,mode:E="light",className:_})=>{const[r,B]=d.useState(!1),[N,I]=d.useState(!1),[m,v]=d.useState(-1),L=d.useRef(null),q=d.useRef(null),ye=E==="dark"?xe:we,F=o.find(a=>a.value===t),h=d.useCallback(()=>{I(!0),setTimeout(()=>{I(!1),B(!1),v(-1)},150)},[]),fe=d.useCallback(()=>{g||(r?h():(B(!0),v(-1)))},[r,g,h]),z=d.useCallback(a=>{n==null||n(a),h()},[n,h]);return d.useEffect(()=>{if(!r)return;const a=i=>{L.current&&!L.current.contains(i.target)&&h()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[r,h]),d.useEffect(()=>{if(!r)return;const a=i=>{const y=o.filter(f=>!f.disabled);switch(i.key){case"Escape":i.preventDefault(),h();break;case"ArrowDown":i.preventDefault(),v(f=>{const x=f+1;return x>=y.length?0:x});break;case"ArrowUp":i.preventDefault(),v(f=>{const x=f-1;return x<0?y.length-1:x});break;case"Enter":i.preventDefault(),m>=0&&m<y.length&&z(y[m].value);break;case"Home":i.preventDefault(),v(0);break;case"End":i.preventDefault(),v(y.length-1);break}};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[r,m,o,z,h]),d.useEffect(()=>{if(r&&m>=0&&q.current){const a=q.current.children[m];a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest"})}},[m,r]),e.jsxs("div",{ref:L,className:M(ye,Se,c&&$,_),children:[e.jsxs("button",{type:"button",className:M(De,Ce[b],c&&$),onClick:fe,disabled:g,"data-state":r?"open":"closed","aria-haspopup":"listbox","aria-expanded":r,children:[e.jsx("span",{children:(F==null?void 0:F.label)||u}),e.jsx("span",{className:ke,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(r||N)&&e.jsx("div",{ref:q,className:je,"data-state":N?"closing":"open",role:"listbox",children:o.map((a,i)=>e.jsx("button",{type:"button",className:Ve,onClick:()=>z(a.value),disabled:a.disabled,"data-selected":a.value===t,role:"option","aria-selected":a.value===t,tabIndex:m===i?0:-1,onMouseEnter:()=>v(i),children:a.label},a.value))})]})};try{l.displayName="Dropdown",l.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},placeholder:{defaultValue:{value:"Select an option"},description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"light"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const p=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"}],_e={title:"Components/Dropdown",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{options:p},argTypes:{options:{control:"object",description:"드롭다운 옵션 목록",table:{type:{summary:"DropdownOption[]"}}},value:{control:"text",description:"선택된 값",table:{type:{summary:"string"}}},placeholder:{control:"text",description:"선택되지 않았을 때 표시할 텍스트",table:{type:{summary:"string"},defaultValue:{summary:'"Select an option"'}}},size:{control:"select",options:["sm","md","lg"],description:"드롭다운 크기",table:{type:{summary:"DropdownSize"},defaultValue:{summary:"md"}}},fullWidth:{control:"boolean",description:"전체 너비 사용",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"비활성화 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},mode:{control:"select",options:["light","dark"],description:"테마 모드",table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}}},w={render:function(){const[t,n]=s.useState("");return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{options:p,value:t,onChange:n,placeholder:"Select a fruit"})})}},S={render:function(){const[t,n]=s.useState("banana");return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{options:p,value:t,onChange:n})})}},D={render:function(){const[t,n]=s.useState(""),[u,b]=s.useState(""),[c,g]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(l,{options:p,value:t,onChange:n,size:"sm",placeholder:"Small"}),e.jsx(l,{options:p,value:u,onChange:b,size:"md",placeholder:"Medium"}),e.jsx(l,{options:p,value:c,onChange:g,size:"lg",placeholder:"Large"})]})}},C={render:function(){const[t,n]=s.useState("");return e.jsx("div",{style:{width:"100%",maxWidth:"500px"},children:e.jsx(l,{options:p,value:t,onChange:n,fullWidth:!0,placeholder:"Full width dropdown"})})}},k={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{options:p,value:"apple",disabled:!0,placeholder:"Disabled"})})},j={render:function(){const[t,n]=s.useState(""),u=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana (Sold Out)",disabled:!0},{value:"cherry",label:"Cherry"},{value:"date",label:"Date (Coming Soon)",disabled:!0},{value:"elderberry",label:"Elderberry"}];return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{options:u,value:t,onChange:n,placeholder:"Select a fruit"})})}},V={render:function(){const[t,n]=s.useState(""),u=Array.from({length:20},(b,c)=>({value:`option-${c+1}`,label:`Option ${c+1}`}));return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{options:u,value:t,onChange:n,placeholder:"Select an option"})})}},W={render:function(){const[t,n]=s.useState("");return e.jsx("div",{style:{backgroundColor:"#1a1a1a",padding:"2rem",borderRadius:"8px",width:"300px"},children:e.jsx(l,{options:p,value:t,onChange:n,mode:"dark",placeholder:"Select a fruit"})})}},O={render:function(){const[t,n]=s.useState(""),[u,b]=s.useState(""),[c,g]=s.useState(""),E=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"kr",label:"South Korea"},{value:"jp",label:"Japan"}],_=[{value:"ny",label:"New York"},{value:"ld",label:"London"},{value:"sl",label:"Seoul"},{value:"tk",label:"Tokyo"}],r=[{value:"en",label:"English"},{value:"ko",label:"Korean"},{value:"ja",label:"Japanese"}];return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",width:"400px",padding:"2rem",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country",style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Country"}),e.jsx(l,{options:E,value:t,onChange:n,placeholder:"Select your country",fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"city",style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"City"}),e.jsx(l,{options:_,value:u,onChange:b,placeholder:"Select your city",fullWidth:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"language",style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Preferred Language"}),e.jsx(l,{options:r,value:c,onChange:g,placeholder:"Select language",fullWidth:!0})]}),e.jsx("button",{type:"button",style:{padding:"0.75rem",backgroundColor:"#6366f1",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:500},onClick:()=>alert(`Country: ${t}
City: ${u}
Language: ${c}`),children:"Submit"})]})}},R={render:function(){const[t,n]=s.useState("cherry");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(l,{options:p,value:t,onChange:n}),e.jsxs("p",{children:["Selected value: ",e.jsx("strong",{children:t||"None"})]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx("button",{type:"button",onClick:()=>n("apple"),style:{padding:"0.5rem 1rem",borderRadius:"4px",border:"1px solid #ddd",cursor:"pointer"},children:"Select Apple"}),e.jsx("button",{type:"button",onClick:()=>n(""),style:{padding:"0.5rem 1rem",borderRadius:"4px",border:"1px solid #ddd",cursor:"pointer"},children:"Clear"})]})]})}};var A,K,T;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function BasicDropdown() {
    const [value, setValue] = React.useState<string>("");
    return <div style={{
      width: "300px"
    }}>
                <Dropdown options={sampleOptions} value={value} onChange={setValue} placeholder="Select a fruit" />
            </div>;
  }
}`,...(T=(K=w.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var U,J,P;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: function DropdownWithDefault() {
    const [value, setValue] = React.useState<string>("banana");
    return <div style={{
      width: "300px"
    }}>
                <Dropdown options={sampleOptions} value={value} onChange={setValue} />
            </div>;
  }
}`,...(P=(J=S.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var Y,H,G;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: function DropdownSizes() {
    const [value1, setValue1] = React.useState<string>("");
    const [value2, setValue2] = React.useState<string>("");
    const [value3, setValue3] = React.useState<string>("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    }}>
                <Dropdown options={sampleOptions} value={value1} onChange={setValue1} size="sm" placeholder="Small" />
                <Dropdown options={sampleOptions} value={value2} onChange={setValue2} size="md" placeholder="Medium" />
                <Dropdown options={sampleOptions} value={value3} onChange={setValue3} size="lg" placeholder="Large" />
            </div>;
  }
}`,...(G=(H=D.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var Q,X,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: function DropdownFullWidth() {
    const [value, setValue] = React.useState<string>("");
    return <div style={{
      width: "100%",
      maxWidth: "500px"
    }}>
                <Dropdown options={sampleOptions} value={value} onChange={setValue} fullWidth placeholder="Full width dropdown" />
            </div>;
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,te;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "300px"
  }}>
            <Dropdown options={sampleOptions} value="apple" disabled placeholder="Disabled" />
        </div>
}`,...(te=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,le,oe;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: function DropdownDisabledOptions() {
    const [value, setValue] = React.useState<string>("");
    const optionsWithDisabled = [{
      value: "apple",
      label: "Apple"
    }, {
      value: "banana",
      label: "Banana (Sold Out)",
      disabled: true
    }, {
      value: "cherry",
      label: "Cherry"
    }, {
      value: "date",
      label: "Date (Coming Soon)",
      disabled: true
    }, {
      value: "elderberry",
      label: "Elderberry"
    }];
    return <div style={{
      width: "300px"
    }}>
                <Dropdown options={optionsWithDisabled} value={value} onChange={setValue} placeholder="Select a fruit" />
            </div>;
  }
}`,...(oe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var re,se,ie;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: function DropdownManyOptions() {
    const [value, setValue] = React.useState<string>("");
    const manyOptions = Array.from({
      length: 20
    }, (_, i) => ({
      value: \`option-\${i + 1}\`,
      label: \`Option \${i + 1}\`
    }));
    return <div style={{
      width: "300px"
    }}>
                <Dropdown options={manyOptions} value={value} onChange={setValue} placeholder="Select an option" />
            </div>;
  }
}`,...(ie=(se=V.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,ue,ce;W.parameters={...W.parameters,docs:{...(de=W.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: function DropdownDarkMode() {
    const [value, setValue] = React.useState<string>("");
    return <div style={{
      backgroundColor: "#1a1a1a",
      padding: "2rem",
      borderRadius: "8px",
      width: "300px"
    }}>
                <Dropdown options={sampleOptions} value={value} onChange={setValue} mode="dark" placeholder="Select a fruit" />
            </div>;
  }
}`,...(ce=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,me,he;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: function DropdownForm() {
    const [country, setCountry] = React.useState<string>("");
    const [city, setCity] = React.useState<string>("");
    const [language, setLanguage] = React.useState<string>("");
    const countries = [{
      value: "us",
      label: "United States"
    }, {
      value: "uk",
      label: "United Kingdom"
    }, {
      value: "kr",
      label: "South Korea"
    }, {
      value: "jp",
      label: "Japan"
    }];
    const cities = [{
      value: "ny",
      label: "New York"
    }, {
      value: "ld",
      label: "London"
    }, {
      value: "sl",
      label: "Seoul"
    }, {
      value: "tk",
      label: "Tokyo"
    }];
    const languages = [{
      value: "en",
      label: "English"
    }, {
      value: "ko",
      label: "Korean"
    }, {
      value: "ja",
      label: "Japanese"
    }];
    return <form style={{
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      width: "400px",
      padding: "2rem",
      border: "1px solid #e0e0e0",
      borderRadius: "8px"
    }}>
                <div>
                    <label htmlFor="country" style={{
          display: "block",
          marginBottom: "0.5rem",
          fontWeight: 500
        }}>
                        Country
                    </label>
                    <Dropdown options={countries} value={country} onChange={setCountry} placeholder="Select your country" fullWidth />
                </div>

                <div>
                    <label htmlFor="city" style={{
          display: "block",
          marginBottom: "0.5rem",
          fontWeight: 500
        }}>
                        City
                    </label>
                    <Dropdown options={cities} value={city} onChange={setCity} placeholder="Select your city" fullWidth />
                </div>

                <div>
                    <label htmlFor="language" style={{
          display: "block",
          marginBottom: "0.5rem",
          fontWeight: 500
        }}>
                        Preferred Language
                    </label>
                    <Dropdown options={languages} value={language} onChange={setLanguage} placeholder="Select language" fullWidth />
                </div>

                <button type="button" style={{
        padding: "0.75rem",
        backgroundColor: "#6366f1",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: 500
      }} onClick={() => alert(\`Country: \${country}\\nCity: \${city}\\nLanguage: \${language}\`)}>
                    Submit
                </button>
            </form>;
  }
}`,...(he=(me=O.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,ve,be;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: function DropdownControlled() {
    const [value, setValue] = React.useState<string>("cherry");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      width: "300px"
    }}>
                <Dropdown options={sampleOptions} value={value} onChange={setValue} />
                <p>
                    Selected value: <strong>{value || "None"}</strong>
                </p>
                <div style={{
        display: "flex",
        gap: "0.5rem"
      }}>
                    <button type="button" onClick={() => setValue("apple")} style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "1px solid #ddd",
          cursor: "pointer"
        }}>
                        Select Apple
                    </button>
                    <button type="button" onClick={() => setValue("")} style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "1px solid #ddd",
          cursor: "pointer"
        }}>
                        Clear
                    </button>
                </div>
            </div>;
  }
}`,...(be=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Le=["Basic","WithDefaultValue","Sizes","FullWidth","Disabled","WithDisabledOptions","ManyOptions","DarkMode","FormExample","ControlledExample"];export{w as Basic,R as ControlledExample,W as DarkMode,k as Disabled,O as FormExample,C as FullWidth,V as ManyOptions,D as Sizes,S as WithDefaultValue,j as WithDisabledOptions,Le as __namedExportsOrder,_e as default};
