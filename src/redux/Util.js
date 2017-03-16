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
            loadedData.push({ ...item, start_date: formattedDate, clicks: formattedClicks, cost_per_acquisition: { ...item.cost_per_acquisition, goal: formattedCpaGoal, value: formattedCpaValue }, spend: formattedSpend });
        })

        return loadedData;
    }

    static filterData(filter, data) {

    }
}