import{j as n}from"./jsx-runtime-BYYWji4R.js";import{useMDXComponents as r}from"./index-DUy19JZU.js";import{M as t}from"./index-Bctj6xtM.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CtRh9Pig.js";import"./index-BUAr5TKG.js";import"./index-Bhelpi4i.js";import"./index-DrFu-skq.js";function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Getting Started"}),`
`,n.jsx(e.h1,{id:"-getting-started",children:"🚀 Getting Started"}),`
`,n.jsx(e.p,{children:"Pie UI를 프로젝트에 설치하고 사용하는 방법을 안내합니다."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-설치",children:"📦 설치"}),`
`,n.jsx(e.h3,{id:"npm",children:"npm"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install pie-ui
`})}),`
`,n.jsx(e.h3,{id:"yarn",children:"yarn"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add pie-ui
`})}),`
`,n.jsx(e.h3,{id:"pnpm",children:"pnpm"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`pnpm add pie-ui
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-기본-사용법",children:"🎨 기본 사용법"}),`
`,n.jsx(e.h3,{id:"1-컴포넌트-import",children:"1. 컴포넌트 import"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Badge, Switch, TextField } from 'pie-ui';
`})}),`
`,n.jsx(e.h3,{id:"2-컴포넌트-사용",children:"2. 컴포넌트 사용"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function App() {
  return (
    <div>
      <Button intent="primary" size="md">
        Primary Button
      </Button>
      
      <Badge variant="subtle" intent="success">
        New Feature
      </Badge>
      
      <Switch label="Enable notifications" />
      
      <TextField 
        label="Email"
        placeholder="Enter your email"
        helperText="We'll never share your email"
      />
    </div>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-테마-사용",children:"🎨 테마 사용"}),`
`,n.jsx(e.h3,{id:"lightdark-mode",children:"Light/Dark Mode"}),`
`,n.jsxs(e.p,{children:["모든 컴포넌트는 ",n.jsx(e.code,{children:"mode"})," prop으로 테마를 제어할 수 있습니다:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button mode="dark" intent="primary">
  Dark Mode Button
</Button>
`})}),`
`,n.jsx(e.h3,{id:"글로벌-테마-provider-예정",children:"글로벌 테마 Provider (예정)"}),`
`,n.jsx(e.p,{children:"향후 버전에서 ThemeProvider를 제공할 예정입니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// 예정된 API
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-디자인-토큰",children:"🎯 디자인 토큰"}),`
`,n.jsx(e.h3,{id:"intent-색상-테마",children:"Intent (색상 테마)"}),`
`,n.jsx(e.p,{children:"모든 컴포넌트는 6가지 intent를 지원합니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"primary"})," - 주요 액션"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"secondary"})," - 보조 액션"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"success"})," - 성공, 완료"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"warning"})," - 주의, 경고"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"danger"})," - 위험, 삭제"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"neutral"})," - 중립적인 정보"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button intent="primary">Primary</Button>
<Button intent="success">Success</Button>
<Button intent="danger">Delete</Button>
`})}),`
`,n.jsx(e.h3,{id:"size",children:"Size"}),`
`,n.jsx(e.p,{children:"대부분의 컴포넌트는 3가지 크기를 지원합니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sm"})," - Small"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"md"})," - Medium (기본)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"lg"})," - Large"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-typescript",children:"🔧 TypeScript"}),`
`,n.jsx(e.p,{children:"Pie UI는 TypeScript로 작성되어 완벽한 타입 지원을 제공합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import type { ButtonProps, BadgeProps } from 'pie-ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-접근성",children:"♿ 접근성"}),`
`,n.jsx(e.p,{children:"모든 컴포넌트는 WCAG 2.1 가이드라인을 준수합니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ 키보드 네비게이션"}),`
`,n.jsx(e.li,{children:"✅ 스크린 리더 지원"}),`
`,n.jsx(e.li,{children:"✅ Focus indicators"}),`
`,n.jsx(e.li,{children:"✅ ARIA 속성"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// 자동으로 접근성 속성이 적용됩니다
<Switch 
  label="Enable feature"
  aria-label="Enable feature toggle"
/>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-반응형",children:"📱 반응형"}),`
`,n.jsx(e.p,{children:"컴포넌트는 반응형을 지원하지만, 레이아웃은 사용자가 직접 제어합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div style={{ 
  display: 'flex', 
  flexDirection: 'column',
  gap: '1rem'
}}>
  <Button fullWidth>Full Width Button</Button>
  <TextField fullWidth placeholder="Full width input" />
</div>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-스타일-커스터마이징",children:"🎭 스타일 커스터마이징"}),`
`,n.jsx(e.h3,{id:"classname-사용",children:"className 사용"}),`
`,n.jsxs(e.p,{children:["모든 컴포넌트는 ",n.jsx(e.code,{children:"className"})," prop을 지원합니다:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button className="my-custom-class">
  Custom Styled Button
</Button>
`})}),`
`,n.jsx(e.h3,{id:"style-prop-사용",children:"style prop 사용"}),`
`,n.jsx(e.p,{children:"인라인 스타일도 지원합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Badge style={{ marginLeft: '8px' }}>
  Custom Badge
</Badge>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-예제",children:"💡 예제"}),`
`,n.jsx(e.h3,{id:"로그인-폼",children:"로그인 폼"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <form>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      
      <Checkbox
        label="Remember me"
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      />
      
      <Button type="submit" intent="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"알림-카운트",children:"알림 카운트"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function NotificationIcon() {
  const [count, setCount] = useState(5);
  
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ fontSize: '1.5rem' }}>🔔</span>
      {count > 0 && (
        <Badge
          size="sm"
          intent="danger"
          rounded
          style={{ 
            position: 'absolute', 
            top: -5, 
            right: -10 
          }}
        >
          {count}
        </Badge>
      )}
    </div>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-문제-해결",children:"🐛 문제 해결"}),`
`,n.jsx(e.h3,{id:"storybook과-함께-사용",children:"Storybook과 함께 사용"}),`
`,n.jsx(e.p,{children:"Storybook 환경에서는 이미 설정되어 있습니다. 추가 설정이 필요하지 않습니다."}),`
`,n.jsx(e.h3,{id:"nextjs와-함께-사용",children:"Next.js와 함께 사용"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// app/layout.tsx
import 'pie-ui/styles.css'; // 예정된 기능

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-다음-단계",children:"📚 다음 단계"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/story/changelog--page",children:"Changelog"})," - 버전 히스토리 확인"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"/story/components-badge--default",children:"Components"})," - 모든 컴포넌트 둘러보기"]}),`
`,n.jsx(e.li,{children:"GitHub - 소스 코드 확인 (예정)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:"궁금한 점이 있으시면 GitHub Issues에 남겨주세요!"})]})}function p(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{p as default};
