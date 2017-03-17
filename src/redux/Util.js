import data from './ap-data-sample.json'
import dateFormat from 'dateformat'

/* my catch all util file to simpulate API calls or other functions */
export default class Util {
    static loadData() {
        const loadedData = [];

        const formatCurrency = (value) => {
            return value.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })
        }

        data.forEach(item => {
            const formattedDate = dateFormat(item.start_date, "mmmm dd, yyyy - h:MM TT");
            const formattedClicks = item.clicks.toLocaleString('en-CA');
            const formattedCpaGoal = formatCurrency(item.cost_per_acquisition.goal);
            const formattedCpaValue = formatCurrency(item.cost_per_acquisition.value);
            const formattedSpend = formatCurrency(item.spend);
            loadedData.push({ id: item.id, status: item.status, name: item.name, start_date: formattedDate, clicks: formattedClicks, cpa_goal: formattedCpaGoal, cpa_value: formattedCpaValue, spend: formattedSpend });
        })

        return loadedData;
    }

    static filterData(filter, data) {

    }
}