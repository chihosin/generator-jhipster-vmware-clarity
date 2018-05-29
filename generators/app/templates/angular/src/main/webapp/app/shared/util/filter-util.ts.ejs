const dateFormat = require('dateformat');

export enum FilterType {
    NUMBER_RANGE = 'NUMBER_RANGE',
    NUMBER_ADVANCED = 'NUMBER_ADVANCED',
    STRING_CONTAIN = 'STRING_CONTAIN',
    STRING_ADVANCED = 'STRING_ADVANCED',
    DATE_RANGE = 'DATE_RANGE',
    DATE_ADVANCED = 'DATE_ADVANCED',
    TIME_RANGE = 'TIME_RANGE',
    TIME_ADVANCED = 'TIME_ADVANCED',
    DATE_TIME = 'DATE_TIME',
    DATE_TIME_RANGE = 'DATE_TIME_RANGE',
    DATE_TIME_ADVANCED = 'DATE_TIME_ADVANCED',
    SELECT = 'SELECT',
    BOOLEAN = 'BOOLEAN',
    ENUM = 'ENUM'
}

export enum FilterSymbol {
    EQUAL = 'EQUAL',
    NOT_EQUAL = 'NOT_EQUAL',
    GREATER_THAN_EQUAL = 'GREATER_THAN_EQUAL',
    LESS_THAN_EQUAL = 'LESS_THAN_EQUAL',
    CONTAIN = 'CONTAIN',
    NOT_CONTAIN = 'NOT_CONTAIN',
    END_CONTAIN = 'END_CONTAIN',
    BEGIN_CONTAIN = 'BEGIN_CONTAIN'
}

export enum FilterRelationship {
    AND = 'AND',
    OR = 'OR'
}

export function resolveFilter(filter: any) {
    let queryString = '';
    switch (filter.value.type) {
        case FilterType.NUMBER_RANGE:
            if (filter.value.min) {
                queryString += _conditionToQueryString(filter.property, FilterSymbol.GREATER_THAN_EQUAL, filter.value.min);
            }
            if (filter.value.max) {
                if (queryString !== '') {
                    queryString += ' AND ';
                }
                queryString += _conditionToQueryString(filter.property, FilterSymbol.LESS_THAN_EQUAL, filter.value.max);
            }
            break;
        case FilterType.NUMBER_ADVANCED:
            if (filter.value.primaryValue) {
                queryString += _conditionToQueryString(filter.property, filter.value.primarySymbol, filter.value.primaryValue);
            }
            if (filter.value.secondaryValue) {
                queryString += ` ${filter.value.relationship} ` + _conditionToQueryString(filter.property, filter.value.secondarySymbol, filter.value.secondaryValue);
            }
            break;
        case FilterType.STRING_CONTAIN:
            if (filter.value.keyword && filter.value.keyword !== '') {
                queryString += _conditionToQueryString(filter.property, FilterSymbol.CONTAIN, filter.value.keyword);
            }
            break;
        case FilterType.STRING_ADVANCED:
            if (filter.value.primaryValue && filter.value.primaryValue !== '') {
                queryString += _conditionToQueryString(filter.property, filter.value.primarySymbol, filter.value.primaryValue);
            }
            if (filter.value.secondaryValue && filter.value.secondaryValue !== '') {
                queryString += ` ${filter.value.relationship} ` + _conditionToQueryString(filter.property, filter.value.secondarySymbol, filter.value.secondaryValue);
            }
            break;
        case FilterType.DATE_RANGE:
            if (filter.value.min) {
                queryString += _conditionToQueryString(filter.property, FilterSymbol.GREATER_THAN_EQUAL, dateFormat(filter.value.min, 'yyyy-mm-dd'));
            }
            if (filter.value.max) {
                if (queryString !== '') {
                    queryString += ' AND ';
                }
                queryString += _conditionToQueryString(filter.property, FilterSymbol.LESS_THAN_EQUAL, dateFormat(filter.value.max, 'yyyy-mm-dd'));
            }
            break;
        case FilterType.DATE_ADVANCED:
            if (filter.value.primaryValue) {
                queryString += _conditionToQueryString(filter.property, filter.value.primarySymbol, dateFormat(filter.value.primaryValue, 'yyyy-mm-dd'));
            }
            if (filter.value.secondaryValue) {
                queryString += ` ${filter.value.relationship} `
                    + _conditionToQueryString(filter.property, filter.value.secondarySymbol, dateFormat(filter.value.secondaryValue, 'yyyy-mm-dd'));
            }
            break;
        case FilterType.TIME_RANGE:
            if (filter.value.min) {
                queryString += _conditionToQueryString(filter.property, FilterSymbol.GREATER_THAN_EQUAL, filter.value.min);
            }
            if (filter.value.max) {
                if (queryString !== '') {
                    queryString += ' AND ';
                }
                queryString += _conditionToQueryString(filter.property, FilterSymbol.LESS_THAN_EQUAL, filter.value.max);
            }
            break;
        case FilterType.TIME_ADVANCED:
            if (filter.value.primaryValue) {
                queryString += _conditionToQueryString(filter.property, filter.value.primarySymbol, filter.value.primaryValue);
            }
            if (filter.value.secondaryValue) {
                queryString += ` ${filter.value.relationship} `
                    + _conditionToQueryString(filter.property, filter.value.secondarySymbol, filter.value.secondaryValue);
            }
            break;
        case FilterType.DATE_TIME_RANGE:
            if (filter.value.min) {
                queryString += _conditionToQueryString(filter.property, FilterSymbol.GREATER_THAN_EQUAL, dateFormat(filter.value.min, 'yyyy-mm-dd\'T\'HH:MM:ss'));
            }
            if (filter.value.max) {
                if (queryString !== '') {
                    queryString += ' AND ';
                }
                queryString += _conditionToQueryString(filter.property, FilterSymbol.LESS_THAN_EQUAL, dateFormat(filter.value.max, 'yyyy-mm-dd\'T\'HH:MM:ss'));
            }
            break;
        case FilterType.DATE_TIME_ADVANCED:
            if (filter.value.primaryValue) {
                queryString += _conditionToQueryString(filter.property, filter.value.primarySymbol, dateFormat(filter.value.primaryValue, 'yyyy-mm-dd\'T\'HH:MM:ss'));
            }
            if (filter.value.secondaryValue) {
                queryString += ` ${filter.value.relationship} `
                    + _conditionToQueryString(filter.property, filter.value.secondarySymbol, dateFormat(filter.value.secondaryValue, 'yyyy-mm-dd\'T\'HH:MM:ss'));
            }
            break;
        case FilterType.SELECT:
            filter.value.selected.forEach(id => {
                if (queryString === '') {
                    queryString += `${filter.property}:${id}`;
                } else {
                    queryString += ` OR ${filter.property}:${id}`;
                }
            });
            break;
        case FilterType.BOOLEAN:
            if (filter.value.filter != null) {
                queryString += `${filter.property}: ${filter.value.filter}`;
            }
            break;
        case FilterType.ENUM:
            if (filter.value.filters) {
                filter.value.filters.forEach(name => {
                    if (queryString === '') {
                        queryString += `${filter.property}:${name}`;
                    } else {
                        queryString += ` OR ${filter.property}:${name}`;
                    }
                });
            }
            break;
        default:
            queryString = `${filter.property}: *`;
            break;
    }
    return queryString === '' ? '*:*' : queryString;
}

export function encodeFiltersQueryParam(filters: any): string {
    if (!filters) {
        return null;
    }

    let queryString = '';

    filters.forEach(filter => {
        queryString += `;${filter.property},`;
        if (typeof filter.value === 'object') {
            let str = '';
            const keys = Object.keys(filter.value);
            keys.forEach(name => {
                str += ',';
                const value = filter.value[name];
                if (!value) {
                } else if (typeof value === 'object') {
                    str += escape(JSON.stringify(filter.value[name]));
                } else {
                    str += escape(filter.value[name]);
                }
            });
            queryString += str.substr(1);
        } else {
            queryString += escape(filter.value);
        }
    });
    return queryString !== '' ? queryString.substr(1) : '';
}

export function decodeFiltersQueryParam(filters: any, queryString: string): any {
    if (!queryString || queryString === '') {
        return filters;
    }
    const stringArray = queryString.split(';');
    stringArray.forEach(valueStr => {
        const valuesString = valueStr.split(',');
        let property;
        let value = {};
        let keys = [];
        if (valuesString.length === 2) {
            filters[valuesString[0]] = unescape(valuesString[1]);
            return;
        }
        for (let i = 0; i < valuesString.length; i++) {
            if (i === 0) {
                property = valuesString[i];
            } else if (i === 1) {
                if (valuesString[i] === FilterType.STRING_CONTAIN || valuesString[i] === FilterType.STRING_ADVANCED) {
                    value = new StringFilterValue();
                } else if (valuesString[i] === FilterType.NUMBER_RANGE || valuesString[i] === FilterType.NUMBER_ADVANCED) {
                    value = new NumberFilterValue();
                } else if (valuesString[i] === FilterType.DATE_RANGE || valuesString[i] === FilterType.DATE_ADVANCED) {
                    value = new DateFilterValue();
                } else if (valuesString[i] === FilterType.TIME_RANGE || valuesString[i] === FilterType.TIME_ADVANCED) {
                    value = new TimeFilterValue();
                } else if (valuesString[i] === FilterType.DATE_TIME_RANGE || valuesString[i] === FilterType.DATE_TIME_ADVANCED) {
                    value = new DateTimeFilterValue();
                } else if (valuesString[i] === FilterType.SELECT) {
                    value = new SelectFilterValue();
                } else if (valuesString[i] === FilterType.BOOLEAN) {
                    value = new BooleanFilterValue();
                } else if (valuesString[i] === FilterType.ENUM) {
                    value = new EnumFilterValue();
                } else {
                    continue;
                }
                keys = Object.keys(value);
                value[keys[i - 1]] = unescape(valuesString[i]);
            } else {
                const str = unescape(valuesString[i]);
                try {
                    value[keys[i - 1]] = JSON.parse(str);
                } catch (e) {
                    value[keys[i - 1]] = str;
                }
            }
        }
        filters[property] = {
            property,
            value
        };
    });
    return filters;
}

export function  StringFilter(value: string, filterValue: StringFilterValue) {
    if (filterValue.type === FilterType.STRING_CONTAIN) {
        return _conditionRegularCheck(value, filterValue.keyword, FilterSymbol.CONTAIN);
    }
    if (filterValue.relationship === FilterRelationship.OR) {
        return (filterValue.primaryValue !== '' && filterValue.primarySymbol
            && _conditionRegularCheck(value, filterValue.primaryValue, filterValue.primarySymbol)) ||
            (filterValue.secondaryValue !== '' && filterValue.secondarySymbol
                && _conditionRegularCheck(value, filterValue.secondaryValue, filterValue.secondarySymbol));
    }
    return _conditionRegularCheck(value, filterValue.primaryValue, filterValue.primarySymbol) &&
        _conditionRegularCheck(value, filterValue.secondaryValue, filterValue.secondarySymbol);
}

export function  NumberFilter(value: string, filterValue: NumberFilterValue) {
    if (filterValue.type === FilterType.NUMBER_RANGE) {
        return _conditionRegularCheck(value, filterValue.min, FilterSymbol.GREATER_THAN_EQUAL) &&
            _conditionRegularCheck(value, filterValue.max, FilterSymbol.LESS_THAN_EQUAL);
    }
    if (filterValue.relationship === FilterRelationship.OR) {
        return (filterValue.primaryValue != null && filterValue.primarySymbol
            && _conditionRegularCheck(value, filterValue.primaryValue, filterValue.primarySymbol)) ||
            (filterValue.secondaryValue != null && filterValue.secondarySymbol
                && _conditionRegularCheck(value, filterValue.secondaryValue, filterValue.secondarySymbol));
    }
    return _conditionRegularCheck(value, filterValue.primaryValue, filterValue.primarySymbol) &&
        _conditionRegularCheck(value, filterValue.secondaryValue, filterValue.secondarySymbol);
}

export function  DateFilter(value: any, filterValue: any) {
    if (filterValue.type === FilterType.DATE_RANGE || FilterType.DATE_TIME_RANGE) {
        return (!filterValue.min || _conditionRegularCheck(new Date(value), new Date(filterValue.min), FilterSymbol.GREATER_THAN_EQUAL)) &&
            (!filterValue.max || _conditionRegularCheck(new Date(value), new Date(filterValue.max), FilterSymbol.LESS_THAN_EQUAL));
    }
    if (filterValue.relationship === FilterRelationship.OR) {
        return (filterValue.primaryValue && filterValue.primarySymbol
            && _conditionRegularCheck(new Date(value), new Date(filterValue.primaryValue), filterValue.primarySymbol)) ||
            (filterValue.secondaryValue && filterValue.secondarySymbol
                && _conditionRegularCheck(new Date(value), new Date(filterValue.secondaryValue), filterValue.secondarySymbol));
    }
    return (filterValue.primaryValue || filterValue.primarySymbol === null ||
        _conditionRegularCheck(new Date(value), new Date(filterValue.primaryValue), filterValue.primarySymbol)) &&
        (filterValue.secondaryValue || filterValue.secondarySymbol === null ||
            _conditionRegularCheck(new Date(value), new Date(filterValue.secondaryValue), filterValue.secondarySymbol));
}

export function  TimeFilter(value: string, filterValue: TimeFilterValue) {
    const date = new Date(`1970-1-1 ${value}`);
    if (filterValue.type === FilterType.DATE_RANGE || FilterType.DATE_TIME_RANGE) {
        return (!filterValue.min ||
            _conditionRegularCheck(date, new Date(`1970-1-1 ${filterValue.min}`), FilterSymbol.GREATER_THAN_EQUAL)) &&
            (!filterValue.max ||
                _conditionRegularCheck(date, new Date(`1970-1-1 ${filterValue.max}`), FilterSymbol.LESS_THAN_EQUAL));
    }
    if (filterValue.relationship === FilterRelationship.OR) {
        return (filterValue.primaryValue && filterValue.primarySymbol
            && _conditionRegularCheck(date, new Date(`1970-1-1 ${filterValue.primaryValue}`), filterValue.primarySymbol)) ||
            (filterValue.secondaryValue && filterValue.secondarySymbol
                && _conditionRegularCheck(date, new Date(`1970-1-1 ${filterValue.secondaryValue}`), filterValue.secondarySymbol));
    }
    return (!filterValue.primaryValue || filterValue.primarySymbol === null ||
        _conditionRegularCheck(date, new Date(`1970-1-1 ${filterValue.primaryValue}`), filterValue.primarySymbol)) &&
        (!filterValue.secondaryValue || filterValue.secondarySymbol === null ||
            _conditionRegularCheck(date, new Date(`1970-1-1 ${filterValue.secondaryValue}`), filterValue.secondarySymbol));
}

function _conditionToQueryString(property: string, symbol: string, value: any) {
    if (typeof value === 'string') {
        value = value.replace(/(^\s*)|(\s*$)/g, '');
    }
    switch (symbol) {
        case FilterSymbol.EQUAL:
            return `${property}:${value}`;
        case FilterSymbol.NOT_EQUAL:
            return isNaN(value) ? `-${property}:*${value}*` : `-${property}:${value}`;
        case FilterSymbol.GREATER_THAN_EQUAL:
            return `${property}:[${value} TO *]`;
        case FilterSymbol.LESS_THAN_EQUAL:
            return `${property}:[* TO ${value}]`;
        case FilterSymbol.CONTAIN:
            return `${property}:*${value}*`;
        case FilterSymbol.NOT_CONTAIN:
            return `${property}:!*${value}*`;
        case FilterSymbol.END_CONTAIN:
            return `${property}:${value}*`;
        case FilterSymbol.BEGIN_CONTAIN:
            return `${property}:*${value}`;
    }
}

function _conditionRegularCheck(value: any, keyword: any, symbol: FilterSymbol) {
    if (keyword == null || keyword === '' || !symbol) {
        return true;
    }
    if (typeof keyword === 'string') {
        keyword = keyword.replace(/(^\s*)|(\s*$)/g, '');
    }
    try {
        switch (symbol) {
            case FilterSymbol.EQUAL:
                return value === keyword;
            case FilterSymbol.NOT_EQUAL:
                return value !== keyword;
            case FilterSymbol.GREATER_THAN_EQUAL:
                return value >= keyword;
            case FilterSymbol.LESS_THAN_EQUAL:
                return value <= keyword;
            case FilterSymbol.CONTAIN:
                return value.indexOf(keyword) > -1;
            case FilterSymbol.NOT_CONTAIN:
                return value.indexOf(keyword) === -1;
            case FilterSymbol.BEGIN_CONTAIN:
                return value.indexOf(keyword) === 0;
            case FilterSymbol.END_CONTAIN:
                return value.indexOf(keyword) === value.length - keyword.length;
            default:
                return false;
        }
    } catch (e) {
        return false;
    }
}

export class NumberFilterValue {
    type: FilterType;
    enableAdvancedFilter: boolean;
    max: number;
    min: number;
    primarySymbol: FilterSymbol;
    primaryValue: number;
    secondarySymbol: FilterSymbol;
    secondaryValue: number;
    relationship: FilterRelationship;

    constructor() {
        this.type = FilterType.NUMBER_RANGE;
        this.enableAdvancedFilter = false;
        this.max = null;
        this.min = null;
        this.primarySymbol = null;
        this.primaryValue = null;
        this.secondarySymbol = null;
        this.secondaryValue = null;
        this.relationship = FilterRelationship.AND;
    }
}

export class StringFilterValue {
    type: FilterType;
    enableAdvancedFilter: boolean;
    keyword: string;
    primarySymbol: FilterSymbol;
    primaryValue: string;
    secondarySymbol: FilterSymbol;
    secondaryValue: string;
    relationship: FilterRelationship;

    constructor() {
        this.type = FilterType.STRING_CONTAIN;
        this.enableAdvancedFilter = false;
        this.keyword = '';
        this.primarySymbol = null;
        this.primaryValue = '';
        this.secondarySymbol = null;
        this.secondaryValue = '';
        this.relationship = FilterRelationship.AND;
    }
}

export class DateFilterValue {
    type: FilterType;
    enableAdvancedFilter: boolean;
    max: string;
    min: string;
    primarySymbol: FilterSymbol;
    primaryValue: number;
    secondarySymbol: FilterSymbol;
    secondaryValue: number;
    relationship: FilterRelationship;

    constructor() {
        this.type = FilterType.DATE_RANGE;
        this.enableAdvancedFilter = false;
        this.max = null;
        this.min = null;
        this.primarySymbol = null;
        this.primaryValue = null;
        this.secondarySymbol = null;
        this.secondaryValue = null;
        this.relationship = FilterRelationship.AND;
    }
}

export class TimeFilterValue {
    type: FilterType;
    enableAdvancedFilter: boolean;
    max: string;
    min: string;
    primarySymbol: FilterSymbol;
    primaryValue: number;
    secondarySymbol: FilterSymbol;
    secondaryValue: number;
    relationship: FilterRelationship;

    constructor() {
        this.type = FilterType.TIME_RANGE;
        this.enableAdvancedFilter = false;
        this.max = null;
        this.min = null;
        this.primarySymbol = null;
        this.primaryValue = null;
        this.secondarySymbol = null;
        this.secondaryValue = null;
        this.relationship = FilterRelationship.AND;
    }
}

export class DateTimeFilterValue {
    type: FilterType;
    enableAdvancedFilter: boolean;
    max: string;
    min: string;
    primarySymbol: FilterSymbol;
    primaryValue: number;
    secondarySymbol: FilterSymbol;
    secondaryValue: number;
    relationship: FilterRelationship;

    constructor() {
        this.type = FilterType.DATE_TIME_RANGE;
        this.enableAdvancedFilter = false;
        this.max = null;
        this.min = null;
        this.primarySymbol = null;
        this.primaryValue = null;
        this.secondarySymbol = null;
        this.secondaryValue = null;
        this.relationship = FilterRelationship.AND;
    }
}

export class SelectFilterValue {
    type: FilterType;
    selected: Array<any>;
    constructor() {
        this.type = FilterType.SELECT;
        this.selected = [];
    }
}

export class BooleanFilterValue {
    type: FilterType;
    filter?: boolean;
    constructor() {
        this.type = FilterType.BOOLEAN;
        this.filter = null;
    }
}

export class EnumFilterValue {
    type: FilterType;
    filters?: Array<string>;
    constructor() {
        this.type = FilterType.ENUM;
        this.filters = null;
    }
}
