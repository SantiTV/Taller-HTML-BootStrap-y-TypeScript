import { series } from "./Data.ts";

class Series {
  constructor(tableId) {
    this.table = document.getElementById(tableId);
    this.createTable();
  }

  createTable() {
    // Encabezado de la tabla
    const header = this.table.createTHead();
    const row = header.insertRow();
    const idHeader = row.insertCell();
    idHeader.innerText = "ID";
    const nameHeader = row.insertCell();
    nameHeader.innerText = "Name";
    const channelHeader = row.insertCell();
    channelHeader.innerText = "Channel";
    const seasonsHeader = row.insertCell();
    seasonsHeader.innerText = "Seasons";

    // Crear la tabla
    const tbody = this.table.createTBody();
    series.forEach((s) => {
      const row = tbody.insertRow();
      const idCell = row.insertCell();
      idCell.innerText = s.id.toString();
      const nameCell = row.insertCell();
      nameCell.innerText = s.name;
      const channelCell = row.insertCell();
      channelCell.innerText = s.channel;
      const seasonsCell = row.insertCell();
      seasonsCell.innerText = s.seasons.toString();
    });

    this.table.classList.add("table", "table-striped");
  }
}

new Series("series-table");