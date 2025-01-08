'use client'

import { Button } from './Button'
import { ChevronRight, LogIn, Plus } from 'lucide-react'

export function ButtonDemo() {
  return (
    <div className="p-12 space-y-8">
      {/* Default Buttons */}
      <div className="space-y-2">
        <h3 className="font-mono text-sm text-gray-600 mb-4">Default Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            Default Button
          </Button>
          <Button size="sm">
            Small Button
          </Button>
          <Button size="lg">
            Large Button
          </Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Black Buttons */}
      <div className="space-y-2">
        <h3 className="font-mono text-sm text-gray-600 mb-4">Black Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="black">
            Black Button
          </Button>
          <Button variant="black" size="sm">
            Small Black
          </Button>
          <Button variant="black" size="lg">
            Large Black
          </Button>
          <Button variant="black" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="space-y-2">
        <h3 className="font-mono text-sm text-gray-600 mb-4">Ghost Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost">
            Ghost Button
          </Button>
          <Button variant="ghost" size="sm">
            Small Ghost
          </Button>
          <Button variant="ghost" size="lg">
            Large Ghost
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="space-y-2">
        <h3 className="font-mono text-sm text-gray-600 mb-4">Outline Variant</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">
            Outline Button
          </Button>
          <Button variant="outline" size="sm">
            Small Outline
          </Button>
          <Button variant="outline" size="lg">
            Large Outline
          </Button>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Real-world Examples */}
      <div className="space-y-2">
        <h3 className="font-mono text-sm text-gray-600 mb-4">Example Usage</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="black">
            Try Free
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>
      </div>
    </div>
  )
} 