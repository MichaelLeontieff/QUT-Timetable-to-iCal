(() => {
    const TIMETABLE_DATA = {};

    const TableConverter = {
        ROW_NODE_SELECTOR: () => {
            return document.querySelectorAll(".qv_timetable > tbody > .full_hour");
        },
    
        COLUMN_NODE_SELECTOR: (rowNode) => {
            let populatedNodes = [];
            let nodes = rowNode.querySelectorAll("td").forEach(node => {
                // if there's no styling, assume it's a populated field
                node.classList.value !== "" && populatedNodes.push(node);
            });
            return populatedNodes;
        },
    
        getAllNodes: () => {
            let rows = TableConverter.ROW_NODE_SELECTOR();
            return Array(rows.length).fill().map((_, index) => {
                return TableConverter.COLUMN_NODE_SELECTOR(rows[index]);        
            }).filter(item => item.length > 0);
        },

        /**
         * @return Unit ID + type + number
         */
        getItemKey: (node) => {
            return 
        },

        getItemData: (node) => {
            let item = {
                type: node.querySelector(".activity_desc abbr").getAttribute("title"),
                number: 0,
                colour: "",
                length: node.getAttribute("rowspan"),
                unitCode: node.querySelector(".activity_desc strong").innerText,
                location: "",
                sessionCount: "",
                startDate: "",
                endDate: ""
            }

            return item;
        },

        getTimetableInformation: () => {
            let populatedNodes = TableConverter.getAllNodes();

            /**
             * For each node:
             * 
             * - create key in storage object
             * - convert contents into structure
             */
            populatedNodes.forEach(populatedNode => {
                let itemData = TableConverter.getItemData(populatedNode[0]);
                console.log(itemData);
            });

        }
    }
    
    TableConverter.getTimetableInformation();
})();

