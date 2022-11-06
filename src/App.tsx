import { useRef, useState } from 'react'
import { useSprings, useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import clamp from 'lodash.clamp'
import { calcx, calcValue } from './utils'

import styles from './styles.module.css'

// https://excalidraw.com/#json=wsLApA1N3Wu4f5FsMDcZ4,cpb5gLy_iEJ-9G0sYZZT6A

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
]

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

function Viewpager() {
  const index = useRef(0)
  const width = window.innerWidth

  const calcx = (offset: number, i: number) => {
    return width * (i + offset - 1)
  }

  const [offset, setOffset] = useState(0)

  const [props1, api1] = useSpring(() => ({ x: calcx(offset, 0) }))
  const [props2, api2] = useSpring(() => ({ x: calcx(offset, 1) }))
  const [props3, api3] = useSpring(() => ({ x: calcx(offset, 2) }))

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    if (active && Math.abs(mx) > 100) {
      setOffset(prev => prev + xDir)
      cancel()
    }
    api1.start({ x: calcx(offset, 0) })
    api2.start({ x: calcx(offset, 1) })
    api3.start({ x: calcx(offset, 2) })
  })

  return (
    <div className={styles.wrapper}>
      <animated.div className={styles.page} {...bind()} key={0} style={{ x: props1.x }}>
        <animated.div style={{ background: 'hotpink' }}>{calcValue(offset, 0)}</animated.div>
      </animated.div>
      <animated.div className={styles.page} {...bind()} key={1} style={props2}>
        <animated.div style={{ background: 'coral' }}>{calcValue(offset, 1)}</animated.div>
      </animated.div>
      <animated.div className={styles.page} {...bind()} key={2} style={props3}>
        <animated.div style={{ background: 'aquamarine' }}>{calcValue(offset, 2)}</animated.div>
      </animated.div>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex fill center">
      <Viewpager />
    </div>
  )
}
