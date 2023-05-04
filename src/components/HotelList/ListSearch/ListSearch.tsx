import format from 'date-fns/format'
import { useEffect, useRef, useState } from 'react'
import { DateRange, Range } from 'react-date-range'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaBed, FaCalendarDay } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import useOnClickOutside from '../../../hooks/useOnClickOutside'
import styles from './ListSearch.module.scss'

const defaultOptions = {
  adult: 1,
  children: 0,
  room: 1,
}

type OptionsType = typeof defaultOptions

const defaultDate: Range = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}

const ListSearch = () => {
  const location = useLocation()
  console.log({ location })

  const [destination, setDestination] = useState('')
  const [date, setDate] = useState<Range[]>([defaultDate])
  const [options, setOptions] = useState<OptionsType>(defaultOptions)

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

  useOnClickOutside(datePickerRef, showDateRange, toggleShowDateRange)
  useOnClickOutside(optionsRef, showOptions, toggleShowOptions)

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

  useEffect(() => {
    if (location?.state?.destination) {
      setDestination(location.state.destination)
    }

    if (location?.state?.options) {
      setOptions(location.state.options)
    }

    if (location?.state?.date) {
      setDate(location.state.date)
    }
  }, [location.state])

  const childrenAmountText = options.children === 1 ? 'child' : 'children'
  const childrenText =
    options.children > 0 ? `· ${options.children} ${childrenAmountText}` : ''
  const roomText = options.room === 1 ? 'room' : 'rooms'
  const optionsText = `${options.adult} adult ${childrenText} · ${options.room} ${roomText}`

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search</h2>
      <label htmlFor='search-input' className={styles.title}>
        Destination
      </label>
      <div className={styles.searchItem}>
        <FaBed className={[styles.icon, styles.searchIcon].join(' ')} />
        <input
          type='search'
          name='search-input'
          id='search-input'
          placeholder={destination || 'Your destination'}
          className={styles.searchInput}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <h4>Check-in Date</h4>
      <div ref={datePickerRef} className={styles.searchItem}>
        <FaCalendarDay className={styles.icon} />
        <button
          type='button'
          aria-label='select date'
          onClick={toggleShowDateRange}
          className={styles.searchItemText}
        >
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
              minDate={new Date()}
            />
          </div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='min-price' className={styles.label}>
          Min. Price
          <div>per night</div>
        </label>
        <input type='number' min={1} name='min-price' id='min-price' defaultValue={100} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor='max-price'>
          Max. Price
          <div>per night</div>
        </label>
        <input type='number' name='max-price' id='max-price' min={1} defaultValue={200} />
      </div>
      <h4>Options</h4>
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
      <button className={styles.searchButton}>Search</button>
    </div>
  )
}

export default ListSearch
