import * as React from 'react'
import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
      <div
          className={cn(
              'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:shadow-xl transition-all duration-300',
              className,
          )}
          {...props}
      />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
      <div className={cn('px-6 pb-2', className)} {...props} />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
      <div className={cn('font-semibold text-lg', className)} {...props} />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
      <div className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
      <div className={cn('px-6', className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
      <div className={cn('px-6 pt-4', className)} {...props} />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}