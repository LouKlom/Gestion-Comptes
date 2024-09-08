import React from 'react'

export default function AdminNavBar() {
  return (
    <div>
        <ul class="flex border-b mx-4 mr-4 mt-4 bg-slate-200">
            <li class="-mb-px mr-1">
                <a class="bg-slate-100 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/Administration">Administration</a>
            </li>
            <li class="mr-1">
                <a class="bg-slate-100 inline-block py-2 px-4 text-blue-700 hover:text-blue-900 font-semibold" href="/Administration/Account">Gestion Comptes</a>
            </li>
            <li class="mr-1">
                <a class="bg-slate-100 inline-block py-2 px-4 text-blue-700 hover:text-blue-900 font-semibold" href="/">Ref Dépense</a>
            </li>
            <li class="mr-1">
                <a class="bg-slate-100 inline-block py-2 px-4 text-blue-700 hover:text-blue-900 font-semibold" href="/">Ref ?????</a>
            </li>
        </ul>
    </div>
  )
}
