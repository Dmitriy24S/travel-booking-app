import { format } from 'date-fns'
import React, { useRef, useState } from 'react'
import { DateRange, Range } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { BsFillPersonFill } from 'react-icons/bs'
import {
  FaBed,
  FaCalendarDay,
  FaCar,
  FaPlaceOfWorship,
  FaPlane,
  FaTaxi,
} from 'react-icons/fa'

import useOnClickOutside from '../hooks/useOnClickOutside'
import styles from './Header.module.scss'

type Props = {
  //
}

const Header = (props: Props) => {
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      // endDate: null,
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const [showDateRange, setShowDateRange] = useState(false)
  const datePickerRef = useRef<HTMLDivElement>(null)

  function toggleShowDateRange() {
    setShowDateRange(!showDateRange)
  }

  const [showOptions, setShowOptions] = useState(false)
  const optionsRef = useRef<HTMLDivElement>(null)

  function toggleShowOptions() {
    setShowOptions(!showOptions)
  }

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  function incrementAdult() {
    setOptions({ ...options, adult: options.adult + 1 })
  }
  function decrementAdult() {
    if (options.adult > 1) {
      setOptions({ ...options, adult: options.adult - 1 })
    }
  }

  function incrementChildren() {
    setOptions({ ...options, children: options.children + 1 })
  }
  function decrementChildren() {
    if (options.children > 0) {
      setOptions({ ...options, children: options.children - 1 })
    }
  }

  function incrementRoom() {
    setOptions({ ...options, room: options.room + 1 })
  }
  function decrementRoom() {
    if (options.room > 1) {
      setOptions({ ...options, room: options.room - 1 })
    }
  }

  useOnClickOutside(datePickerRef, showDateRange, toggleShowDateRange)
  useOnClickOutside(optionsRef, showOptions, toggleShowOptions)

  const childrenAmountText = options.children === 1 ? 'child' : 'children'
  const childrenText =
    options.children > 0 ? `· ${options.children} ${childrenAmountText}` : ''
  const roomText = options.room === 1 ? 'room' : 'rooms'
  const optionsText = `${options.adult} adult ${childrenText} · ${options.room} ${roomText}`

  return (
    <div className={styles.header}>
      <div className={styles.list}>
        <div className={[styles.listItem, styles.active].join(' ')}>
          <FaBed />
          <span>Stays</span>
        </div>
        <div className={styles.listItem}>
          <FaPlane />
          <span>Flights</span>
        </div>
        <div className={styles.listItem}>
          <FaCar />
          <span>Car rentals</span>
        </div>
        <div className={styles.listItem}>
          <FaPlaceOfWorship />
          <span>Attractions</span>
        </div>
        <div className={styles.listItem}>
          <FaTaxi />
          <span>Airport taxis</span>
        </div>
      </div>
      <h1 className={styles.title}>A lifetime of discounts? It's Genius</h1>
      <p className={styles.description}>
        Get rewarded for your travels - unlock instant savings of 10% or more with a free
        Booking account.
      </p>
      <button className={styles.signInButton}>Sign in / Register</button>
      <div className={styles.search}>
        <div className={styles.searchItem}>
          <FaBed className={[styles.icon, styles.searchIcon].join(' ')} />
          <input
            type='text'
            name='header-search'
            id='header-search'
            placeholder='Where are you going?'
            className={styles.searchInput}
          />
        </div>
        <div
          ref={datePickerRef}
          // onBlur={() => setShowDateRange(false)}
          className={styles.searchItem}
        >
          <FaCalendarDay className={styles.icon} />
          <button
            type='button'
            aria-label='select date'
            onClick={toggleShowDateRange}
            className={styles.searchItemText}
          >
            {/* {date[0]?.startDate?.toDateString()} to {date[0]?.endDate?.toDateString()} // Tue May 02 2023 */}
            {/* Format to month/day/year: 05/02/2023 to 05/02/2023 */}
            {date[0].startDate && date[0].endDate
              ? `${format(date[0]?.startDate, 'MM/dd/yyyy')} to ${format(
                  date[0]?.endDate,
                  'MM/dd/yyyy'
                )}`
              : 'select date'}
          </button>
          {showDateRange && (
            <div className={styles.dateRangeContainer}>
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                onChange={(item) => setDate([item.selection])}
                ranges={date}
              />
            </div>
          )}
        </div>
        <div ref={optionsRef} className={styles.searchItem}>
          <BsFillPersonFill className={styles.icon} />
          <button
            type='button'
            onClick={toggleShowOptions}
            className={styles.searchItemText}
          >
            {optionsText}
          </button>
          {showOptions && (
            <div className={styles.options}>
              <div className={styles.optionItem}>
                <span>Adult</span>
                <div className={styles.optionButtons}>
                  <button
                    type='button'
                    disabled={options.adult === 1}
                    onClick={decrementAdult}
                  >
                    -
                  </button>
                  <span>{options.adult}</span>
                  <button type='button' onClick={incrementAdult}>
                    +
                  </button>
                </div>
              </div>
              <div className={styles.optionItem}>
                <span>Children</span>
                <div className={styles.optionButtons}>
                  <button
                    type='button'
                    disabled={options.children === 0}
                    onClick={decrementChildren}
                  >
                    -
                  </button>
                  <span>{options.children}</span>
                  <button type='button' onClick={incrementChildren}>
                    +
                  </button>
                </div>
              </div>
              <div className={styles.optionItem}>
                <span>Rooms</span>
                <div className={styles.optionButtons}>
                  <button
                    type='button'
                    disabled={options.room === 1}
                    onClick={decrementRoom}
                  >
                    -
                  </button>
                  <span>{options.room}</span>
                  <button type='button' onClick={incrementRoom}>
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
