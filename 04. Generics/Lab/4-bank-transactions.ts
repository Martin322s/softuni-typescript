abstract class CreateAccount<T, U> {
    protected bankName: T;
    protected bankID: U;

    constructor(bankName: T, bankID: U) {
        this.bankName = bankName;
        this.bankID = bankID;
    }
}

class PersonalAccount extends CreateAccount<string, number> {
    public readonly ownerName: string;
    public money: number = 0;
    public recentTransactions: Record<string, number> = {};

    constructor(bankName: string, bankID: number, ownerName: string) {
        super(bankName, bankID);
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.money += amount;
    }

    expense(amount: number, expenseType: string): void {
        if (this.money >= amount) {
            if (this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] += amount;
            } else {
                this.recentTransactions[expenseType] = amount;
            }
            this.money -= amount;
        } else {
            throw new Error(`You can't make ${expenseType} transaction`);
        }
    }

    showDetails(): string {
        let totalMoneySpentOnExpenses = 0;
        for (let amount of Object.values(this.recentTransactions)) {
            totalMoneySpentOnExpenses += amount;
        }
        return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
    }
}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());
