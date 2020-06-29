import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './experience.css'

export default function Experience() {

    return (
        <div className="experience" id="experience">
            <div className="in-middle_experience">
                <h3 className="section-title">
                    WORK EXPERIENCE
                </h3>
                <div className="centered line"></div>
                <div id="container">
                    <div class="tabs">
                        <input id="tab1" type="radio" name="tabs" checked />
                        <label for="tab1">вкладка 1</label>
                        <input id="tab2" type="radio" name="tabs" />
                        <label for="tab2">вкладка 2</label>
                        <input id="tab3" type="radio" name="tabs" />
                        <label for="tab3">вкладка 3</label>
                        <input id="tab4" type="radio" name="tabs" />
                        <label for="tab4">вкладка 4</label>
                        <section id="content1">
                            <p>Описание</p>
                        </section>
                        <section id="content2">
                            <p>Описание</p>
                        </section>
                        <section id="content3">
                            <p>Сайт ZORNET - Сегодня многие мечтают иметь собственный сайт, для разного рода деятельности, но, к сожалению не все знают о том, что можно создать сайт совершенно бесплатно. И это не обман, вам действительно не нужны средства для того чтобы создать себе любого вида сайт.
                            Такая возможность имеется благодаря конструктору uCoz. Все что необходимо это пройти регистрацию на странице создания сайтов.
</p>
                        </section>
                        <section id="content4">
                            <p>Описание</p>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    );
}
