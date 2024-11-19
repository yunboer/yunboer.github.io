import React from 'react'

export default function Tag({children}:{children:React.ReactNode}) {
  return (
    <div className="border hover:cursor-pointer rounded-lg inline-block px-2 py-1 m-1 text-xs font-medium bg-slate-100 hover:bg-slate-300">{children}</div>
  )
}
