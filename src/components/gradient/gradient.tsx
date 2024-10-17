import { cn } from '@/utils/cn'

function Gradient({ className }: { className?: string }) {
  return <div className={cn('bg-gradient-to-b from-primary-900 to-primary-900', className)} />
}

export default Gradient
