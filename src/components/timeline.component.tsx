'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import styles from './timeline.module.scss'
import {useEffect, useState} from 'react'
import {getEvents} from '../lib/api'
import toast from 'react-hot-toast'
import {Prisma} from '@prisma/client'
import dayjs from 'dayjs'

const Timeline = () => {
    const [events, setEvents] = useState<Prisma.EventCreateInput[] | []>([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        const response = await getEvents()
        if (response.error)
            return toast.error('Failed to get projects')
        setEvents(response.events)
    }

    return (
        <Swiper spaceBetween={0} slidesPerView={1} allowTouchMove={true} className={styles.swiper}
                breakpoints={{
                    320: {slidesPerView: 2},
                    540: {slidesPerView: 3},
                    710: {slidesPerView: 4}
                }}>
            {events && events.length > 1 && events.map((event, i) => (
                <SwiperSlide key={i}>
                    <div className={styles.title}>
                        <span>{event.name}</span>
                    </div>

                    <div className={styles.timestamp}>
                        <span>{dayjs(event.eventDate).format('DD.MM.YYYY')}</span>
                    </div>
                </SwiperSlide>
            ))}
            <SwiperSlide>
                <div className={styles.title}>
                    <span>Today</span>
                </div>

                <div className={styles.timestamp}>
                    <span className='date'>{dayjs().format('DD.MM.YYYY')}</span>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Timeline
