import{aP as g,a3 as y,at as t,X as w}from"./iframe-CJeV72rj.js";import{D as b}from"./DropdownMenu-BTjyzTtd.js";function o({items:a,label:e="More options",variant:r="ghost",size:i,icon:s,isDisabled:d=!1,isMenuOpen:l,onOpenChange:u,xstyle:m,className:n,style:p,"data-testid":c,ref:f}){const h=g(i,"md"),M=w("moreHorizontal");return y.jsx(b,{className:n?`${t("more-menu")} ${n}`:t("more-menu"),xstyle:m,style:p,isMenuOpen:l,onOpenChange:u,button:{label:e,icon:s??M,variant:r,size:h,isDisabled:d,tooltip:e,isIconOnly:!0,ref:f},items:a,hasChevron:!1,"data-testid":c})}o.displayName="MoreMenu";o.__docgenInfo={description:`Overflow menu with a three-dot icon trigger.

A convenience wrapper around DropdownMenu with icon-only button defaults.

@example
\`\`\`
<MoreMenu
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete },
  ]}
/>
\`\`\``,methods:[],displayName:"MoreMenu",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Ref forwarded to the trigger button"},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| DropdownMenuItemData
| DropdownMenuDivider
| DropdownMenuSection`,elements:[{name:"DropdownMenuItemData"},{name:"DropdownMenuDivider"},{name:"DropdownMenuSection"}]}],raw:"DropdownMenuOption[]"},description:"Menu items \\u2014 data array of actions, dividers, and sections.\nSame type as DropdownMenu's `items` prop."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the trigger button.
Always used as aria-label (the button is always icon-only).
@default 'More options'`,defaultValue:{value:"'More options'",computed:!1}},variant:{required:!1,tsType:{name:"ButtonVariantMap"},description:`Visual style variant of the trigger button.
@default 'ghost'`,defaultValue:{value:"'ghost'",computed:!1}},size:{required:!1,tsType:{name:"unknown"},description:`Size of the trigger button.
@default 'md'`},icon:{required:!1,tsType:{name:"ReactNode"},description:`Override the default three-dot icon.
@default Three horizontal dots from the icon registry ('moreHorizontal')`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the menu trigger is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled open state for the menu."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback fired when the menu visibility changes."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Pick"]};export{o as M};
