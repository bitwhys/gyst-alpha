import { ContentPlaceholder } from '@/components/content-placeholder'
import { Navbar } from '@/components/navbar'
import { Check, Checks } from '@phosphor-icons/react'
import { Button } from './components/ui/button'
import { Timer } from '@phosphor-icons/react'
import { Checkbox } from './components/ui/checkbox'
import { cx } from './lib/utils'
import { EmptyState } from './components/emty-state'

interface Item {
  id: number
  size: 'sm' | 'md' | 'lg'
}

const items: Item[] = [
  // { id: 1, size: 'sm' as const },
  // { id: 2, size: 'md' as const },
  // { id: 3, size: 'lg' as const },
  // { id: 4, size: 'sm' as const },
  // { id: 5, size: 'md' as const },
  // { id: 6, size: 'sm' as const },
  // { id: 7, size: 'md' as const },
  // { id: 8, size: 'lg' as const },
  // { id: 9, size: 'sm' as const },
  // { id: 10, size: 'md' as const },
  // { id: 11, size: 'sm' as const },
  // { id: 12, size: 'md' as const },
  // { id: 13, size: 'lg' as const },
  // { id: 14, size: 'sm' as const },
  // { id: 15, size: 'md' as const },
  // { id: 16, size: 'sm' as const },
  // { id: 17, size: 'md' as const },
  // { id: 18, size: 'lg' as const },
  // { id: 19, size: 'sm' as const },
  // { id: 20, size: 'md' as const },
]

function App() {
  return (
    <div className="py-24 sm:py-32">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="mx-auto max-w-2xl space-y-12">
          {/* Content goes here */}
          <WeekDays />

          <div className="space-y-2">
            <div className="pb-5 sm:flex sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold">Sessions</h3>
              <div className="mt-3 sm:mt-0 sm:ml-4">
                <Button
                  type="button"
                  // variant="secondary"
                >
                  <Timer data-slot="icon" weight="bold" />
                  <span data-slot="label">Track time</span>
                </Button>
              </div>
            </div>
            {items.length === 0 ?
              <EmptyState />
            : <ul role="list" className="space-y-4">
                {items.map(item => (
                  <li key={item.id}>
                    <Session size={item.size} />
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function Session({
  children,
  size,
}: {
  children?: React.ReactNode
  size: 'sm' | 'md' | 'lg'
}) {
  return (
    <div className="divide-y divide-brd-main overflow-hidden rounded-[14px] bg-main shadow-sm [--tw-shadow-color:var(--color-gray-a5)]">
      <div className="px-2 py-3  bg-tertiary">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        <div className="flex items-ceenter justify-between">
          <div className="flex items-center gap-x-2 divide-x divide-brd-main">
            <div className="flex items-center gap-x-2">
              <Checkbox />
              <span className="text-sm font-medium">Monday</span>
            </div>
            <span className="text-sm text-cnt-tertiary">
              27 September, 2025
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-cnt-tertiary">Total time:</span>
            <span className="text-base font-semibold">04:20:18</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {children || (
          <ContentPlaceholder
            className={cx({
              'h-10': size === 'sm',
              'h-14': size === 'md',
              'h-20': size === 'lg',
            })}
          />
        )}
      </div>
    </div>
  )
}

function WeekDays() {
  return (
    <>
      <div className="grid grid-cols-7 gap-x-3">
        <div className="flex flex-col justify-center gap-y-2">
          <div className="text-base/6 font-semibold text-center">M</div>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-secondary px-6 py-3 text-xl font-semibold text-cnt-secondary">
            5
            <span className="hidden absolute right-1 top-1 flex items-center justify-center size-5">
              <Check size={16} weight="bold" />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <div className="text-base/6 font-semibold text-center">T</div>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-secondary px-6 py-3 text-xl font-semibold text-cnt-secondary">
            6
            <span className="hidden absolute right-1 top-1 flex items-center justify-center size-5">
              <Checks size={16} weight="bold" />
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <span className="text-base/6 font-semibold text-center">W</span>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-secondary px-6 py-3 text-xl font-semibold text-cnt-secondary outline-2 outline-offset-2 outline-transparent">
            7
            <span className="absolute right-1 top-1 block hidden size-4 rounded-full border border-emerald-500/40 bg-emerald-200"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <span className="text-base/6 font-semibold text-center">T</span>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-secondary px-6 py-3 text-xl font-semibold text-cnt-secondary">
            8
            <span className="absolute right-1 top-1 block hidden size-4 rounded-full border border-emerald-500/40 bg-emerald-200"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <span className="text-base/6 font-semibold text-center">F</span>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-primary px-6 py-3 text-xl font-semibold text-cnt-on-primary outline-2 outline-offset-2 outline-primary">
            9
            <span className="absolute right-1 top-1 block hidden size-4 rounded-full border border-emerald-500/40 bg-emerald-200"></span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-2">
          <span className="text-base/6 font-semibold text-center">S</span>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-secondary px-6 py-3 text-xl font-semibold text-cnt-secondary outline-2 outline-offset-2 outline-transparent">
            10
            <span className="absolute right-1 top-1 block hidden size-4 rounded-full border border-emerald-500/40 bg-emerald-200"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-2">
          <span className="text-base/6 font-semibold text-center">S</span>
          <div className="relative flex h-14 items-center justify-center rounded-xl bg-secondary px-6 py-3 text-xl font-semibold text-cnt-secondary outline-2 outline-offset-2 outline-transparent">
            11
            <span className="absolute right-1 top-1 block hidden size-4 rounded-full border border-emerald-500/40 bg-emerald-200"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
