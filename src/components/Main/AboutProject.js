import React from 'react';

function AboutProject() {
    return (
        <>
            <section className="description">
                <div class="description__cell">
                    <h2 className="description__title">Дипломный проект включал 5 этапов</h2>
                    <p className="description__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div class="description__cell">
                    <h2 className="description__title">На выполнение диплома ушло 5 недель</h2>
                    <p className="description__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </section>
            <section className="timeline">
                <h2 className="timeline__week">1 неделя</h2>
                <h2 className="timeline__weeks">4 недели</h2>
                <h3 className="timeline__backend">Back-end</h3>
                <h3 className="timeline__frontend">Front-end</h3>
            </section>
        </>
    )
}

export default AboutProject;