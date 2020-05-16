import Transaction from '../models/Transaction';

interface Request {
  title: string,
  value: number,
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const acumulator = this.transactions.reduce(
      (acumulator: Balance, transaction: Transaction) => {
        switch (transaction.type) {
          case 'income':
            acumulator.income += transaction.value;
            break;
          case 'outcome':
            acumulator.outcome += transaction.value;
            break;
          default:
            break;
        }
        acumulator.total = acumulator.income - acumulator.outcome;

        return acumulator;
      },
      { income: 0,  outcome: 0,   total: 0},
    );
    return acumulator;
  }

  public create({ title, value, type }: Request): Transaction {
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
