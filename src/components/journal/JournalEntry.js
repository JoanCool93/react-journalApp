import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://lh3.googleusercontent.com/_0OiZeWgElIETUMZW8B9wEZR-V0BLMyDBHfK6hdYQVGzsryLQAZ0GEL9_PDi5NlzmpK8bETuJcZ0CtUQKnErvs36Xw=w640-h400-e365-rj-sc0x00ffffff)'
            }}>
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Ad Astrum
                </p>
                <p className="journal__entry-content">
                    Lorem Ipsum
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
