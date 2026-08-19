function runApp() {
    const tickets: string[] = ["a", "b", "c"];
    printHeader();
    printTickets(tickets);
}

function printHeader(): void {
    console.log("----------------------");
    console.log("| Support Ticket App |");
    console.log("----------------------");
}

function printTickets(tickets: string[]): void {
    for (const ticket of tickets) {
        console.log(ticket);
    }
    console.log(`Number of tickets: ${tickets.length}`);
}

runApp();
