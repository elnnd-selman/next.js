import { after } from 'next/server'
import { setTimeout } from 'timers/promises'

export default function Page() {
  return <Wrapper />
}

function Wrapper() {
  return <Inner />
}

function Inner() {
  foo()
  return null
}

async function foo() {
  await setTimeout(0) // cut off async stack here, the rest should work like it was sync
  after(bar())
}

async function bar() {
  after(function aboveZap() {
    return zap()
  })
}

async function zap() {
  throws()
}

function throws() {
  throw new Error('kaboom')
}
