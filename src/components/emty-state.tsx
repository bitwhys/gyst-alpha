import { RiExternalLinkLine } from '@remixicon/react'

import { Card } from '@/components/ui/card'
import { ProgressCircle } from '@/components/charts/progress-circle'

const data = [
  {
    name: 'Hours Tracked',
    capacity: '0/20Hrs',
    value: 0,
  },
  {
    name: 'Tasks Completed',
    capacity: '0/25',
    value: 0,
  },
  {
    name: 'Projects Completed',
    capacity: '0/5',
    value: 0,
  },
]

export function EmptyState() {
  return (
    <>
      <Card className="overflow-hidden p-0">
        <div className="p-6">
          <h3 className="text-sm font-medium">Overview</h3>
          <p className="text-sm text-cnt-secondary">
            No activity recorded yet.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.map(item => (
              <div
                key={item.name}
                className="flex items-center gap-4 sm:flex-col sm:justify-center sm:gap-1.5"
              >
                <ProgressCircle value={0} variant="neutral">
                  <span className="text-sm font-medium text-cnt-secondary">
                    {item.value}%
                  </span>
                </ProgressCircle>
                <div className="mt-0 text-left sm:mt-2 sm:text-center">
                  <p className="text-sm font-medium">{item.capacity}</p>
                  <p className="text-sm text-cnt-secondary">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 border-t border-brd-alternative bg-tertiary px-6 py-4">
          <h4 className="text-sm font-medium">
            Looks pretty empty, well this is awkward...
          </h4>
          <p className="mt-0.5 text-sm text-cnt-secondary">
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded text-sm text-cnt-accent hover:underline hover:underline-offset-4"
            >
              Try creating a new task, you'll be glad you did.
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
      </Card>
    </>
  )
}
