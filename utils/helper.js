import { filter, assign, map } from 'lodash';

export function getFilterWithState(refData, field, value = true) {
  return filter(refData, filter => {
    if (!filter.hasOwnProperty('state')) {
      filter.state = {};
    }
    return filter.state[field] !== value;
  });
}
export function encodeUriParameter(data, optional = {}) {
  let param = assign({}, optional);

  param.identify = 'bds';
  param.vertical = optional.vertical || 'all';
  param.filter_key = '';
  param.name = '';
  param.point_key = '';
  param.point_value = '';
  param.point_weight = '';
  map(data, filter => {
    if (isTags(filter)) {
      if (param.hasOwnProperty(filter.field)) {
        param[filter.field] += `${encodeURIComponent(filter.name)}|${encodeURIComponent(filter.value)};`;
      } else {
        param[filter.field] = `${encodeURIComponent(filter.name)}|${encodeURIComponent(filter.value)};`;
      }
    } else if (isFilterProperty(filter)) {
      // 왜 undefined 가 뜨는지?
      param.filter_key += `${filter.filter_key};`;
      param.name += `${filter.name};`;
      param.point_key += `${JSON.stringify(filter.point_key)
        .replace(/\[/gi, '')
        .replace(/\]/gi, '')
        .replace(/\,/gi, '|')};`;
      param.point_value += `${JSON.stringify(filter.point_value)
        .replace(/\[/gi, '')
        .replace(/\]/gi, '')
        .replace(/\,/gi, '|')};`;
      param.point_weight += `${JSON.stringify(filter.point_weight)
        .replace(/\[/gi, '')
        .replace(/\]/gi, '')
        .replace(/\,/gi, '|')};`;
    }
  });
  map(param, (filters, key) => {
    if (filters === '') {
      delete param[key];
    }
  });
  return JSON.stringify(param)
    .replace(/\"\,\"/gi, '&')
    .replace(/\{\"/gi, '')
    .replace(/\"\}/gi, '')
    .replace(/\"\:\"/gi, '=');
}

export function isTags(object) {
  return object.hasOwnProperty('field') || object.hasOwnProperty('value');
}

export function isFilterProperty(object) {
  return object.hasOwnProperty('point_key') && object.hasOwnProperty('point_weight');
}
