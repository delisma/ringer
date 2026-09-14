import{a3 as t,T as s,B as b,aj as y}from"./iframe-CJeV72rj.js";import{u as k}from"./useKeyboardHint-Br_zPIih.js";import{T as S}from"./Toolbar-D6yAaCP9.js";import{C as h}from"./Card-DWZm0KCk.js";import{S as C}from"./Section-CmpZi89k.js";import{V as x}from"./VStack-Bp6aaQIi.js";import"./preload-helper-Ct5FWWRu.js";import"./useListFocus-C58q8Qt4.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-Dl2_Pyt1.js";import"./Stack-F2-eFRX_.js";import"./stack.stylex-BlarxY2N.js";function v({label:T,orientation:r,items:f}){const u=y.useRef(null),l=k({orientation:r}),g=r==="vertical"?"ArrowDown":"ArrowRight",m=r==="vertical"?"ArrowUp":"ArrowLeft",w=y.useCallback(e=>{const c=u.current;if(!c)return;const o=Array.from(c.querySelectorAll("button")),d=o.findIndex(j=>j===document.activeElement);if(d===-1)return;let p;if(e.key===g)p=(d+1)%o.length;else if(e.key===m)p=(d-1+o.length)%o.length;else return;e.preventDefault(),o[d].tabIndex=-1,o[p].tabIndex=0,o[p].focus()},[g,m]);return t.jsxs("div",{ref:u,role:"toolbar","aria-label":T,"aria-orientation":r,onKeyDown:e=>{l.onKeyDown(e),w(e)},onFocus:l.onFocus,onBlur:l.onBlur,style:{display:"inline-flex",flexDirection:r==="vertical"?"column":"row",alignItems:r==="vertical"?"stretch":"center",gap:4,padding:8,borderRadius:8,background:"var(--color-background-muted)"},children:[f.map((e,c)=>t.jsx("button",{type:"button",tabIndex:c===0?0:-1,style:{appearance:"none",border:"none",borderRadius:6,padding:"6px 12px",background:"var(--color-background-popover)",color:"var(--color-text-primary)",font:"inherit",textAlign:r==="vertical"?"start":"center",cursor:"pointer"},children:e},e)),l.hintElement]})}const U={title:"Hooks/useKeyboardHint",parameters:{layout:"centered"}},a={render:()=>t.jsx(h,{padding:4,children:t.jsxs(x,{gap:3,children:[t.jsx(s,{type:"body",weight:"bold",children:"Formatting"}),t.jsx(s,{type:"supporting",color:"secondary",children:"Tab into the toolbar with your keyboard — the hint appears once."}),t.jsx(v,{label:"Formatting",orientation:"horizontal",items:["Bold","Italic","Underline"]})]})})},n={render:()=>t.jsx(h,{padding:4,children:t.jsxs(x,{gap:3,children:[t.jsx(s,{type:"body",weight:"bold",children:"Navigation"}),t.jsx(s,{type:"supporting",color:"secondary",children:"Tab into the list — the vertical hint teaches ↑ ↓ navigation."}),t.jsx(v,{label:"Sidebar navigation",orientation:"vertical",items:["Overview","Reports","Settings"]})]})})},i={render:()=>t.jsxs(h,{style:{width:420},children:[t.jsx(S,{label:"Document actions",startContent:t.jsxs(t.Fragment,{children:[t.jsx(b,{label:"Cut",variant:"ghost"}),t.jsx(b,{label:"Copy",variant:"ghost"}),t.jsx(b,{label:"Paste",variant:"ghost"})]}),endContent:t.jsx(b,{label:"Settings",variant:"ghost"})}),t.jsx(C,{children:t.jsx(s,{type:"supporting",color:"secondary",children:"Tab into the toolbar above — the arrow-key hint appears on first keyboard focus."})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Card padding={4}>
      <VStack gap={3}>
        <Text type="body" weight="bold">
          Formatting
        </Text>
        <Text type="supporting" color="secondary">
          Tab into the toolbar with your keyboard — the hint appears once.
        </Text>
        <HintToolbar label="Formatting" orientation="horizontal" items={['Bold', 'Italic', 'Underline']} />
      </VStack>
    </Card>
}`,...a.parameters?.docs?.source},description:{story:'Tab into the toolbar to reveal the horizontal "← → to navigate" hint.',...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Card padding={4}>
      <VStack gap={3}>
        <Text type="body" weight="bold">
          Navigation
        </Text>
        <Text type="supporting" color="secondary">
          Tab into the list — the vertical hint teaches ↑ ↓ navigation.
        </Text>
        <HintToolbar label="Sidebar navigation" orientation="vertical" items={['Overview', 'Reports', 'Settings']} />
      </VStack>
    </Card>
}`,...n.parameters?.docs?.source},description:{story:'A vertical list (e.g. a sidebar nav) shows the "↑ ↓ to navigate" hint.',...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 420
  }}>
      <Toolbar label="Document actions" startContent={<>
            <Button label="Cut" variant="ghost" />
            <Button label="Copy" variant="ghost" />
            <Button label="Paste" variant="ghost" />
          </>} endContent={<Button label="Settings" variant="ghost" />} />
      <Section>
        <Text type="supporting" color="secondary">
          Tab into the toolbar above — the arrow-key hint appears on first
          keyboard focus.
        </Text>
      </Section>
    </Card>
}`,...i.parameters?.docs?.source},description:{story:"The real `<Toolbar>` component wires `useKeyboardHint` in automatically — no\nextra wiring required. Tab into it to see the integrated behavior.",...i.parameters?.docs?.description}}};const q=["Default","Vertical","WithToolbar"];export{a as Default,n as Vertical,i as WithToolbar,q as __namedExportsOrder,U as default};
