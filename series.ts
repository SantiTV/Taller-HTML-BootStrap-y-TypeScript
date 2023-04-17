import { series } from "./Data";

class Series {
  private table: HTMLTableElement;

  constructor(tableId: string) {
    this.table = document.getElementById(tableId) as HTMLTableElement;
    this.createTable();
  }

  private createTable(): void {
    // Create table header
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

    // Create table body
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

    // Add Bootstrap classes to table
    this.table.classList.add("table", "table-striped");
  }
}

const seriesTable = new Series("series-table");
