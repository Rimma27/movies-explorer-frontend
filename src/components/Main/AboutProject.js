import React from 'react';

function AboutProject() {
    return (
        <>
            <section className="description">
                <div className="description__cells">
                    <article class="description__cell">
                        <h2 className="description__title">Дипломный проект включал 5 этапов</h2>
                        <p className="description__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </article>
                    <article class="description__cell">
                        <h2 className="description__title">На выполнение диплома ушло 5 недель</h2>
                        <p className="description__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </article>
                </div>
            </section>
            <section className="timeline">
                <div className="timeline__cell">
                    <h2 className="timeline__week">1 неделя</h2>
                    <h3 className="timeline__dev">Back-end</h3>
                </div>
                <div className="timeline__cell timeline__cell_front">
                    <h2 className="timeline__week timeline__week_front">4 недели</h2>
                    <h3 className="timeline__dev">Front-end</h3>
                </div>
            </section>
        </>
    )
}

export default AboutProject;