import { CalendarCheck, ClipboardText } from '@phosphor-icons/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { cx } from '@/lib/utils'

interface Tab {
  name: string
  href: string
  icon: React.ElementType
  current: boolean
}

const _tabs: Tab[] = [
  { name: 'Tasks', href: '#', icon: ClipboardText, current: false },
  { name: 'Week 19', href: '#', icon: CalendarCheck, current: true },
]

export default function Tabs({ tabs = _tabs }: { tabs?: Tab[] }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:hidden">
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          defaultValue={tabs.find(tab => tab.current).name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        >
          {tabs.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500"
        />
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map(tab => (
            <a
              key={tab.name}
              href={tab.href}
              aria-current={tab.current ? 'page' : undefined}
              className={cx(
                tab.current ?
                  'bg-secondary dark:bg-gray-6 text-cnt-primary'
                : 'text-cnt-tertiary hover:text-cnt-secondary font-semibold',
                'h-8 inline-flex items-center gap-x-2  rounded-lg px-2 py-1 text-sm/6 font-medium'
              )}
            >
              <tab.icon size={20} />
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
