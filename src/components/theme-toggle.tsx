import { useId } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/components/ui/theme-provider'

export default function ThemeToggle() {
  const id = useId()
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <div className="relative inline-grid h-8 grid-cols-[1fr_1fr] items-center text-sm font-medium text-cnt-secondary">
        <Switch
          id={id}
          checked={theme === 'dark'}
          onCheckedChange={handleThemeChange}
          className="peer data-[state=checked]:bg-secondary data-[state=unchecked]:bg-secondary absolute inset-0 h-[inherit] w-auto [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full"
        />
        <span className="peer-data-[state=checked]:text-cnt-primary pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center">
          <Moon size={16} weight="bold" />
        </span>
        <span className="peer-data-[state=unchecked]:text-cnt-primary pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center">
          <Sun size={16} weight="bold" />
        </span>
      </div>
      <Label htmlFor={id} className="sr-only">
        Labeled switch
      </Label>
    </div>
  )
}
