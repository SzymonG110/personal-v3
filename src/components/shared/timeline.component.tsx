'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import styles from './timeline.module.scss'
import dayjs from 'dayjs'

interface Event {
    date: Date
    name: string
}

interface TimelineProps {
    events: Event[]
}

const Timeline: React.FC<TimelineProps> = ({events}) => {
    return (
        <Swiper spaceBetween={0} slidesPerView={1} allowTouchMove={true} className={styles.swiper}
                breakpoints={{
                    320: {slidesPerView: 2},
                    540: {slidesPerView: 3},
                    710: {slidesPerView: 4}
                }}>
            {events.map((event, i) => (
                <SwiperSlide key={i}>
                    <div className={styles.title}>
                        <span>{event.name}</span>
                    </div>

                    <div className={styles.timestamp}>
                        <span className='date'>{dayjs(event.date).format('DD.MM.YYYY')}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Timeline
