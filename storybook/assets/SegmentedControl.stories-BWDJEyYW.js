import{aj as n,aP as F,a3 as e,a8 as W,ah as D,aB as L,a9 as A,I as b}from"./iframe-CJeV72rj.js";import{u as B}from"./useListFocus-C58q8Qt4.js";import{u as Y}from"./useKeyboardHint-Br_zPIih.js";import{F as E}from"./Squares2X2Icon-DaUvIN1U.js";import{F as G}from"./ListBulletIcon-SuEukl_O.js";import"./preload-helper-Ct5FWWRu.js";const M=n.createContext(null);M.displayName="SegmentedControlContext";function P(){const a=n.use(M);if(a==null)throw new Error("useSegmentedControlContext must be used within SegmentedControl. Wrap your SegmentedControlItem in <SegmentedControl>.");return a}const T={container:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1lsbc85","--_segmented-control-padding":"astryx18jk3ff",kmVPX3:"astryxpoxszi",kWkggS:"astryx17x4s8c",$$css:!0},fill:{k1xSpc:"astryx78zum5",kzqmXN:"astryxh8yej3",$$css:!0},disabled:{kSiTet:"astryxbyyjgo",kfzvcC:"astryx47corl",$$css:!0}},K={sm:{"--_segmented-control-radius":"astryx9icjy1",kaIpWk:"astryx1hapoqb",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},md:{"--_segmented-control-radius":"astryx9icjy1",kaIpWk:"astryx1hapoqb",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},lg:{"--_segmented-control-radius":"astryx9icjy1",kaIpWk:"astryx1hapoqb",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0}};function o({ref:a,value:l,onChange:s,label:u,size:v,layout:y="hug",isDisabled:r=!1,children:i,xstyle:d,className:k,style:j}){const c=F(v,"md"),{listRef:z,handleKeyDown:$,handleFocus:q}=B({itemSelector:'[role="radio"]:not([aria-disabled="true"])',hasRovingTabIndex:!0,wrap:!0,orientation:"horizontal"}),m=Y({orientation:"horizontal",isEnabled:!r}),H=n.useCallback(g=>{m.onKeyDown(g),$(g)},[m,$]),N=n.useCallback(g=>{if(m.onFocus(g),q(g),r)return;const w=g.target?.closest('[role="radio"][data-value]');if(!w||w.getAttribute("aria-disabled")==="true")return;const V=w.dataset.value;V!=null&&V!==l&&s(V)},[m,q,r,s,l]),R=n.useMemo(()=>({value:l,onChange:s,size:c,layout:y,isDisabled:r}),[l,s,c,y,r]);return e.jsx(M,{value:R,children:e.jsxs("div",{ref:A(a,z),role:"radiogroup","aria-label":u,"aria-disabled":r||void 0,onKeyDown:H,onFocus:N,onBlur:m.onBlur,...W(L("segmented-control",{size:c}),D(T.container,K[c],y==="fill"&&T.fill,r&&T.disabled,d),k,j),children:[i,m.hintElement]})})}o.displayName="SegmentedControl";o.__docgenInfo={description:`Segmented button group for single selection (radio group semantics).
Visually resembles a tab bar but controls a value, not a view.

@example
\`\`\`
<SegmentedControl value={view} onChange={setView} label="View mode">
  <SegmentedControlItem value="grid" label="Grid" />
  <SegmentedControlItem value="list" label="List" />
  <SegmentedControlItem value="table" label="Table" />
</SegmentedControl>
\`\`\``,methods:[],displayName:"SegmentedControl",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},value:{required:!0,tsType:{name:"string"},description:"The currently selected value (controlled)."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when a segment is selected."},label:{required:!0,tsType:{name:"string"},description:"Accessible label for the radio group (used as aria-label, never rendered visually)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant for the control.
@default 'md'`},layout:{required:!1,tsType:{name:"union",raw:"'hug' | 'fill'",elements:[{name:"literal",value:"'hug'"},{name:"literal",value:"'fill'"}]},description:"Layout mode for segment sizing.\n- `'hug'` (default): each segment hugs its content width.\n- `'fill'`: segments stretch equally to fill the container width.\n@default 'hug'",defaultValue:{value:"'hug'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the entire control is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"SegmentedControlItem children."}},composes:["Omit"]};const x={base:{kVAEAm:"astryx1n2onr6",k1xSpc:"astryx3nfvp2",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kOIVth:"astryxzye2dw",kg3NbH:"astryxrrkdod",kWkggS:"astryxjbqb8w",kMzoRj:"astryxc342km",ksu8eU:"astryxng3xce",kMv6JI:"astryxjb2p0i",kGuDYH:"astryxcr08ib",kLWn49:"astryx1kq96og",k63SB2:"astryx1e4wzip",kMwMTN:"astryxv1l7n4",kkrTdU:"astryx1ypdohk",k1ekBW:"astryx1vix5yk",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",kI3sdo:"astryx17nn4n9",kInvED:"astryx1wfwxd8 astryx7s97pk",$$css:!0},hover:{kWkggS:"astryxe9uy6x",$$css:!0},selected:{kMwMTN:"astryx1tgivj0",k63SB2:"astryx2mo6ok",kWkggS:"astryx10xzikg",kGVxlE:"astryx1i5ehqx",$$css:!0},disabled:{kkrTdU:"astryxt0e3qv",kMwMTN:"astryxnbbluu",$$css:!0},fill:{kUk6DE:"astryx98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:null,kjj79g:"astryxl56j7k",$$css:!0},icon:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kmuXW:"astryx2lah0s",$$css:!0}},X={sm:{kZKoxP:"astryxzj98nu",kaIpWk:"astryxc910v0",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kg3NbH:"astryxf314gf",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kGuDYH:"astryx141an7d",$$css:!0},md:{kZKoxP:"astryx184gfjb",kaIpWk:"astryxc910v0",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kg3NbH:"astryxrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},lg:{kZKoxP:"astryx1uiybsj",kaIpWk:"astryxc910v0",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kg3NbH:"astryxrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0}},_={sm:{kzqmXN:"astryx6jxa94",kZKoxP:"astryx1v9usgg",$$css:!0},md:{kzqmXN:"astryx1kky2od",kZKoxP:"astryxlup9mm",$$css:!0},lg:{kzqmXN:"astryx1xp8n7a",kZKoxP:"astryxmix8c7",$$css:!0}};function t({ref:a,value:l,label:s,isLabelHidden:u=!1,icon:v,isDisabled:y=!1}){const r=P(),i=r.value===l,d=y||r.isDisabled,k=r.size,j=r.layout==="fill",c=n.useCallback(()=>{!d&&!i&&r.onChange(l)},[r,l,d,i]),z=v?e.jsx("span",{...D(x.icon,_[k]),children:v}):null;return e.jsxs("button",{ref:a,type:"button",role:"radio","aria-checked":i,"aria-disabled":d||void 0,"aria-label":u?s:void 0,"data-value":l,tabIndex:i&&!d?0:-1,onClick:c,...W(L("segmented-control-item",{size:k,selected:i?"selected":null,disabled:d?"disabled":null}),D(x.base,X[k],j&&x.fill,i&&x.selected,!i&&!d&&x.hover,d&&x.disabled)),children:[z,!u&&e.jsx("span",{children:s})]})}t.displayName="SegmentedControlItem";t.__docgenInfo={description:'Individual segment item within an SegmentedControl.\nRenders as a radio button with visual segment styling.\n\n@example\n```\n<SegmentedControlItem value="grid" label="Grid" icon={<GridIcon />} />\n```',methods:[],displayName:"SegmentedControlItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},value:{required:!0,tsType:{name:"string"},description:"Unique value for this segment. Matched against the parent's value."},label:{required:!0,tsType:{name:"string"},description:`Accessible label for this segment (required for accessibility).
Used as visible text, or as aria-label when isLabelHidden is true.`},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether the label is visually hidden. When true, only the icon is
displayed and the label is used as aria-label for accessibility.
@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon element displayed before the label."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function O({title:a,titleId:l,...s},u){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":l},s),a?n.createElement("title",{id:l},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"}))}const U=n.forwardRef(O),ae={title:"Core/SegmentedControl",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant for the control"},isDisabled:{control:"boolean",description:"Whether the entire control is disabled"}}},p={args:{size:"md",isDisabled:!1},render:a=>{const[l,s]=n.useState("grid");return e.jsxs(o,{value:l,onChange:s,label:"View mode",size:a.size,isDisabled:a.isDisabled,children:[e.jsx(t,{value:"grid",label:"Grid"}),e.jsx(t,{value:"list",label:"List"}),e.jsx(t,{value:"table",label:"Table"})]})}},h={args:{size:"md"},render:a=>{const[l,s]=n.useState("grid");return e.jsxs(o,{value:l,onChange:s,label:"View mode",size:a.size,children:[e.jsx(t,{value:"grid",label:"Grid",icon:e.jsx(b,{icon:E,color:"inherit"})}),e.jsx(t,{value:"list",label:"List",icon:e.jsx(b,{icon:G,color:"inherit"})}),e.jsx(t,{value:"table",label:"Table",icon:e.jsx(b,{icon:U,color:"inherit"})})]})}},f={args:{size:"sm"},render:a=>{const[l,s]=n.useState("grid");return e.jsxs(o,{value:l,onChange:s,label:"View mode",size:a.size,children:[e.jsx(t,{value:"grid",label:"Grid",isLabelHidden:!0,icon:e.jsx(b,{icon:E,color:"inherit"})}),e.jsx(t,{value:"list",label:"List",isLabelHidden:!0,icon:e.jsx(b,{icon:G,color:"inherit"})})]})}},S={render:()=>{const[a,l]=n.useState("day");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"Small"}),e.jsxs(o,{value:a,onChange:l,label:"Time period",size:"sm",children:[e.jsx(t,{value:"day",label:"Day"}),e.jsx(t,{value:"week",label:"Week"}),e.jsx(t,{value:"month",label:"Month"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"Medium (default)"}),e.jsxs(o,{value:a,onChange:l,label:"Time period",size:"md",children:[e.jsx(t,{value:"day",label:"Day"}),e.jsx(t,{value:"week",label:"Week"}),e.jsx(t,{value:"month",label:"Month"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"Large"}),e.jsxs(o,{value:a,onChange:l,label:"Time period",size:"lg",children:[e.jsx(t,{value:"day",label:"Day"}),e.jsx(t,{value:"week",label:"Week"}),e.jsx(t,{value:"month",label:"Month"})]})]})]})}},C={render:()=>{const[a,l]=n.useState("all");return e.jsxs(o,{value:a,onChange:l,label:"Filter",isDisabled:!0,children:[e.jsx(t,{value:"all",label:"All"}),e.jsx(t,{value:"active",label:"Active"}),e.jsx(t,{value:"completed",label:"Completed"})]})}},I={render:()=>{const[a,l]=n.useState("hourly");return e.jsxs(o,{value:a,onChange:l,label:"Data granularity",children:[e.jsx(t,{value:"hourly",label:"Hourly"}),e.jsx(t,{value:"daily",label:"Daily"}),e.jsx(t,{value:"weekly",label:"Weekly",isDisabled:!0})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    isDisabled: false
  },
  render: args => {
    const [value, setValue] = useState('grid');
    return <SegmentedControl value={value} onChange={setValue} label="View mode" size={args.size} isDisabled={args.isDisabled}>
        <SegmentedControlItem value="grid" label="Grid" />
        <SegmentedControlItem value="list" label="List" />
        <SegmentedControlItem value="table" label="Table" />
      </SegmentedControl>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('grid');
    return <SegmentedControl value={value} onChange={setValue} label="View mode" size={args.size}>
        <SegmentedControlItem value="grid" label="Grid" icon={<Icon icon={Squares2X2Icon} color="inherit" />} />
        <SegmentedControlItem value="list" label="List" icon={<Icon icon={ListBulletIcon} color="inherit" />} />
        <SegmentedControlItem value="table" label="Table" icon={<Icon icon={TableCellsIcon} color="inherit" />} />
      </SegmentedControl>;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => {
    const [value, setValue] = useState('grid');
    return <SegmentedControl value={value} onChange={setValue} label="View mode" size={args.size}>
        <SegmentedControlItem value="grid" label="Grid" isLabelHidden icon={<Icon icon={Squares2X2Icon} color="inherit" />} />
        <SegmentedControlItem value="list" label="List" isLabelHidden icon={<Icon icon={ListBulletIcon} color="inherit" />} />
      </SegmentedControl>;
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('day');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            Small
          </div>
          <SegmentedControl value={value} onChange={setValue} label="Time period" size="sm">
            <SegmentedControlItem value="day" label="Day" />
            <SegmentedControlItem value="week" label="Week" />
            <SegmentedControlItem value="month" label="Month" />
          </SegmentedControl>
        </div>
        <div>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            Medium (default)
          </div>
          <SegmentedControl value={value} onChange={setValue} label="Time period" size="md">
            <SegmentedControlItem value="day" label="Day" />
            <SegmentedControlItem value="week" label="Week" />
            <SegmentedControlItem value="month" label="Month" />
          </SegmentedControl>
        </div>
        <div>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            Large
          </div>
          <SegmentedControl value={value} onChange={setValue} label="Time period" size="lg">
            <SegmentedControlItem value="day" label="Day" />
            <SegmentedControlItem value="week" label="Week" />
            <SegmentedControlItem value="month" label="Month" />
          </SegmentedControl>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <SegmentedControl value={value} onChange={setValue} label="Filter" isDisabled>
        <SegmentedControlItem value="all" label="All" />
        <SegmentedControlItem value="active" label="Active" />
        <SegmentedControlItem value="completed" label="Completed" />
      </SegmentedControl>;
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('hourly');
    return <SegmentedControl value={value} onChange={setValue} label="Data granularity">
        <SegmentedControlItem value="hourly" label="Hourly" />
        <SegmentedControlItem value="daily" label="Daily" />
        <SegmentedControlItem value="weekly" label="Weekly" isDisabled />
      </SegmentedControl>;
  }
}`,...I.parameters?.docs?.source}}};const ne=["Default","WithIcons","IconOnly","SizeVariants","Disabled","DisabledItem"];export{p as Default,C as Disabled,I as DisabledItem,f as IconOnly,S as SizeVariants,h as WithIcons,ne as __namedExportsOrder,ae as default};
