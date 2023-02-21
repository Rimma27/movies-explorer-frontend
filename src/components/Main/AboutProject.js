import React from 'react';

function AboutProject() {
    return (
        <>
            <div className="description__table">
                <div class="description__cell">
                    <h3 className="description__title">Дипломный проект включал 5 этапов</h3>
                    <p className="description__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div class="description__cell">
                    <h3 className="description__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="description__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="timeline__cell">
                <div className="timeline__week">1 неделя</div>
                <p className="timeline__title">Back-end</p>
            </div>
            <div className="timeline__cell">
                <div className="timeline__weeks">4 недели</div>
                <p className="timeline__title">Front-end</p>
            </div>
        </>
    )
}

export default AboutProject;