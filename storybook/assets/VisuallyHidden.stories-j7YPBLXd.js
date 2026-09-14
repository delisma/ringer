import{V as o,a3 as e,T as r,aj as u,B as h}from"./iframe-CJeV72rj.js";import{C as n}from"./Card-DWZm0KCk.js";import{S as d}from"./Section-CmpZi89k.js";import{V as c}from"./VStack-Bp6aaQIi.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-Dl2_Pyt1.js";import"./Stack-F2-eFRX_.js";import"./stack.stylex-BlarxY2N.js";const C={title:"Core/VisuallyHidden",component:o,tags:["autodocs"],argTypes:{children:{control:"text",description:"Content exposed to assistive technology while hidden"},as:{control:"text",description:"HTML tag to render as (default 'span')"}}},s={args:{children:"This text is only announced to screen readers"},render:t=>e.jsx(d,{variant:"muted",children:e.jsx(n,{children:e.jsxs(c,{gap:3,children:[e.jsx(r,{type:"body",children:"There is visually-hidden text below this line. Inspect the DOM or use a screen reader to perceive it."}),e.jsx(o,{...t}),e.jsx(r,{type:"body",color:"secondary",children:"(nothing visible renders between the two paragraphs)"})]})})})},a={render:()=>e.jsx(d,{variant:"muted",children:e.jsx(n,{children:e.jsxs(c,{gap:2,align:"start",children:[e.jsxs(r,{type:"body",children:["Read more"," ",e.jsxs("a",{href:"https://example.com",children:["here",e.jsx(o,{children:" about accessibility primitives"})]})]}),e.jsx(r,{type:"body",color:"secondary",children:"The link is announced as “here about accessibility primitives”, so it is not an ambiguous “here” out of context."})]})})})},i={render:()=>e.jsx(m,{})};function m(){const[t,l]=u.useState(0);return e.jsx(d,{variant:"muted",children:e.jsx(n,{children:e.jsxs(c,{gap:3,align:"start",children:[e.jsx(r,{type:"body",children:"Activating the button updates a polite live region that a screen reader announces."}),e.jsx(h,{label:"Add item",onClick:()=>l(p=>p+1)}),e.jsxs(r,{type:"body",color:"secondary",children:["Items added: ",t]}),e.jsx(o,{as:"div",role:"status","aria-live":"polite",children:t>0?`${t} item${t===1?"":"s"} added`:""})]})})})}s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This text is only announced to screen readers'
  },
  render: args => <Section variant="muted">
      <Card>
        <VStack gap={3}>
          <Text type="body">
            There is visually-hidden text below this line. Inspect the DOM or
            use a screen reader to perceive it.
          </Text>
          <VisuallyHidden {...args} />
          <Text type="body" color="secondary">
            (nothing visible renders between the two paragraphs)
          </Text>
        </VStack>
      </Card>
    </Section>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Section variant="muted">
      <Card>
        <VStack gap={2} align="start">
          <Text type="body">
            Read more{' '}
            <a href="https://example.com">
              here
              <VisuallyHidden> about accessibility primitives</VisuallyHidden>
            </a>
          </Text>
          <Text type="body" color="secondary">
            The link is announced as “here about accessibility primitives”, so
            it is not an ambiguous “here” out of context.
          </Text>
        </VStack>
      </Card>
    </Section>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <LiveRegionDemo />
}`,...i.parameters?.docs?.source}}};const V=["Default","SupplementaryContext","LiveRegion"];export{s as Default,i as LiveRegion,a as SupplementaryContext,V as __namedExportsOrder,C as default};
