import{aj as s,a3 as d,a8 as O,aB as P}from"./iframe-CJeV72rj.js";import{F as H}from"./Field-Dfaov6KF.js";import{L as _}from"./List-CaTXAGEq.js";import{C as B}from"./CheckboxInput-W5SKSIcL.js";import{L as F,a as z}from"./ListItem-CtW0oGFb.js";const T=s.createContext(null);T.displayName="CheckboxListContext";const U=[];function M({label:c,isLabelHidden:t=!1,description:m,status:n,value:f,onChange:b,changeAction:a,density:y="balanced",hasDividers:x=!1,isDisabled:u=!1,isReadOnly:g=!1,children:k,ref:C,width:e,xstyle:q,className:R,style:L,"data-testid":o}){const l=s.useId(),r=s.useId(),i=s.useId(),v=s.useId(),[,p]=s.useTransition(),h=f!==void 0,w=f??U,[D,S]=s.useOptimistic(w),[V,E]=s.useOptimistic(null),N=s.useCallback((I,A)=>{b?.(I),a&&p(async()=>{S(I),A!==void 0&&E(A),await a(I)})},[b,a,p,S,E]),j=s.useMemo(()=>({value:h?D:void 0,onChange:h?N:void 0,isDisabled:u,isReadOnly:g,loadingValue:V}),[h,D,N,u,g,V]);return d.jsx(H,{ref:C,"data-testid":o,label:c,isLabelHidden:t,description:m,inputID:l,labelID:r,isGroupLabel:!0,descriptionID:m?i:void 0,isDisabled:u,status:n?{type:n.type,message:n.message,messageID:n.message?v:void 0}:void 0,statusVariant:"detached",width:e,xstyle:q,...O(P("checkbox-list"),{className:R,style:L}),children:d.jsx(T,{value:j,children:d.jsx("div",{role:"group","aria-labelledby":r,"aria-describedby":[m?i:null,n?.message?v:null].filter(Boolean).join(" ")||void 0,children:d.jsx(_,{density:y,hasDividers:x,children:k})})})})}M.displayName="CheckboxList";M.__docgenInfo={description:`A checkbox group component for multi-value selection.

Composes Field (for label, description, status) and List
(for density, dividers) with a context provider for collection mode.

@example
\`\`\`
<CheckboxList
  label="Notifications"
  value={selected}
  onChange={setSelected}>
  <CheckboxListItem label="Email" value="email" />
  <CheckboxListItem label="SMS" value="sms" />
  <CheckboxListItem label="Push" value="push" />
</CheckboxList>
\`\`\``,methods:[],displayName:"CheckboxList",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},label:{required:!0,tsType:{name:"string"},description:"Label text for the checkbox group (always rendered for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},status:{required:!1,tsType:{name:"InputStatus"},description:`Status indicator for the checkbox group.
When set with a message, displays a colored message box below the group.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The currently selected values (collection mode)."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Callback fired when the selected values change (collection mode)."},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void | Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:`Async action on change. Fires after onChange.
While the returned promise is pending, the toggled item shows a spinner
inside its checkbox and is marked \`aria-busy\`, and re-toggling it is
blocked. Other items remain interactive.`},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'balanced' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'balanced'"},{name:"literal",value:"'spacious'"}]},description:`Spacing density for list items.
@default 'balanced'`,defaultValue:{value:"'balanced'",computed:!1}},hasDividers:{required:!1,tsType:{name:"boolean"},description:`Whether to show dividers between list items.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether all checkbox items are disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:`Whether all checkbox items are read-only.
Displays the current state at full opacity but prevents interaction.
Unlike \`isDisabled\`, read-only checkboxes are not visually dimmed.
@default false`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},children:{required:!0,tsType:{name:"ReactNode"},description:"Checkbox list items to render."}},composes:["Omit"]};const X={selected:{kWkggS:"astryxgcxg3y",$$css:!0}};function W({label:c,value:t,description:m,endContent:n,isDisabled:f=!1,isLoading:b=!1,isChecked:a,onCheck:y,ref:x,xstyle:u,className:g,style:k,...C}){const e=s.use(T);if(e&&e.value!==void 0&&t===void 0)throw new Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");const L=(s.use(F)?.density??"balanced")==="compact"?"sm":"md",o=(e?.isDisabled??!1)||f,l=e?.isReadOnly??!1,r=b||(e?.loadingValue!=null&&t!==void 0?e.loadingValue===t:!1);let i=!1;e&&e.value!==void 0&&t!==void 0?i=e.value.includes(t):a!==void 0&&(i=a);const v=!l&&(e!=null||y!=null),p=()=>{o||l||r||(e&&e.value!==void 0&&t!==void 0?e.value.includes(t)?e.onChange?.(e.value.filter(w=>w!==t),t):e.onChange?.([...e.value,t],t):y?.(i!==!0))};return d.jsx(z,{...C,ref:x,label:c,description:m,endContent:n,isDisabled:o,onClick:v?p:void 0,"aria-checked":i==="indeterminate"?"mixed":i,"aria-busy":r||void 0,xstyle:[i===!0&&!o&&!l&&X.selected,u],className:g,style:k,startContent:d.jsx(B,{label:typeof c=="string"?c:"Checkbox",isLabelHidden:!0,value:i,onChange:()=>p(),isDisabled:o,isReadOnly:l,isLoading:r,size:L})})}W.displayName="CheckboxListItem";W.__docgenInfo={description:`A checkbox item for use within CheckboxList (collection mode)
or List (standalone mode).

In collection mode, checked state is derived from the parent's value array.
In standalone mode, uses isChecked/onCheck props directly.

Composes ListItem internally — gets density, dividers, hover/press,
focus, and container alignment for free.

@example
\`\`\`
<CheckboxListItem label="Email" value="email" />
<CheckboxListItem
  label="Accept terms"
  isChecked={accepted}
  onCheck={setAccepted}
/>
\`\`\``,methods:[],displayName:"CheckboxListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},label:{required:!0,tsType:{name:"ReactNode"},description:`Primary text label for the item.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich content (no truncation constraints —
child components control their own text behavior).`},value:{required:!1,tsType:{name:"string"},description:`Identity key for collection mode (REQUIRED inside CheckboxList).
Throws a runtime error if missing when used inside CheckboxList.`},description:{required:!1,tsType:{name:"string"},description:"Secondary text below the label."},endContent:{required:!1,tsType:{name:"ReactNode"},description:"Content rendered after the label area."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether this item is in a loading state. Renders a spinner inside the
checkbox and blocks interaction on this item only.

In collection mode, this is also driven automatically: when the parent
\`CheckboxList\` has a \`changeAction\`, the toggled item shows its
spinner while that promise is pending.
@default false`,defaultValue:{value:"false",computed:!1}},isChecked:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`Direct checked state (standalone mode only).
Ignored when inside CheckboxList.`},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Direct check handler (standalone mode only).
Ignored when inside CheckboxList.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Ref forwarded to the root element"}},composes:["Omit"]};export{M as C,W as a};
