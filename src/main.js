"use strict";

/**
 * @description Возвращающую разметку меню.
 * @return {String} Разметка меню.
 */
const createSiteMenuTemplate = () => {
  return (
    `<section class="control__btn-wrap">
      <input
        type="radio"
        name="control"
        id="control__new-task"
        class="control__input visually-hidden"
      />
      <label for="control__new-task" class="control__label control__label--new-task"
        >+ ADD NEW TASK</label
      >
      <input
        type="radio"
        name="control"
        id="control__task"
        class="control__input visually-hidden"
        checked
      />
      <label for="control__task" class="control__label">TASKS</label>
      <input
        type="radio"
        name="control"
        id="control__statistic"
        class="control__input visually-hidden"
      />
      <label for="control__statistic" class="control__label"
        >STATISTICS</label
      >
    </section>`
  );
};

/**
 * @description Выполняет вставку в DOM.
 * @param {Object} container Контейнер для вставки.
 * @param {String} template Разметка в виде строки.
 * @param {String} place Положение в разметке.
 */
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
