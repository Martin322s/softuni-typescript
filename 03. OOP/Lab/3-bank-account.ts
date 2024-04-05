class BankAccount {
    private static nextId: number = 1;
    private static interestRate: number = 0.02;

    public id: number;
    private balance: number;

    constructor() {
        this.id = BankAccount.nextId++;
        this.balance = 0;
    }

    public static setInterestRate(newRate: number): void {
        BankAccount.interestRate = newRate / 100;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getInterest(years: number): number {
        return this.balance * Math.pow(1 + BankAccount.interestRate, years) - this.balance;
    }

    public getId(): number {
        return this.id;
    }

    public getBalance(): number {
        return this.balance;
    }
}


function bankAccount(commands: string[]) {
    let accounts: BankAccount[] = [];

    for (let command of commands) {
        if (command === 'End') {
            break;
        }

        let commandArguments = command.split(' ');
        let commandName = commandArguments[0];
        let commandType = Number(commandArguments[1]);
        let commandValue = Number(commandArguments[2]);

        switch (commandName) {
            case 'Create': {
                let person = new BankAccount();
                accounts.push(person);
                console.log(`Account ID${person.id} created`)
            }
                break;
            case 'Deposit': {
                let account = accounts.find(x => x.id === commandType);
                account?.deposit(commandValue);
                console.log(`Deposited ${commandType} to ID${commandValue}`);
            }
                break;
            case 'SetInterest': {
                BankAccount.setInterestRate(commandType);
                console.log(commandType.toFixed(2));
            }
                break;
        }
    }
}