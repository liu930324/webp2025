import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchEventData } from "../utils/api";

const EventTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEventData();
        const formattedData = data.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo[0]?.location || "無地點資料",
          price: item.showInfo[0]?.price || "無票價資料",
        }));
        setEvents(formattedData);
      } catch (error) {
        console.error("資料獲取失敗", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "title", headerName: "標題", flex: 2 },
    { field: "location", headerName: "地點", flex: 1 },
    { field: "price", headerName: "票價", flex: 1 },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={events}
        columns={columns}
        pageSize={10}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default EventTable;
