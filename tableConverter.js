const TableConverter = {
    ROW_NODE_SELECTOR: () => {
        return document.querySelectorAll(".qv_timetable > tbody > .full_hour");
    },

    COLUMN_NODE_SELECTOR: (rowNode) => {
        return rowNode.querySelectorAll("td").filter(node => {
            // if there's no styling, assume it's a populated field
            node.classList.value !== "";
        });
    },

    getAllNodes: () => {
        let rows = ROW_NODE_SELECTOR();
        let populatedTimeslots = Array(rows.length).map((value, index) => COLUMN_NODE_SELECTOR(item));
        console.log(populatedTimeslots);
    }

}

// Each node pertains to a one hour block across the five days
const ROW_NODE_SELECTOR = () => {
    return document.querySelectorAll(".qv_timetable > tbody > .full_hour");
}

// performed against a ROW_NODE, each one pertains to a popualted timeslot
const COLUMN_NODE_SELECTOR = (rowNode) => {
    return rowNode.querySelectorAll("td").filter(node => {
        // if there's no styling, assume it's a populated field
        node.classList.value !== "";
    });
}

