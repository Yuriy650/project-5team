import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <ol className="ol-list">
                    <li>Необхідно створити веб-додаток для обліку доходів / витрат</li>
                    <li>Додаток працює без входу, всі дані зберігаємо в localStorage</li>
                    <li>Додаток необхідно робити на Реакті. Решта технології або бібліотеки за бажанням ментора /
                        студентів
                    </li>
                </ol>
            </div>
        )
    }
}

export default Home;
