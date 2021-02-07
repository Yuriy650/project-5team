import React, {Component} from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='text'>
                <p>Веб-додаток для обліку доходів та витрат. Працює без входу, всі дані зберігаємо в localStorage.</p>
                <p>Додаток зроблено на Реакті. Дані можна фільтрувати в залежності від вибраного періоду і сортувати по категоріях і коштах.</p>
                <p>Окремі таби для доходів і видатків. </p>
            </div>
        )
    }
}

export default Home;
