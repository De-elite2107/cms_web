import React from "react";


type clickButton = {
  style: string
  title : string
  href: string 
  icon?: string | any}

  
export function ClickButton({icon, style, title, href}  : clickButton) {
  return <>
    <a href={href} className={`${style}`}> 
      {icon  ? (
        <>
          <span>
            {icon}
          </span>
          <p>{title}</p>
        </>
      ) : ( `
        ${title}
      `)}
    </a>
    {/* <a href="" className=""> Watch Online</a> */}
  </>;
}
  