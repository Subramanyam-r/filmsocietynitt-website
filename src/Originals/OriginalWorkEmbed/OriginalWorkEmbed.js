import React from 'react';

export default function OriginalWorkEmbed({ id }) {

    return (
        <div>
            <div className="embed-responsive embed-responsive-16by9 original-work-embed mx-auto my-5" data-aos="fade-up">
                <iframe id={id} loading="lazy" title={id} className="embed-responsive-item" src={"https://www.youtube.com/embed/" + id + "?rel=0"} allowFullScreen></iframe>
            </div>
        </div>
    )
}
