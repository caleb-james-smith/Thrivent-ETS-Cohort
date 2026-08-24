// Support Ticket Console App

// Type aliases
type Priority = "low" | "medium" | "high";
type Status = "open" | "in_progress" | "resolved";
type Subscription = "none" | "free" | "paid";
type User = Customer | Agent;
type Ticket = SupportTicket | EscalatedSupportTicket;

interface Customer {
    role: "customer";
    id: string | number;
    name: string;
    email: string;
    subscription: Subscription;
}

interface Agent {
    role: "agent";
    id: string | number;
    name: string;
    email: string;
    admin: boolean;
}

interface SupportTicket {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    createdBy: User;
    assignedTo: Agent | "nobody";
    tags: string[];
}

interface EscalatedSupportTicket extends SupportTicket {
    escalatedBy: Agent;
    escalationReason: string;
    escalatedAt: Date;
}

// Customers

const jimmy: Customer = {
    role: "customer",
    id: 101,
    name: "Jimmy",
    email: "jimmy@gmail.com",
    subscription: "none"
};

const katie: Customer = {
    role: "customer",
    id: 102,
    name: "Katie",
    email: "katie@gmail.com",
    subscription: "free"
};

const sam: Customer = {
    role: "customer",
    id: 103,
    name: "Sam",
    email: "sam@gmail.com",
    subscription: "paid"
};

// Agents

const steven: Agent = {
    role: "agent",
    id: 501,
    name: "Steven",
    email: "steven@support.com",
    admin: true
};

const caleb: Agent = {
    role: "agent",
    id: 502,
    name: "Caleb",
    email: "caleb@support.com",
    admin: false
};

const calvin: Agent = {
    role: "agent",
    id: 503,
    name: "Calvin",
    email: "calvin@support.com",
    admin: false
};

function runApp(): void {
    const currentUser: User = caleb;
    const tickets: Ticket[] = createTickets();
    const myTickets: Ticket[] = getMyTickets(tickets, currentUser);
    
    printHeader();
    printUser(currentUser);
    printTickets(myTickets);
    printTicketSummaries(myTickets);
}

function createTickets(): Ticket[] {
    const ticket_1: SupportTicket = {
        id: 1001,
        title: "MacBook not powering on",
        description: "My MacBook will not power on. The battery may be out of charge.",
        priority: "high",
        status: "resolved",
        createdBy: katie,
        assignedTo: calvin,
        tags: ["MacBook", "power"]
    };

    const ticket_2: SupportTicket = {
        id: 1002,
        title: "Vim white background issue",
        description: "In a dark mode terminal, I am trying to use the delek colorscheme. However, this changes the background to white, which I don't want.",
        priority: "low",
        status: "open",
        createdBy: jimmy,
        assignedTo: caleb,
        tags: ["Vim", "terminal", "background"]
    };

    const ticket_3: SupportTicket = {
        id: 1003,
        title: "VS Code TS syntax highlighting not working",
        description: "In VS Code, TypeScript syntax highlighting is not working. For example, TS compiler errors are not showing up.",
        priority: "medium",
        status: "in_progress",
        createdBy: sam,
        assignedTo: steven,
        tags: ["VS Code", "TS", "TypeScript", "syntax"]
    };

    const ticket_4: EscalatedSupportTicket = {
        id: 1004,
        title: "External monitor not working",
        description: "I connected an external monitor to my MacBook. However, it is not displaying anything.",
        priority: "high",
        status: "open",
        createdBy: jimmy,
        assignedTo: "nobody",
        tags: ["monitor", "MacBook"],
        escalatedBy: steven,
        escalationReason: "This is high priority, but nobody has been assigned.",
        escalatedAt: new Date("2026-08-18T08:15:00")
    };

    const tickets: Ticket[] = [ticket_1, ticket_2, ticket_3, ticket_4];

    return tickets;
}

function printHeader(): void {
    console.log("----------------------");
    console.log("| Support Ticket App |");
    console.log("----------------------");
}

function printUser(user: User): void {
    console.log();
    console.log(`User: ${user.name}`);
    console.log(`Role: ${user.role}`);
    if (user.role === "agent") {
        console.log(`Admin: ${user.admin}`);
    }
    console.log();
}

function getMyTickets(tickets: Ticket[], user: User): Ticket[] {
    const myTickets: Ticket[] = [];
    for (const ticket of tickets) {
        // TODO: Create function to determine if the user has permission to view the ticket
        if (user.role === "agent") {
            if (user.admin) {
                myTickets.push(ticket);
            } else {
                if (ticket.createdBy.id === user.id || (ticket.assignedTo !== "nobody" && ticket.assignedTo.id === user.id)) {
                    myTickets.push(ticket);
                }
            }
        } else {
            if (ticket.createdBy.id === user.id) {
                myTickets.push(ticket);
            }
        }
    }
    return myTickets;
}

function printTickets(tickets: Ticket[]): void {
    console.log("Tickets:");
    for (const ticket of tickets) {
        console.log(` - Ticket ${ticket.id}: ${ticket.title}`);
    }
    
    console.log();
    console.log(`Number of tickets: ${tickets.length}`);
    console.log();
    console.log("----------------------");
    console.log();
}

function printTicketSummaries(tickets: Ticket[]): void {
    for (const ticket of tickets) {
        console.log(`Ticket ${ticket.id}:`);
        console.log(` - title: ${ticket.title}`);
        console.log(` - description: ${ticket.description}`);
        console.log(` - priority: ${ticket.priority}`);
        console.log(` - status: ${ticket.status}`);
        console.log(` - createdBy: ${ticket.createdBy.name}`);
        if (typeof ticket.assignedTo === "object") {
            console.log(` - assignedTo: ${ticket.assignedTo.name}`);
        } else {
            console.log(` - assignedTo: ${ticket.assignedTo}`);
        }
        console.log(` - tags: ${ticket.tags.join(", ")}`);
        if ("escalatedBy" in ticket) {
            console.log(` - escalatedBy: ${ticket.escalatedBy.name}`);
            console.log(` - escalationReason: ${ticket.escalationReason}`);
            console.log(` - escalatedAt: ${ticket.escalatedAt}`);
        }
        console.log();
    }
}

runApp();
