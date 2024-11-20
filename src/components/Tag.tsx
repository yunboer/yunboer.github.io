import React from 'react'

export default function Tag({children}:{children:React.ReactNode}) {
  return (
    <div className="border-custom hover:cursor-pointer rounded-lg inline-block px-2 py-1 m-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500">{children}</div>
  )
}
